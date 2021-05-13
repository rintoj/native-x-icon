import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BatteryFullOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BatteryFullOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BatteryFullOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.1078 6.75H3.64219C2.45909 6.75 1.5 7.70909 1.5 8.89219V15.1078C1.5 16.2909 2.45909 17.25 3.64219 17.25H18.1078C19.2909 17.25 20.25 16.2909 20.25 15.1078V8.89219C20.25 7.70909 19.2909 6.75 18.1078 6.75Z'
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='square'
      />
      <Path
        d='M17.5463 9.32489H4.20428C4.10073 9.32489 4.01678 9.40884 4.01678 9.51239V14.4877C4.01678 14.5913 4.10073 14.6752 4.20428 14.6752H17.5463C17.6499 14.6752 17.7338 14.5913 17.7338 14.4877V9.51239C17.7338 9.40884 17.6499 9.32489 17.5463 9.32489Z'
        fill={contentColor}
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='square'
      />
      <Path
        d='M22.5 10.2502V13.7499'
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
    </Svg>
  )
}
