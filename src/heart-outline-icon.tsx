import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HeartOutlineIconProps {
  color?: string
  size?: IconSize
}

export function HeartOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: HeartOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.5431 3.75C13.5 3.75 12 6.75 12 6.75C12 6.75 10.5 3.75 7.45687 3.75C4.98374 3.75 3.0253 5.81906 2.99999 8.28797C2.94843 13.4128 7.06546 17.0573 11.5781 20.1202C11.7025 20.2048 11.8495 20.2501 12 20.2501C12.1505 20.2501 12.2975 20.2048 12.4219 20.1202C16.9341 17.0573 21.0511 13.4128 21 8.28797C20.9747 5.81906 19.0162 3.75 16.5431 3.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
