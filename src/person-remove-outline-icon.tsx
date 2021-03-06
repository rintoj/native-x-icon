import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PersonRemoveOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PersonRemoveOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PersonRemoveOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.6249 6.75C17.4412 9.22828 15.5624 11.25 13.4999 11.25C11.4374 11.25 9.55538 9.22875 9.37492 6.75C9.18742 4.17188 11.0155 2.25 13.4999 2.25C15.9843 2.25 17.8124 4.21875 17.6249 6.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M13.5 14.25C9.4219 14.25 5.28284 16.5 4.5169 20.7469C4.42315 21.2588 4.71425 21.75 5.2505 21.75H21.75C22.2863 21.75 22.576 21.2588 22.4836 20.7469C21.7172 16.5 17.5782 14.25 13.5 14.25Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M6.75 10.875H1.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
