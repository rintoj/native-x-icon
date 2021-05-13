import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface StarHalfOutlineIconProps {
  color?: string
  size?: IconSize
}

export function StarHalfOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: StarHalfOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.5 9.75H14.4375L12 2.25L9.5625 9.75H1.5L8.0625 14.25L5.53125 21.75L12 17.0625L18.4688 21.75L15.9375 14.25L22.5 9.75Z'
        stroke={contentColor}
        stroke-linejoin='round'
      />
      <Path
        d='M12 2.25V17.0625L5.53125 21.75L8.0625 14.25L1.5 9.75H9.5625L12 2.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
