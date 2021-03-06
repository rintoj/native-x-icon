import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoDropboxIconProps {
  color?: string
  size?: IconSize
}

export function LogoDropboxIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoDropboxIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.015 5.9175L6.3825 9.58547L12.015 13.253L6.3825 16.9219L0.75 13.2225L6.3825 9.555L0.75 5.9175L6.3825 2.25L12.015 5.9175ZM6.3525 18.0825L11.985 14.4145L17.6175 18.0825L11.985 21.75L6.3525 18.0825ZM12.015 13.2225L17.6475 9.555L12.015 5.9175L17.6175 2.25L23.25 5.9175L17.6175 9.58547L23.25 13.253L17.6175 16.9219L12.015 13.2225Z'
        fill={contentColor}
      />
    </Svg>
  )
}
