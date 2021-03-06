import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ExpandOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ExpandOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ExpandOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.25 15V20.25H15'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M19.7719 19.7705L14.25 14.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M3.75 9V3.75H9' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M4.22818 4.22913L9.75006 9.7496'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15 3.75H20.25V9'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M19.7705 4.22791L14.25 9.74978'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M9 20.25H3.75V15'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M4.22955 19.7719L9.75003 14.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
