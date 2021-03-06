import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface StopOutlineIconProps {
  color?: string
  size?: IconSize
}

export function StopOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: StopOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.375 4.5H5.625C5.00368 4.5 4.5 5.00368 4.5 5.625V18.375C4.5 18.9963 5.00368 19.5 5.625 19.5H18.375C18.9963 19.5 19.5 18.9963 19.5 18.375V5.625C19.5 5.00368 18.9963 4.5 18.375 4.5Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
    </Svg>
  )
}
