import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CardOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CardOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CardOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.125 4.5H4.875C3.42525 4.5 2.25 5.67525 2.25 7.125V16.875C2.25 18.3247 3.42525 19.5 4.875 19.5H19.125C20.5747 19.5 21.75 18.3247 21.75 16.875V7.125C21.75 5.67525 20.5747 4.5 19.125 4.5Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path d='M2.25 9H21.75' stroke={contentColor} stroke-linejoin='round' />
      <Path d='M8.25 14.0625H6V15H8.25V14.0625Z' stroke={contentColor} stroke-linejoin='round' />
    </Svg>
  )
}
