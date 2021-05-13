import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CheckmarkDoneOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CheckmarkDoneOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CheckmarkDoneOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.75 6L11.25 18L6.75 13.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M6.75 18L2.25 13.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M17.25 6L10.875 13.3125'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
