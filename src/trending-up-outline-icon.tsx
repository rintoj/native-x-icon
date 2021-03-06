import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TrendingUpOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TrendingUpOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TrendingUpOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.5 6.75H21.75V12'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M2.25 17.25L7.93922 11.5608C8.07851 11.4215 8.24388 11.3109 8.4259 11.2355C8.60791 11.1601 8.80299 11.1213 9 11.1213C9.19701 11.1213 9.39209 11.1601 9.5741 11.2355C9.75612 11.3109 9.92149 11.4215 10.0608 11.5608L12.4392 13.9392C12.5785 14.0785 12.7439 14.1891 12.9259 14.2645C13.1079 14.3399 13.303 14.3787 13.5 14.3787C13.697 14.3787 13.8921 14.3399 14.0741 14.2645C14.2561 14.1891 14.4215 14.0785 14.5608 13.9392L21 7.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
