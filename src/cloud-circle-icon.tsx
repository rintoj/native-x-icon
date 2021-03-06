import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CloudCircleIconProps {
  color?: string
  size?: IconSize
}

export function CloudCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CloudCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2.25C6.61547 2.25 2.25 6.61547 2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12C21.75 6.61547 17.3845 2.25 12 2.25ZM15.2812 15.375H9.04922C7.57125 15.375 6.35109 14.1759 6.37734 12.698C6.40219 11.2102 7.48734 10.3566 8.78437 10.1527C8.84886 10.1424 8.90952 10.1154 8.96021 10.0742C9.01091 10.0331 9.04986 9.97929 9.07312 9.91828C9.47203 8.86969 10.4827 7.875 12 7.875C13.5548 7.875 14.8992 8.92922 15.2878 10.6973C15.3214 10.8496 15.3972 10.9894 15.5064 11.1007C15.6157 11.212 15.754 11.2904 15.9056 11.3269C16.7714 11.5336 17.625 12.1505 17.625 13.3125C17.625 14.7319 16.5703 15.375 15.2812 15.375Z'
        fill={contentColor}
      />
    </Svg>
  )
}
