import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ArrowRedoOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ArrowRedoOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ArrowRedoOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 12L12.75 4.125V8.625C4.85484 8.625 3 14.2861 3 19.875C5.27859 16.9575 7.29375 15.375 12.75 15.375V19.875L21 12Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
    </Svg>
  )
}
