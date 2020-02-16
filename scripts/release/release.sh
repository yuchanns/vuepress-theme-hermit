#!/bin/bash

# The script builds the package and publishes it to npm

set -e

# A pre-release is a version with a label i.e. v2.0.0-alpha.1
if [[ "$CIRCLE_TAG" =~ ^v[0-9]+\.[0-9]+\.[0-9]+-.+$ ]]
then
  IS_PRE_RELEASE=true
else
  IS_PRE_RELEASE=false
fi

./scripts/release/writeVersion.js

echo "//registry.npmjs.org/:_authToken=$NPM_KEY" > ~/.npmrc

if [ "$IS_PRE_RELEASE" = true ]
then
  npm publish --tag next
else
  npm publish
fi
cd - || exit