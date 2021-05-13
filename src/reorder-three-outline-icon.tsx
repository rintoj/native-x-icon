import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReorderThreeOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ReorderThreeOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ReorderThreeOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path d='M4.5 12H19.5' stroke={contentColor} stroke-linecap='round' stroke-linejoin='round' />
      <Path
        d='M4.5 8.25H19.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M4.5 15.75H19.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
