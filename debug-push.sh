#!/bin/bash
# Debug push — shows exactly what's happening
set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_URL="https://github.com/kwesi-strydom/Thebyzantinegeneral.git"
STAGE_DIR=$(mktemp -d)

echo "1. Cloning repo..."
git clone "$REPO_URL" "$STAGE_DIR/repo"
cd "$STAGE_DIR/repo"

echo ""
echo "2. Current commits in repo:"
git log --oneline

echo ""
echo "3. Current files in repo:"
ls -la *.html 2>/dev/null || echo "No HTML files found"

echo ""
echo "4. Checking size of current index.html:"
wc -l index.html 2>/dev/null || echo "No index.html"

echo ""
echo "5. Copying new index.html from split folder..."
cp "$SCRIPT_DIR/index.html" ./index.html
echo "New index.html line count: $(wc -l < ./index.html)"

echo ""
echo "6. Git status after copy:"
git status

echo ""
echo "7. Staging and committing..."
git add index.html
if git diff --cached --quiet; then
  echo ">>> NO CHANGES DETECTED — the file is identical"
  echo ">>> This means the previous push DID work"
else
  echo ">>> Changes detected, committing..."
  git commit -m "Replace old single-page site with split version (intro + countdown)"
  echo ""
  echo "8. Pushing..."
  git push origin main
  echo ""
  echo "SUCCESS! Pushed to GitHub."
fi

echo ""
echo "9. Final commit log:"
git log --oneline

echo ""
echo "Cleaning up..."
cd /
rm -rf "$STAGE_DIR"
echo "Done!"
