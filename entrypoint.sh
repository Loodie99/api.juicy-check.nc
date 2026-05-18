#!/bin/sh
set -e

echo "Running drizzle-kit push..."
npx drizzle-kit push --force

echo "Starting application..."
exec node dist/src/main.js
