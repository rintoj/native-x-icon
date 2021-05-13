import { sync } from 'fast-glob'
import { readFileSync, writeFileSync } from 'fs-extra'
import { compile } from 'handlebars'
import { toClassName } from 'name-util'
import { basename } from 'path'

export function compileReadme(pattern = 'src/*-icon.tsx') {
  const files = sync(pattern)
  const iconNames = files.map(file => basename(file).replace('-icon', '').replace('.tsx', ''))
  const content = readFileSync('./devops/README.md.tpl', 'utf8')
  const template = compile(content)
  writeFileSync(
    './README.md',
    template({
      icons: iconNames.map(icon => ({
        iconName: icon,
        componentName: toClassName(icon),
      })),
    }),
  )
}
