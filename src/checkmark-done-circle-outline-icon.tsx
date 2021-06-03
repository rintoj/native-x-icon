import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CheckmarkDoneCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CheckmarkDoneCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CheckmarkDoneCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M17.25 9L12.0061 15L9.75848 12.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8.99766 15L6.75 12.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M14.3301 9L11.9137 11.7656'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
