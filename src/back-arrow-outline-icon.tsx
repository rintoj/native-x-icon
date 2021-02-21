import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BackArrowOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BackArrowOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BackArrowOutlineIconProps) {
  const { getColor } = useTheme()
  const fillColor = getColor?.(color)
  const iconSize = getIconSize(size)

  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.966 5.25L10.216 12l6.75 6.75-1.591 1.59L7.034 12l8.34-8.341 1.592 1.59z'
        fill={fillColor}
      />
    </Svg>
  )
}
