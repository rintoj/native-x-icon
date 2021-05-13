import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CropOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CropOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CropOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M6.75 2.25V15C6.75 15.5967 6.98705 16.169 7.40901 16.591C7.83097 17.0129 8.40326 17.25 9 17.25H21.75'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M17.25 14.25V9C17.25 8.40326 17.0129 7.83097 16.591 7.40901C16.169 6.98705 15.5967 6.75 15 6.75H9.75'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M17.25 17.25V21.75'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M6.75 6.75H2.25'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
