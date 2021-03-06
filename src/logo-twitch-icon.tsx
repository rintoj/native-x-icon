import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoTwitchIconProps {
  color?: string
  size?: IconSize
}

export function LogoTwitchIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoTwitchIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M3.75 1.5L2.25 5.25V19.5H6.75V22.5H9.75L12.75 19.5H16.5L21.75 14.25V1.5H3.75ZM19.5 13.5L16.5 16.5H12L9 19.5V16.5H5.25V3.75H19.5V13.5Z'
        fill={contentColor}
      />
      <Path d='M17.25 6.70312H15V12.75H17.25V6.70312Z' fill={contentColor} />
      <Path d='M12 6.70312H9.75V12.75H12V6.70312Z' fill={contentColor} />
    </Svg>
  )
}
