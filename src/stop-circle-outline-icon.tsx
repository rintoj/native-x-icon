import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface StopCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function StopCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: StopCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M14.55 15.75H9.45C9.13182 15.7498 8.82674 15.6232 8.60175 15.3983C8.37676 15.1733 8.25025 14.8682 8.25 14.55V9.45C8.25025 9.13182 8.37676 8.82674 8.60175 8.60175C8.82674 8.37676 9.13182 8.25025 9.45 8.25H14.55C14.8682 8.25025 15.1733 8.37676 15.3983 8.60175C15.6232 8.82674 15.7498 9.13182 15.75 9.45V14.55C15.7498 14.8682 15.6232 15.1733 15.3983 15.3983C15.1733 15.6232 14.8682 15.7498 14.55 15.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
