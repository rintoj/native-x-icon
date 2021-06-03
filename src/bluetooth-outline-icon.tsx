import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BluetoothOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BluetoothOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BluetoothOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M6.75 16.5L17.25 7.5L12 2.25V21.75L17.25 16.5L6.75 7.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
