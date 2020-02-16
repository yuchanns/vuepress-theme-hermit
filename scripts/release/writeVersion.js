#!/usr/bin/env node

const path = require('path')
const fs = require('fs')

// Extract version from CIRCLE_TAG
let version
try {
  [, version] = process.env.CIRCLE_TAG.match(/v(.+)/)
} catch (err) {
  console.error(`Can not extract version from CIRCLE_TAG (${process.env.CIRCLE_TAG})`)
  console.error(err)
  process.exit(1)
}

console.log(`Version: ${version}`)

console.log('Writing to package.json...')
// Write package.json with the version equal to the version encoded in the tag name
const packagePath = path.join(process.cwd(), 'package.json')
const packageContent = JSON.parse(fs.readFileSync(packagePath).toString())
Object.assign(packageContent, {version})
const newPackageContentStr = JSON.stringify(packageContent)
fs.writeFileSync(packagePath, `${newPackageContentStr}\n`)