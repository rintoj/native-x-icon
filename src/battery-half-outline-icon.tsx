import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BatteryHalfOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BatteryHalfOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BatteryHalfOutlineIconProps) {
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
        d='M11.0626 9.32489H4.20428C4.10073 9.32489 4.01678 9.40884 4.01678 9.51239V14.4872C4.01678 14.5908 4.10073 14.6747 4.20428 14.6747H11.0626C11.1661 14.6747 11.2501 14.5908 11.2501 14.4872V9.51239C11.2501 9.40884 11.1661 9.32489 11.0626 9.32489Z'
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
