import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReturnDownBackOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ReturnDownBackOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ReturnDownBackOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M5.25 16.5L2.25 13.5L5.25 10.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M3 13.5H16.7812C19.5356 13.5 21.75 11.1877 21.75 8.4375V7.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
