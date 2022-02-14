#!/usr/bin/env sh
# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# Init
git init
git add -A

# Commit
git commit -m 'deploy'

# Push to gh-pages
git push -f git@github.com:BCollignonEcv/app_senbilisationweb.git main:gh-pages

cd -