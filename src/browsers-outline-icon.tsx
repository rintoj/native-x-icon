import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BrowsersOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BrowsersOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BrowsersOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.5 3H4.5C3.25736 3 2.25 4.00736 2.25 5.25V18.75C2.25 19.9926 3.25736 21 4.5 21H19.5C20.7426 21 21.75 19.9926 21.75 18.75V5.25C21.75 4.00736 20.7426 3 19.5 3Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M18.6478 3H5.35219C3.64172 3 2.25 4.41328 2.25 6.15V8.25H3C3 7.5 3.75 6.75 4.5 6.75H19.5C20.25 6.75 21 7.5 21 8.25H21.75V6.15C21.75 4.41328 20.3583 3 18.6478 3Z'
        fill={contentColor}
      />
    </Svg>
  )
}
