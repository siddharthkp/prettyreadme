#!/usr/bin/env node

const fs = require('fs')
const { info } = require('prettycli')
const readPkgUp = require('read-pkg-up')

const { name } = readPkgUp.sync().pkg

const content = `<p align="center">
  <img src="https://octodex.github.com/images/codercat.jpg" height="200px"/>
  <br><br>
  <b>Description goes here</b>
  <br><br>
  <img src="https://travis-ci.org/siddharthkp/${name}.svg?branch=master&maxAge=3600"/>
</p>

&nbsp;

#### install

\`\`\`
npm install ${name}
\`\`\`

&nbsp;

#### usage

\`\`\`js
const repo = require('${name}')

// add how to use
\`\`\`

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)

`

const path = process.cwd() + '/README.md'
fs.writeFileSync(path, content, 'utf8')

info('✔︎', 'Overwritten README.md in your repo')
