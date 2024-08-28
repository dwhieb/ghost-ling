import dlx2html      from '@digitallinguistics/dlx2html'
import path          from 'path'
import prettier      from 'prettier'
import scription2dlx from '@digitallinguistics/scription2dlx'

import { readFile, writeFile } from 'fs/promises'

const htmlOptions = {
  classes: [`ex`, `igl`],
  glosses: true,
  tag:     `li`,
}

const prettierOptions = { parser: `html` }

const scriptionPath = path.resolve(import.meta.dirname, `scription.txt`)
const scription     = await readFile(scriptionPath, `utf8`)
const data          = scription2dlx(scription)
const html          = dlx2html(data, htmlOptions)
const prettyHtml    = await prettier.format(html, prettierOptions)
const htmlPath      = path.resolve(import.meta.dirname, `scription.html`)

await writeFile(htmlPath, prettyHtml)
