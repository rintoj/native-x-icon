import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReturnDownForwardOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ReturnDownForwardOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ReturnDownForwardOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.75 16.5L21.75 13.5L18.75 10.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21 13.5H7.21875C4.46438 13.5 2.25 11.1877 2.25 8.4375V7.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
