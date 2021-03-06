import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoAngularIconProps {
  color?: string
  size?: IconSize
}

export function LogoAngularIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoAngularIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path d='M10.011 12.0003H13.9883L11.9994 7.81158L10.011 12.0003Z' fill={contentColor} />
      <Path
        d='M12 1.5L1.5 5.25L3.66188 18L12 22.5L20.332 18L22.5 5.25L12 1.5ZM16.125 16.5L14.8786 13.875H9.12094L7.875 16.5H6L12 3.375L18 16.5H16.125Z'
        fill={contentColor}
      />
    </Svg>
  )
}
