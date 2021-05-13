import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReturnUpForwardOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ReturnUpForwardOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ReturnUpForwardOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.75 7.5L21.75 10.5L18.75 13.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M21 10.5H7.21875C4.46438 10.5 2.25 12.8123 2.25 15.5625V16.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
