import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ShieldCheckmarkOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ShieldCheckmarkOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ShieldCheckmarkOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.75 8.25L10.5562 14.25L8.25 11.9906'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M21.7078 5.26734C17.5162 4.51547 15.7832 3.95859 12 2.25C8.21668 3.95859 6.48371 4.51547 2.29215 5.26734C1.53277 17.303 11.2771 21.4589 12 21.75C12.7228 21.4589 22.4671 17.303 21.7078 5.26734Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
