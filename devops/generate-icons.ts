import { sync } from 'fast-glob'
import { readFileSync, writeFileSync } from 'fs-extra'
import { toCamelCase, toClassName, toDashedName } from 'name-util'
import { basename } from 'path'
import { parseString } from 'xml2js'
import { compileReadme } from './readme-compiler'

const componentTemplate = (name: string, jsxContent: string, imports: string[]) => `
import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { ${imports.join(', ')} } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ${name}IconProps {
  color?: string
  size?: IconSize
}

export function ${name}Icon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ${name}IconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    ${jsxContent}
  )
}
`

function processAttributes(name: string, property: string, value: string) {
  if (name === 'svg') {
    switch (property) {
      case 'width':
        return '{iconSize}'
      case 'height':
        return '{iconSize}'
    }
  }
  switch (property) {
    case 'fill':
      if (value !== 'none') {
        return '{contentColor}'
      }
      break
    case 'stroke':
      if (value !== 'none') {
        return '{contentColor}'
      }
  }
  return `"${value}"`
}

function parseElement(name: string, element: Record<string, string> = {}) {
  const props = element.$ as any
  const innerElements = Object.keys(element).filter(item => item !== '$')
  const content: string = innerElements
    .reduce((a, key) => [...a, parseInnerElements(key, element[key] as any)], [] as any)
    .join('\n')
  return composeElement(name, props, content)
}

function parseInnerElements(name: string, elements: Array<Record<string, string>> = []) {
  return elements.map(element => parseElement(name, element)).join('\n')
}

function parseImports(element: Record<string, string> = {}): string[] {
  const innerElements = Object.keys(element).filter(item => item !== '$')
  return innerElements
    .reduce(
      (a, key) => [...a, toClassName(key), ...parseInnerImports(element[key] as any)],
      [] as any,
    )
    .filter((i: string) => i != null && i !== '')
}

function parseInnerImports(elements: Array<Record<string, string>> = []): string[] {
  return elements.reduce((a, element) => [...a, ...parseImports(element)], [] as any)
}

function composeElement(name: string, props: Record<string, string> = {}, content: string) {
  const elementName = toClassName(name)
  const attributes = Object.keys(props)
    .filter(property => !['xmlns'].includes(property))
    .map(
      property => `${toCamelCase(property)}=${processAttributes(name, property, props[property])}`,
    )
    .join(' ')
  if (!content) {
    return `<${elementName} ${attributes} />`
  }
  return `<${elementName} ${attributes}>
    ${content}
  </${elementName}>`
}

async function regenerateIndex(pattern = 'src/*.tsx') {
  const files = sync(pattern)
  const fileContent = files
    .map(file => `export * from './${basename(file).replace('.tsx', '')}'`)
    .join('\n')
  writeFileSync('src/index.ts', fileContent, 'utf8')
}

async function processFile(file: string) {
  const name = toClassName(basename(file).replace('.svg', ''))
  const content = readFileSync(file, 'utf8')
  const xml: any = await new Promise((resolve, reject) =>
    parseString(content, (err, data) => (err ? reject(err) : resolve(data))),
  )
  const jsxContent = parseElement('svg', xml.svg)
  const imports = parseImports(xml.svg)
  const fileContent = componentTemplate(name, jsxContent, Array.from(new Set(imports)))
  writeFileSync(`src/${toDashedName(name)}-icon.tsx`, fileContent, 'utf8')
}

async function buildIcons(patterns = 'icons/*.svg') {
  const files = sync(patterns)
  files.map(processFile)
  regenerateIndex()
  compileReadme()
}

buildIcons()
