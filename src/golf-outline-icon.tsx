import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GolfOutlineIconProps {
  color?: string
  size?: IconSize
}

export function GolfOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: GolfOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 18.75V1.5L20.25 5.25L12 9'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12 15.75C7.92188 15.75 3.78282 17.775 3.01688 21.5972C2.92454 22.058 3.21423 22.5 3.75001 22.5H20.25C20.7863 22.5 21.0759 22.058 20.9836 21.5972C20.2172 17.775 16.0781 15.75 12 15.75Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
    </Svg>
  )
}
