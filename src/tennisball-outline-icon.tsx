import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TennisballOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TennisballOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TennisballOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21.6295 12.7238C21.3909 12.7411 21.2433 12.75 21 12.75C15.615 12.75 11.25 8.385 11.25 3C11.25 2.74828 11.2594 2.59266 11.2781 2.34375'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M2.32739 11.2762C2.32739 11.2762 2.75817 11.25 3.00005 11.25C8.38505 11.25 12.75 15.615 12.75 21C12.75 21.2522 12.7215 21.6562 12.7215 21.6562'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
