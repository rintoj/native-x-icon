import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ChevronForwardOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ChevronForwardOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ChevronForwardOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M8.625 5.25L15.375 12L8.625 18.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
