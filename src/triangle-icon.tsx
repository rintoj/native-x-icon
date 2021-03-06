import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TriangleIconProps {
  color?: string
  size?: IconSize
}

export function TriangleIcon({ size = 'normal', color = COLOR.SECONDARY }: TriangleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.75 21.75H2.25005C2.12012 21.75 1.99242 21.7163 1.87946 21.6521C1.7665 21.5879 1.67215 21.4955 1.60566 21.3839C1.53916 21.2722 1.50281 21.1452 1.50016 21.0153C1.4975 20.8854 1.52864 20.7571 1.59052 20.6428L11.3405 2.64284C11.4049 2.52401 11.5001 2.42477 11.6162 2.35561C11.7323 2.28645 11.8649 2.24994 12 2.24994C12.1352 2.24994 12.2678 2.28645 12.3839 2.35561C12.5 2.42477 12.5952 2.52401 12.6596 2.64284L22.4096 20.6428C22.4715 20.7571 22.5026 20.8854 22.4999 21.0153C22.4973 21.1452 22.4609 21.2722 22.3944 21.3839C22.328 21.4955 22.2336 21.5879 22.1206 21.6521C22.0077 21.7163 21.88 21.75 21.75 21.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
