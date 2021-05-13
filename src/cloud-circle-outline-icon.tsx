import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CloudCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CloudCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CloudCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.6505 11.2777C15.5721 11.2653 15.4997 11.2285 15.4436 11.1724C15.3875 11.1163 15.3506 11.0438 15.3383 10.9655C15.0318 9.03656 13.6321 7.875 11.9999 7.875C10.4825 7.875 9.47192 8.86969 9.07114 9.91781C9.04787 9.97882 9.00892 10.0326 8.95823 10.0738C8.90753 10.1149 8.84688 10.142 8.78239 10.1522C7.48536 10.3561 6.4002 11.2097 6.37536 12.6975C6.35098 14.1755 7.57114 15.3745 9.04723 15.3745H15.2811C16.5702 15.3745 17.6249 14.7314 17.6249 13.312C17.6249 12.0361 16.5936 11.4178 15.6505 11.2777Z'
        fill={contentColor}
      />
      <Path
        d='M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
    </Svg>
  )
}
