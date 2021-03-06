import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CheckmarkIconProps {
  color?: string
  size?: IconSize
}

export function CheckmarkIcon({ size = 'normal', color = COLOR.SECONDARY }: CheckmarkIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.9939 5.43533C20.3056 5.7081 20.3372 6.18192 20.0644 6.49364L9.56443 18.4936C9.42774 18.6499 9.23242 18.7424 9.02496 18.7494C8.8175 18.7563 8.61645 18.6769 8.46967 18.5301L3.96967 14.0301C3.67678 13.7372 3.67678 13.2623 3.96967 12.9694C4.26256 12.6765 4.73744 12.6765 5.03033 12.9694L8.96347 16.9026L18.9356 5.50589C19.2083 5.19416 19.6822 5.16257 19.9939 5.43533Z'
        fill={contentColor}
      />
    </Svg>
  )
}
