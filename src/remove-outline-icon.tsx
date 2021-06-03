import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface RemoveOutlineIconProps {
  color?: string
  size?: IconSize
}

export function RemoveOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: RemoveOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path d='M18.75 12H5.25' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
