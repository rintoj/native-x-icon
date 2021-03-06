import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FitnessOutlineIconProps {
  color?: string
  size?: IconSize
}

export function FitnessOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: FitnessOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.5432 3.75C13.5001 3.75 12.0001 6.75 12.0001 6.75C12.0001 6.75 10.5001 3.75 7.45693 3.75C4.9838 3.75 3.02536 5.81906 3.00005 8.28797C2.94849 13.4128 7.06552 17.0573 11.5782 20.1202C11.7026 20.2048 11.8496 20.2501 12.0001 20.2501C12.1505 20.2501 12.2975 20.2048 12.4219 20.1202C16.9341 17.0573 21.0511 13.4128 21.0001 8.28797C20.9747 5.81906 19.0163 3.75 16.5432 3.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M2.25 12H7.5L9.75 7.5L12 15L14.25 10.5L15.75 13.5H21.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
