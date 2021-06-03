import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CaretForwardCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CaretForwardCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CaretForwardCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M11.167 16.0517L15.3431 12.5768C15.4277 12.5064 15.4958 12.4183 15.5425 12.3187C15.5892 12.219 15.6135 12.1103 15.6135 12.0003C15.6135 11.8902 15.5892 11.7815 15.5425 11.6819C15.4958 11.5822 15.4277 11.4941 15.3431 11.4237L11.167 7.94884C11.0575 7.85777 10.9243 7.79977 10.7831 7.78163C10.6418 7.76348 10.4983 7.78593 10.3693 7.84637C10.2403 7.9068 10.1312 8.00271 10.0547 8.12288C9.97828 8.24305 9.93761 8.3825 9.9375 8.52494V15.4756C9.93761 15.618 9.97828 15.7575 10.0547 15.8776C10.1312 15.9978 10.2403 16.0937 10.3693 16.1541C10.4983 16.2146 10.6418 16.237 10.7831 16.2189C10.9243 16.2007 11.0575 16.1427 11.167 16.0517Z'
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
