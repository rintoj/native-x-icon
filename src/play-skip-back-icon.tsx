import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlaySkipBackIconProps {
  color?: string
  size?: IconSize
}

export function PlaySkipBackIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PlaySkipBackIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M5.25 3C5.44891 3 5.63968 3.07902 5.78033 3.21967C5.92098 3.36032 6 3.55109 6 3.75V10.1452L16.9111 3.61453C17.1631 3.46123 17.4517 3.37844 17.7466 3.37481C18.0416 3.37119 18.3321 3.44685 18.5878 3.59391C19.1503 3.91266 19.5 4.53141 19.5 5.20312V18.7969C19.5 19.4705 19.1503 20.0873 18.5878 20.4061C18.332 20.553 18.0415 20.6286 17.7466 20.6249C17.4516 20.6212 17.1631 20.5383 16.9111 20.385L6 13.8548V20.25C6 20.4489 5.92098 20.6397 5.78033 20.7803C5.63968 20.921 5.44891 21 5.25 21C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V3.75C4.5 3.55109 4.57902 3.36032 4.71967 3.21967C4.86032 3.07902 5.05109 3 5.25 3Z'
        fill={contentColor}
      />
    </Svg>
  )
}
