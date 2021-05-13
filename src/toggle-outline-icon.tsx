import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ToggleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ToggleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ToggleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.25 18C20.5637 18 23.25 15.3137 23.25 12C23.25 8.68629 20.5637 6 17.25 6C13.9363 6 11.25 8.68629 11.25 12C11.25 15.3137 13.9363 18 17.25 18Z'
        stroke={contentColor}
        stroke-linejoin='round'
      />
      <Path
        d='M17.25 6H6.75C3.43629 6 0.75 8.68629 0.75 12C0.75 15.3137 3.43629 18 6.75 18H17.25C20.5637 18 23.25 15.3137 23.25 12C23.25 8.68629 20.5637 6 17.25 6Z'
        stroke={contentColor}
        stroke-linejoin='round'
      />
    </Svg>
  )
}
