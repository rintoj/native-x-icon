import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface EaselOutlineIconProps {
  color?: string
  size?: IconSize
}

export function EaselOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: EaselOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.25 3.75H3.75C2.92157 3.75 2.25 4.42157 2.25 5.25V15C2.25 15.8284 2.92157 16.5 3.75 16.5H20.25C21.0784 16.5 21.75 15.8284 21.75 15V5.25C21.75 4.42157 21.0784 3.75 20.25 3.75Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path d='M12 19.5V16.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M12 3.75V2.25' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M18.75 21.75L17.25 16.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M5.25 21.75L6.75 16.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
