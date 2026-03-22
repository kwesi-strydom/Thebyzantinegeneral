#!/bin/bash
# ============================================
# Release an Act to the live website
# ============================================
# Usage:
#   bash release.sh              ← pushes index.html (initial release)
#   bash release.sh 1            ← pushes act1.html
#   bash release.sh 2            ← pushes act2.html
#   bash release.sh 1 2 3        ← pushes acts 1, 2, and 3
#   bash release.sh all          ← pushes everything

set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_URL="https://github.com/kwesi-strydom/Thebyzantinegeneral.git"
STAGE_DIR=$(mktemp -d)

echo "================================================"
echo "  The Byzantine General — Release Script"
echo "================================================"
echo ""

# Clone the repo
echo "Cloning repo..."
git clone "$REPO_URL" "$STAGE_DIR/repo" --quiet
cd "$STAGE_DIR/repo"

FILES_TO_ADD=""

if [ $# -eq 0 ]; then
  # No arguments: push index.html (initial release)
  echo "Releasing: index.html (landing page + introduction)"
  cp "$SCRIPT_DIR/index.html" ./index.html
  FILES_TO_ADD="index.html"

elif [ "$1" = "all" ]; then
  # Push everything
  echo "Releasing: ALL pages"
  cp "$SCRIPT_DIR/index.html" ./index.html
  for i in 1 2 3 4 5 6 7; do
    cp "$SCRIPT_DIR/act${i}.html" ./
  done
  FILES_TO_ADD="index.html act1.html act2.html act3.html act4.html act5.html act6.html act7.html"

else
  # Push specific acts
  # Always include index.html to keep it up to date
  cp "$SCRIPT_DIR/index.html" ./index.html
  FILES_TO_ADD="index.html"
  for ACT in "$@"; do
    if [ -f "$SCRIPT_DIR/act${ACT}.html" ]; then
      echo "Releasing: Act ${ACT}"
      cp "$SCRIPT_DIR/act${ACT}.html" ./
      FILES_TO_ADD="$FILES_TO_ADD act${ACT}.html"
    else
      echo "WARNING: act${ACT}.html not found, skipping"
    fi
  done
fi

echo ""
echo "Committing..."
git add $FILES_TO_ADD
if git diff --cached --quiet; then
  echo "No changes to push — files are already up to date."
else
  git commit -m "Release: $(echo $FILES_TO_ADD | tr ' ' ', ')"
  echo "Pushing to GitHub..."
  git push origin main
  echo ""
  echo "================================================"
  echo "  Released successfully!"
  echo "  https://github.com/kwesi-strydom/Thebyzantinegeneral"
  echo "================================================"
fi

echo ""
echo "Cleaning up..."
cd /
rm -rf "$STAGE_DIR"
echo "Done!"
