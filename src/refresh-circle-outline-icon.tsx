import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface RefreshCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function RefreshCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: RefreshCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M13.5 9.04687C13.5 9.04687 14.0709 8.76563 12 8.76563C11.2583 8.76562 10.5333 8.98556 9.91661 9.39761C9.29993 9.80967 8.81928 10.3953 8.53545 11.0806C8.25162 11.7658 8.17736 12.5198 8.32206 13.2472C8.46675 13.9746 8.8239 14.6428 9.34835 15.1673C9.8728 15.6917 10.541 16.0489 11.2684 16.1936C11.9958 16.3383 12.7498 16.264 13.4351 15.9802C14.1203 15.6963 14.7059 15.2157 15.118 14.599C15.5301 13.9823 15.75 13.2573 15.75 12.5156'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M12 6.98438L13.875 8.85938L12 10.7344'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12C21 7.03125 16.9688 3 12 3Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
    </Svg>
  )
}
