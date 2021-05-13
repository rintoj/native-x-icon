import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MenuOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MenuOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: MenuOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M3.75 7.5H20.25'
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <Path
        d='M3.75 12H20.25'
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <Path
        d='M3.75 16.5H20.25'
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
    </Svg>
  )
}
