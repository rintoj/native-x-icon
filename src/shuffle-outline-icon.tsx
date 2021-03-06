import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ShuffleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ShuffleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ShuffleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.75 14.25L21 16.5L18.75 18.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18.75 5.25L21 7.5L18.75 9.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M3 16.5H6.99328C7.61059 16.5 8.21834 16.3476 8.76261 16.0563C9.30688 15.765 9.77083 15.3439 10.1133 14.8303L12 12'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M3 7.5H6.99328C7.61059 7.50001 8.21834 7.65241 8.76261 7.94368C9.30688 8.23495 9.77083 8.65608 10.1133 9.16969L13.8867 14.8303C14.2292 15.3439 14.6931 15.765 15.2374 16.0563C15.7817 16.3476 16.3894 16.5 17.0067 16.5H19.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M19.5 7.5H17.0067C16.3894 7.50001 15.7817 7.65241 15.2374 7.94368C14.6931 8.23495 14.2292 8.65608 13.8867 9.16969L13.5 9.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
