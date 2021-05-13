import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface EllipseIconProps {
  color?: string
  size?: IconSize
}

export function EllipseIcon({ size = 'normal', color = COLOR.SECONDARY }: EllipseIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 21.75C6.62391 21.75 2.25 17.3761 2.25 12C2.25 6.62391 6.62391 2.25 12 2.25C17.3761 2.25 21.75 6.62391 21.75 12C21.75 17.3761 17.3761 21.75 12 21.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
