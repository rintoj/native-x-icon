import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SchoolOutlineIconProps {
  color?: string
  size?: IconSize
}

export function SchoolOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SchoolOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M1.5 9L12 3L22.5 9L12 15L1.5 9Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M5.25 11.25V17.25L12 21L18.75 17.25V11.25'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M22.5 17.25V9'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path d='M12 15V21' stroke={contentColor} stroke-linecap='round' stroke-linejoin='round' />
    </Svg>
  )
}
