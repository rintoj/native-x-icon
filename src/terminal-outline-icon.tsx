import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TerminalOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TerminalOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TerminalOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.25 2.25H3.75C2.50736 2.25 1.5 3.25736 1.5 4.5V19.5C1.5 20.7426 2.50736 21.75 3.75 21.75H20.25C21.4926 21.75 22.5 20.7426 22.5 19.5V4.5C22.5 3.25736 21.4926 2.25 20.25 2.25Z'
        stroke={contentColor}
        stroke-linejoin='round'
      />
      <Path
        d='M4.5 5.25L8.25 8.25L4.5 11.25'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path d='M9 11.25H12' stroke={contentColor} stroke-linecap='round' stroke-linejoin='round' />
    </Svg>
  )
}
