import { sync } from 'fast-glob'
import { readFileSync, writeFileSync } from 'fs-extra'
import { compile } from 'handlebars'
import { toClassName } from 'name-util'
import { basename } from 'path'

function toOutline(iconName: string) {
  return `${iconName}-outline`
}

export function compileReadme(pattern = 'src/*-icon.tsx') {
  const files = sync(pattern)
  const iconNames = files.map(file => basename(file).replace('-icon', '').replace('.tsx', ''))
  const iconsById = (Object as any).fromEntries(iconNames.map(iconName => [iconName, true]))
  const icons = iconNames
    .filter(i => {
      return iconsById[toOutline(i)] || !i.endsWith('-outline')
    })
    .map(iconName => {
      const outlineIconName = toOutline(iconName)
      const hasOutline = iconsById[outlineIconName]
      return {
        iconName,
        componentName: toClassName(iconName),
        hasOutline,
        outlineIconName: hasOutline ? outlineIconName : '-',
        outlineComponentName: hasOutline ? toClassName(outlineIconName) : '-',
      }
    })
  const content = readFileSync('./devops/README.md.tpl', 'utf8')
  const template = compile(content)
  writeFileSync('./README.md', template({ icons }))
}
