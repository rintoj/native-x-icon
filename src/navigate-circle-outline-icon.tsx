import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface NavigateCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function NavigateCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: NavigateCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.7855 7.54661L7.04194 11.4068C6.55115 11.6318 6.71615 12.3757 7.25616 12.3757H11.4374C11.4871 12.3757 11.5348 12.3954 11.57 12.4306C11.6052 12.4658 11.6249 12.5135 11.6249 12.5632V16.7435C11.6249 17.2835 12.3749 17.4466 12.599 16.9573L16.453 8.21411C16.4962 8.12069 16.5096 8.01629 16.4916 7.91499C16.4735 7.81368 16.4248 7.72035 16.3521 7.64759C16.2793 7.57483 16.186 7.52614 16.0847 7.50808C15.9834 7.49002 15.879 7.50347 15.7855 7.54661Z'
        fill={contentColor}
      />
      <Path
        d='M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
    </Svg>
  )
}
