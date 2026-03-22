#!/bin/bash
# ============================================
# Update video URLs to point to Cloudflare R2
# ============================================
# Usage:
#   bash set-video-cdn.sh https://pub-XXXXX.r2.dev
#   bash set-video-cdn.sh https://cdn.byzantinegeneral.org
#
# This replaces all local video references with CDN URLs.
# Run this ONCE after setting up your R2 bucket.

set -e

if [ -z "$1" ]; then
  echo "Usage: bash set-video-cdn.sh <YOUR_R2_PUBLIC_URL>"
  echo "Example: bash set-video-cdn.sh https://pub-abc123.r2.dev"
  exit 1
fi

CDN_BASE="${1%/}"  # Remove trailing slash if present
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "================================================"
echo "  Updating video URLs to: $CDN_BASE"
echo "================================================"
echo ""

VIDEOS=(
  reel-intro-1-1.mp4 reel-intro-1-2.mp4 reel-intro-2.mp4 reel-intro-3.mp4
  whitepaper-release.mp4 cypherpunks-act1.mp4
  act1-timeline.mp4 act1-wikileaks.mp4
  act2-firstvideo.mp4 act2-lastvideo.mp4 act2-legalactions.mp4
  act3-gavin-misjudging.mp4 act3-gavin-rational.mp4 act3-gavin-vitalik.mp4 act3-meeting-gavin.mp4
  act4-2014context.mp4 act4-epistmistake.mp4 act4-financialdeal.mp4 act4-greatriddle.mp4 act4-worsttime.mp4
  act5-first.mp4 act5-second.mp4 act5-third.mp4
  act6-first.mp4 act6-second.mp4 act6-third.mp4
  act7-first.mp4 act7-second.mp4 act7-third.mp4
)

for HTML in "$SCRIPT_DIR"/index.html "$SCRIPT_DIR"/act*.html; do
  FNAME=$(basename "$HTML")
  CHANGED=0
  for V in "${VIDEOS[@]}"; do
    # Replace src="filename.mp4" with src="CDN_BASE/filename.mp4"
    if grep -q "\"$V\"" "$HTML" 2>/dev/null; then
      sed -i "s|\"$V\"|\"$CDN_BASE/$V\"|g" "$HTML"
      CHANGED=$((CHANGED + 1))
    fi
    # Also replace if already has a CDN URL (re-running the script)
    if grep -q "https://.*/$V\"" "$HTML" 2>/dev/null; then
      sed -i "s|\"https://[^\"]*/$V\"|\"$CDN_BASE/$V\"|g" "$HTML"
    fi
  done
  if [ $CHANGED -gt 0 ]; then
    echo "  Updated $FNAME ($CHANGED videos)"
  fi
done

echo ""
echo "Done! All video URLs now point to $CDN_BASE"
echo ""
echo "Next: push to GitHub with release.sh"
