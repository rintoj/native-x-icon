import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SearchOutlineIconProps {
  color?: string
  size?: IconSize
}

export function SearchOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SearchOutlineIconProps) {
  const { getColor } = useTheme()
  const strokeColor = getColor?.(color)
  const iconSize = getIconSize(size)

  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M10.364 3a7.364 7.364 0 100 14.727 7.364 7.364 0 000-14.727v0z'
        stroke={strokeColor}
        strokeMiterlimit={10}
      />
      <Path
        d='M15.857 15.858L21 21.001'
        stroke={strokeColor}
        strokeMiterlimit={10}
        strokeLinecap='round'
      />
    </Svg>
  )
}
