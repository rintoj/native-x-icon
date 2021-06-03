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
        d='M6.75 9.75H17.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8.25 12.75H15.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M10.5 15.75H13.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
