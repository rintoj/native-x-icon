import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FilterCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function FilterCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: FilterCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const strokeColor = getColor?.(color)
  const iconSize = getIconSize(size)

  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9z'
        stroke={strokeColor}
        strokeMiterlimit={10}
      />
      <Path
        d='M6.75 9.75h10.5M8.25 12.75h7.5M10.5 15.75h3'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
