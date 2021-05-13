import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoWindowsIconProps {
  color?: string
  size?: IconSize
}

export function LogoWindowsIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoWindowsIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path d='M22.5 12.4219H10.875V20.8125L22.5 22.5V12.4219Z' fill={contentColor} />
      <Path d='M10.125 12.4219H1.5V19.4531L10.125 20.7047V12.4219Z' fill={contentColor} />
      <Path d='M22.5 1.5L10.875 3.15938V11.6719H22.5V1.5Z' fill={contentColor} />
      <Path d='M10.125 3.26794L1.5 4.50076V11.6726H10.125V3.26794Z' fill={contentColor} />
    </Svg>
  )
}
