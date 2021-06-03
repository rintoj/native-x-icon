import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReorderFourOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ReorderFourOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ReorderFourOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M4.5 14.25H19.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M4.5 9.75H19.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M4.5 5.25H19.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M4.5 18.75H19.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
