import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PulseOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PulseOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PulseOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M2.25 15H5.25L8.25 3L11.25 21L14.25 10.5L15.75 15H18.75'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M20.25 16.5C21.0784 16.5 21.75 15.8284 21.75 15C21.75 14.1716 21.0784 13.5 20.25 13.5C19.4216 13.5 18.75 14.1716 18.75 15C18.75 15.8284 19.4216 16.5 20.25 16.5Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
