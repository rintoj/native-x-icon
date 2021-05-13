import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CodeIconProps {
  color?: string
  size?: IconSize
}

export function CodeIcon({ size = 'normal', color = COLOR.SECONDARY }: CodeIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M7.50011 18.2343C7.26171 18.2346 7.03141 18.1479 6.8523 17.9906L0.852297 12.7406C0.74677 12.6482 0.662205 12.5343 0.604268 12.4066C0.54633 12.2789 0.516357 12.1402 0.516357 12C0.516357 11.8597 0.54633 11.7211 0.604268 11.5933C0.662205 11.4656 0.74677 11.3517 0.852297 11.2593L6.8523 6.00934C7.04878 5.8374 7.30553 5.75057 7.56604 5.76793C7.82656 5.78529 8.0695 5.90543 8.24144 6.10192C8.41337 6.29841 8.50021 6.55515 8.48285 6.81566C8.46549 7.07618 8.34535 7.31912 8.14886 7.49106L2.99495 12L8.14839 16.5089C8.29922 16.6407 8.40623 16.8155 8.45511 17.0098C8.504 17.2041 8.49244 17.4086 8.42197 17.5962C8.35151 17.7837 8.2255 17.9453 8.06078 18.0593C7.89605 18.1734 7.70045 18.2344 7.50011 18.2343Z'
        fill={contentColor}
      />
      <Path
        d='M16.4999 18.2343C16.2996 18.2345 16.1039 18.1735 15.9391 18.0595C15.7743 17.9455 15.6482 17.784 15.5777 17.5964C15.5072 17.4088 15.4956 17.2042 15.5444 17.0099C15.5933 16.8155 15.7003 16.6408 15.8512 16.5089L21.0051 12L15.8517 7.49106C15.6552 7.31912 15.535 7.07618 15.5177 6.81566C15.5003 6.55515 15.5871 6.29841 15.7591 6.10192C15.931 5.90543 16.174 5.78529 16.4345 5.76793C16.695 5.75057 16.9517 5.8374 17.1482 6.00934L23.1482 11.2593C23.2538 11.3517 23.3383 11.4656 23.3963 11.5933C23.4542 11.7211 23.4842 11.8597 23.4842 12C23.4842 12.1402 23.4542 12.2789 23.3963 12.4066C23.3383 12.5343 23.2538 12.6482 23.1482 12.7406L17.1482 17.9906C16.969 18.1481 16.7385 18.2348 16.4999 18.2343Z'
        fill={contentColor}
      />
    </Svg>
  )
}
