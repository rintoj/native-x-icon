import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MoveOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MoveOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: MoveOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M8.25 5.25L12 1.5L15.75 5.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M11.999 1.5L12 22.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8.25 18.75L12 22.5L15.75 18.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18.75 8.25L22.5 12L18.75 15.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M5.25 8.25L1.5 12L5.25 15.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M1.5 12H22.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
