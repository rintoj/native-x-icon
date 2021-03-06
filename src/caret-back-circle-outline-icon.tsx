import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CaretBackCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CaretBackCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CaretBackCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.8329 7.94884L8.65684 11.4237C8.57224 11.4941 8.50416 11.5822 8.45744 11.6819C8.41072 11.7815 8.38651 11.8902 8.38651 12.0003C8.38651 12.1103 8.41072 12.219 8.45744 12.3187C8.50416 12.4183 8.57224 12.5064 8.65684 12.5768L12.8329 16.0517C12.9424 16.1427 13.0756 16.2007 13.2169 16.2189C13.3582 16.237 13.5017 16.2146 13.6307 16.1541C13.7596 16.0937 13.8687 15.9978 13.9452 15.8776C14.0217 15.7575 14.0623 15.618 14.0625 15.4756V8.52494C14.0623 8.3825 14.0217 8.24305 13.9452 8.12288C13.8687 8.00271 13.7596 7.9068 13.6307 7.84637C13.5017 7.78593 13.3582 7.76348 13.2169 7.78163C13.0756 7.79977 12.9424 7.85777 12.8329 7.94884Z'
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
