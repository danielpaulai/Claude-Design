#!/bin/bash
# Build public/brand-in-a-box.zip from intake/ + examples/.
# Run from anywhere — the script cd's to the repo root.

set -euo pipefail

cd "$(dirname "$0")/.."
REPO_ROOT="$PWD"
OUT="$REPO_ROOT/public/brand-in-a-box.zip"
STAGING=$(mktemp -d)

# Lay out the kit structure inside staging
cp -r intake/. "$STAGING/"
mkdir -p "$STAGING/EXAMPLES"
cp -r examples/. "$STAGING/EXAMPLES/"

# Strip macOS junk
find "$STAGING" -name '.DS_Store' -delete

# Zip it
mkdir -p "$REPO_ROOT/public"
rm -f "$OUT"
( cd "$STAGING" && zip -rq "$OUT" . )

# Cleanup
rm -rf "$STAGING"

# Report
SIZE=$(du -h "$OUT" | cut -f1)
echo "✓ Built $OUT ($SIZE)"
echo ""
echo "Contents:"
unzip -l "$OUT" | head -30
