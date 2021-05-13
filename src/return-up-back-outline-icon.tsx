import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReturnUpBackOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ReturnUpBackOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ReturnUpBackOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M5.25 7.5L2.25 10.5L5.25 13.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M3 10.5H16.7812C19.5356 10.5 21.75 12.8123 21.75 15.5625V16.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
