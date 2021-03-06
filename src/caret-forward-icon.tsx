import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CaretForwardIconProps {
  color?: string
  size?: IconSize
}

export function CaretForwardIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CaretForwardIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M8.90906 19.406L16.5553 12.8538C16.6785 12.7482 16.7774 12.6172 16.8452 12.4698C16.913 12.3224 16.9481 12.162 16.9481 11.9998C16.9481 11.8375 16.913 11.6772 16.8452 11.5298C16.7774 11.3823 16.6785 11.2513 16.5553 11.1457L8.90906 4.59352C8.17922 3.96821 7.05188 4.48665 7.05188 5.44759V18.5538C7.05188 19.5148 8.17922 20.0332 8.90906 19.406Z'
        fill={contentColor}
      />
    </Svg>
  )
}
