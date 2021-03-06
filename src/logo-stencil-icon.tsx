import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoStencilIconProps {
  color?: string
  size?: IconSize
}

export function LogoStencilIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoStencilIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M8.85003 15.6592H18.0999L13.1002 20.9997H3.90002L8.85003 15.6592Z'
        fill={contentColor}
      />
      <Path d='M24 9.32812H4.99734L0 14.6719H19.0027L24 9.32812Z' fill={contentColor} />
      <Path d='M10.8842 3H20.0999L15.1227 8.34047H5.90002L10.8842 3Z' fill={contentColor} />
    </Svg>
  )
}
