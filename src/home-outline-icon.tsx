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
  const strokeColor = getColor?.(color)
  const iconSize = getIconSize(size)

  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 32 32' fill='none'>
      <Path
        d='M5 13.25V28a1 1 0 001 1h6v-8.5a1.5 1.5 0 011.5-1.5h5a1.5 1.5 0 011.5 1.5V29h6a1 1 0 001-1V13.25'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M30 16L16.68 3.25c-.312-.33-1.043-.334-1.36 0L2 16M25 11.188V4h-3v4.313'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
