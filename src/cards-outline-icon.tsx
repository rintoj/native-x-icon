import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CardsOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CardsOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CardsOutlineIconProps) {
  const { getColor } = useTheme()
  const strokeColor = getColor?.(color)
  const iconSize = getIconSize(size)

  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 33 32' fill='none'>
      <Path
        d='M10.5 9h18M10.5 16h18M10.5 23h18M5.5 10a1 1 0 100-2 1 1 0 000 2zM5.5 17a1 1 0 100-2 1 1 0 000 2zM5.5 24a1 1 0 100-2 1 1 0 000 2z'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
