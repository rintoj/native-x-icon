import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface RadioButtonOffOutlineIconProps {
  color?: string
  size?: IconSize
}

export function RadioButtonOffOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: RadioButtonOffOutlineIconProps) {
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
    </Svg>
  )
}
