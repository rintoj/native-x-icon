import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface EllipsisHorizontalCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function EllipsisHorizontalCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: EllipsisHorizontalCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 13.2188C12.6731 13.2188 13.2188 12.6731 13.2188 12C13.2188 11.3269 12.6731 10.7812 12 10.7812C11.3269 10.7812 10.7812 11.3269 10.7812 12C10.7812 12.6731 11.3269 13.2188 12 13.2188Z'
        fill={contentColor}
      />
      <Path
        d='M16.2188 13.2188C16.8918 13.2188 17.4375 12.6731 17.4375 12C17.4375 11.3269 16.8918 10.7812 16.2188 10.7812C15.5457 10.7812 15 11.3269 15 12C15 12.6731 15.5457 13.2188 16.2188 13.2188Z'
        fill={contentColor}
      />
      <Path
        d='M7.78125 13.2188C8.45435 13.2188 9 12.6731 9 12C9 11.3269 8.45435 10.7812 7.78125 10.7812C7.10815 10.7812 6.5625 11.3269 6.5625 12C6.5625 12.6731 7.10815 13.2188 7.78125 13.2188Z'
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
