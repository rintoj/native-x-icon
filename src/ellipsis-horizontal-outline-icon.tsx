import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface EllipsisHorizontalOutlineIconProps {
  color?: string
  size?: IconSize
}

export function EllipsisHorizontalOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: EllipsisHorizontalOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
      <Path
        d='M19.5 13.5C20.3284 13.5 21 12.8284 21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
      <Path
        d='M4.5 13.5C5.32843 13.5 6 12.8284 6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
    </Svg>
  )
}
