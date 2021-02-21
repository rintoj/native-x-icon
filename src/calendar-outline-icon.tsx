import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CalendarOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CalendarOutlineIcon({
  size = 'normal',
  color = COLOR.DIVIDER,
}: CalendarOutlineIconProps) {
  const { getColor } = useTheme()
  const fillOrStrokeColor = getColor?.(color)
  const iconSize = getIconSize(size)

  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 16 16' fill='none'>
      <Path
        d='M13 2.5H3A1.5 1.5 0 001.5 4v9A1.5 1.5 0 003 14.5h10a1.5 1.5 0 001.5-1.5V4A1.5 1.5 0 0013 2.5z'
        stroke={fillOrStrokeColor}
        strokeOpacity={0.8}
        strokeLinejoin='round'
      />
      <Path
        d='M9.25 8a.75.75 0 100-1.5.75.75 0 000 1.5zM11.75 8a.75.75 0 100-1.5.75.75 0 000 1.5zM9.25 10.5a.75.75 0 100-1.5.75.75 0 000 1.5zM11.75 10.5a.75.75 0 100-1.5.75.75 0 000 1.5zM4.25 10.5a.75.75 0 100-1.5.75.75 0 000 1.5zM6.75 10.5a.75.75 0 100-1.5.75.75 0 000 1.5zM4.25 13a.75.75 0 100-1.5.75.75 0 000 1.5zM6.75 13a.75.75 0 100-1.5.75.75 0 000 1.5zM9.25 13a.75.75 0 100-1.5.75.75 0 000 1.5z'
        fill={fillOrStrokeColor}
        fillOpacity={0.8}
      />
      <Path
        d='M4 1.5v1M12 1.5v1'
        stroke={fillOrStrokeColor}
        strokeOpacity={0.8}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M14.5 5h-13' stroke='#fff' strokeOpacity={0.8} strokeLinejoin='round' />
    </Svg>
  )
}
