import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SquareOutlineIconProps {
  color?: string
  size?: IconSize
}

export function SquareOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SquareOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.5 21H4.5C4.10252 20.9989 3.72163 20.8405 3.44057 20.5594C3.15951 20.2784 3.00111 19.8975 3 19.5V4.5C3.00111 4.10252 3.15951 3.72163 3.44057 3.44057C3.72163 3.15951 4.10252 3.00111 4.5 3H19.5C19.8975 3.00111 20.2784 3.15951 20.5594 3.44057C20.8405 3.72163 20.9989 4.10252 21 4.5V19.5C20.9989 19.8975 20.8405 20.2784 20.5594 20.5594C20.2784 20.8405 19.8975 20.9989 19.5 21Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
