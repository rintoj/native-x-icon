import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ArrowForwardCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ArrowForwardCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ArrowForwardCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.3102 15.75L16.0311 12L12.3102 8.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.5142 12H7.96875'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 21C16.9688 21 21 16.9688 21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
    </Svg>
  )
}
