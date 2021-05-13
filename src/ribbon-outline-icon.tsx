import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface RibbonOutlineIconProps {
  color?: string
  size?: IconSize
}

export function RibbonOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: RibbonOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 13.5C15.3137 13.5 18 10.8137 18 7.5C18 4.18629 15.3137 1.5 12 1.5C8.68629 1.5 6 4.18629 6 7.5C6 10.8137 8.68629 13.5 12 13.5Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M6.73359 10.6787L2.25 18.7496L6.32156 18.73C6.45202 18.7293 6.58038 18.7627 6.69399 18.8268C6.8076 18.8909 6.90252 18.9836 6.96938 19.0956L9 22.4996L13.1405 13.3909'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M17.1816 10.5L21.75 18.75L17.6784 18.7303C17.548 18.7297 17.4196 18.763 17.306 18.8272C17.1924 18.8913 17.0975 18.9839 17.0306 19.0959L15 22.5L12 15.9'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12 10.5C13.6569 10.5 15 9.15685 15 7.5C15 5.84315 13.6569 4.5 12 4.5C10.3431 4.5 9 5.84315 9 7.5C9 9.15685 10.3431 10.5 12 10.5Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
