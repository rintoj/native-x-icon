import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SunnyOutlineIconProps {
  color?: string
  size?: IconSize
}

export function SunnyOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SunnyOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path d='M12 2.25V4.5' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
      <Path d='M12 19.5V21.75' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
      <Path
        d='M18.8943 5.10571L17.3033 6.69665'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M6.69665 17.3029L5.10571 18.8938'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path d='M21.75 12H19.5' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
      <Path d='M4.5 12H2.25' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
      <Path
        d='M18.8943 18.8938L17.3033 17.3029'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M6.69665 6.69665L5.10571 5.10571'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}
