import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface NavigateOutlineIconProps {
  color?: string
  size?: IconSize
}

export function NavigateOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: NavigateOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 3L3 11.2566H12.375C12.4745 11.2566 12.5698 11.2961 12.6402 11.3664C12.7105 11.4367 12.75 11.5321 12.75 11.6316V21L21 3Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
