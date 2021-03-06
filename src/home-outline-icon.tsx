import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HomeOutlineIconProps {
  color?: string
  size?: IconSize
}

export function HomeOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: HomeOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M3.75 9.9375V21C3.75 21.1989 3.82902 21.3897 3.96967 21.5303C4.11032 21.671 4.30109 21.75 4.5 21.75H9V15.375C9 15.0766 9.11853 14.7905 9.3295 14.5795C9.54048 14.3685 9.82663 14.25 10.125 14.25H13.875C14.1734 14.25 14.4595 14.3685 14.6705 14.5795C14.8815 14.7905 15 15.0766 15 15.375V21.75H19.5C19.6989 21.75 19.8897 21.671 20.0303 21.5303C20.171 21.3897 20.25 21.1989 20.25 21V9.9375'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M22.5 11.9999L12.5105 2.43739C12.2761 2.18989 11.7281 2.18708 11.4895 2.43739L1.5 11.9999'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18.75 8.39062V3H16.5V6.23438'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
