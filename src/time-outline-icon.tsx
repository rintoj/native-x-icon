import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TimeOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TimeOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TimeOutlineIconProps) {
  const { getColor } = useTheme()
  const strokeColor = getColor?.(color)
  const iconSize = getIconSize(size)

  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 16 16' fill='none'>
      <Path
        d='M8 2C4.687 2 2 4.688 2 8c0 3.313 2.688 6 6 6 3.313 0 6-2.688 6-6 0-3.313-2.688-6-6-6z'
        stroke={strokeColor}
        strokeMiterlimit={10}
      />
      <Path d='M8 4v4.5h3' stroke={strokeColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
