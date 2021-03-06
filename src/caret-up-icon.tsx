import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CaretUpIconProps {
  color?: string
  size?: IconSize
}

export function CaretUpIcon({ size = 'normal', color = COLOR.SECONDARY }: CaretUpIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.4062 15.0911L12.854 7.44481C12.7484 7.32162 12.6174 7.22274 12.47 7.15495C12.3226 7.08716 12.1622 7.05206 12 7.05206C11.8377 7.05206 11.6774 7.08716 11.53 7.15495C11.3825 7.22274 11.2515 7.32162 11.1459 7.44481L4.59374 15.0911C3.96843 15.8209 4.48686 16.9483 5.4478 16.9483H18.554C19.515 16.9483 20.0334 15.8209 19.4062 15.0911Z'
        fill={contentColor}
      />
    </Svg>
  )
}
