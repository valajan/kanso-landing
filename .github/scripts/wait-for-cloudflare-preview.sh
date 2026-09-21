#!/usr/bin/env bash
# Waits for Cloudflare Pages to finish deploying a commit, then prints the
# preview URL of that exact deployment.
#
# Cloudflare Pages is connected to this repository through its GitHub
# integration, which reports each build as a check run on the commit. The run's
# summary carries two URLs: the branch alias, which moves with every push, and
# the per-deployment URL (https://<hash>.<project>.pages.dev), which is pinned
# to this build. The audit must target the second, or a later push could swap
# the page out from under it.
#
# Usage: wait-for-cloudflare-preview.sh <sha>
# Needs: gh authenticated with checks:read, GH_REPO=owner/name.
set -euo pipefail

sha="${1:?usage: wait-for-cloudflare-preview.sh <sha>}"
timeout_seconds="${PREVIEW_TIMEOUT_SECONDS:-900}"
deadline=$(( $(date +%s) + timeout_seconds ))

log() { echo "$*" >&2; }

while :; do
  run=$(gh api "repos/${GH_REPO}/commits/${sha}/check-runs" \
    --jq '[.check_runs[] | select(.app.slug == "cloudflare-workers-and-pages")] | first // empty | [.status, (.conclusion // ""), (.output.summary // "")] | @tsv' \
    || true)

  if [[ -n "$run" ]]; then
    status=$(cut -f1 <<<"$run")
    conclusion=$(cut -f2 <<<"$run")
    if [[ "$status" == "completed" ]]; then
      if [[ "$conclusion" != "success" ]]; then
        log "Cloudflare Pages deployment ended with '${conclusion}' — nothing to audit."
        exit 1
      fi
      # The summary is HTML with escaped newlines; the per-deployment URL is the
      # one whose first label is the short deployment hash.
      url=$(cut -f3- <<<"$run" | grep -oE 'https://[0-9a-f]{8}\.[a-z0-9-]+\.pages\.dev' | head -n1 || true)
      if [[ -z "$url" ]]; then
        log "Cloudflare Pages reported success but no deployment URL was found in its check run."
        exit 1
      fi
      break
    fi
    log "Cloudflare Pages deployment ${status}…"
  else
    log "Waiting for Cloudflare Pages to pick up ${sha:0:7}…"
  fi

  if (( $(date +%s) >= deadline )); then
    log "Timed out after ${timeout_seconds}s waiting for the Cloudflare Pages deployment."
    exit 1
  fi
  sleep 15
done

# "Deploy successful" can precede the first byte being servable by a moment.
for _ in $(seq 1 12); do
  if curl -fsS -o /dev/null --max-time 10 "$url"; then
    echo "$url"
    exit 0
  fi
  sleep 5
done

log "${url} did not answer with a 2xx after deployment."
exit 1
