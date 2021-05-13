import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlaySkipForwardIconProps {
  color?: string
  size?: IconSize
}

export function PlaySkipForwardIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PlaySkipForwardIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.75 3C18.5511 3 18.3603 3.07902 18.2197 3.21967C18.079 3.36032 18 3.55109 18 3.75V10.1452L7.08891 3.61453C6.83689 3.46123 6.54832 3.37844 6.25337 3.37481C5.95841 3.37119 5.6679 3.44685 5.41219 3.59391C4.84969 3.91266 4.5 4.52953 4.5 5.20312V18.7969C4.5 19.4705 4.84969 20.0873 5.41219 20.4061C5.66795 20.553 5.95849 20.6286 6.25343 20.6249C6.54838 20.6212 6.83692 20.5383 7.08891 20.385L18 13.8548V20.25C18 20.4489 18.079 20.6397 18.2197 20.7803C18.3603 20.921 18.5511 21 18.75 21C18.9489 21 19.1397 20.921 19.2803 20.7803C19.421 20.6397 19.5 20.4489 19.5 20.25V3.75C19.5 3.55109 19.421 3.36032 19.2803 3.21967C19.1397 3.07902 18.9489 3 18.75 3Z'
        fill={contentColor}
      />
    </Svg>
  )
}
