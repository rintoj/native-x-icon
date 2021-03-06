import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MenuIconProps {
  color?: string
  size?: IconSize
}

export function MenuIcon({ size = 'normal', color = COLOR.SECONDARY }: MenuIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 7.125C3 6.50368 3.50368 6 4.125 6H19.875C20.4963 6 21 6.50368 21 7.125C21 7.74632 20.4963 8.25 19.875 8.25H4.125C3.50368 8.25 3 7.74632 3 7.125Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 12C3 11.3787 3.50368 10.875 4.125 10.875H19.875C20.4963 10.875 21 11.3787 21 12C21 12.6213 20.4963 13.125 19.875 13.125H4.125C3.50368 13.125 3 12.6213 3 12Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 16.875C3 16.2537 3.50368 15.75 4.125 15.75H19.875C20.4963 15.75 21 16.2537 21 16.875C21 17.4963 20.4963 18 19.875 18H4.125C3.50368 18 3 17.4963 3 16.875Z'
        fill={contentColor}
      />
    </Svg>
  )
}
