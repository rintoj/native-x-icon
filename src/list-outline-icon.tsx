import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ListOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ListOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ListOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path d='M7.5 6.75H21' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M7.5 12H21' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M7.5 17.25H21' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M3.75 7.5C4.16421 7.5 4.5 7.16421 4.5 6.75C4.5 6.33579 4.16421 6 3.75 6C3.33579 6 3 6.33579 3 6.75C3 7.16421 3.33579 7.5 3.75 7.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M3.75 12.75C4.16421 12.75 4.5 12.4142 4.5 12C4.5 11.5858 4.16421 11.25 3.75 11.25C3.33579 11.25 3 11.5858 3 12C3 12.4142 3.33579 12.75 3.75 12.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M3.75 18C4.16421 18 4.5 17.6642 4.5 17.25C4.5 16.8358 4.16421 16.5 3.75 16.5C3.33579 16.5 3 16.8358 3 17.25C3 17.6642 3.33579 18 3.75 18Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
