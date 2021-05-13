import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CropIconProps {
  color?: string
  size?: IconSize
}

export function CropIcon({ size = 'normal', color = COLOR.SECONDARY }: CropIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.4688 16.2188H9C8.67677 16.2188 8.36677 16.0903 8.13821 15.8618C7.90965 15.6332 7.78125 15.3232 7.78125 15V2.53125C7.78125 2.25775 7.6726 1.99544 7.4792 1.80205C7.28581 1.60865 7.0235 1.5 6.75 1.5C6.4765 1.5 6.21419 1.60865 6.0208 1.80205C5.8274 1.99544 5.71875 2.25775 5.71875 2.53125V5.71875H2.53125C2.25775 5.71875 1.99544 5.8274 1.80205 6.0208C1.60865 6.21419 1.5 6.4765 1.5 6.75C1.5 7.0235 1.60865 7.28581 1.80205 7.4792C1.99544 7.6726 2.25775 7.78125 2.53125 7.78125H5.71875V15C5.71974 15.8699 6.06576 16.704 6.6809 17.3191C7.29604 17.9342 8.13006 18.2803 9 18.2812H16.2188V21.4688C16.2188 21.7423 16.3274 22.0046 16.5208 22.198C16.7142 22.3913 16.9765 22.5 17.25 22.5C17.5235 22.5 17.7858 22.3913 17.9792 22.198C18.1726 22.0046 18.2812 21.7423 18.2812 21.4688V18.2812H21.4688C21.7423 18.2812 22.0046 18.1726 22.198 17.9792C22.3913 17.7858 22.5 17.5235 22.5 17.25C22.5 16.9765 22.3913 16.7142 22.198 16.5208C22.0046 16.3274 21.7423 16.2188 21.4688 16.2188Z'
        fill={contentColor}
      />
      <Path
        d='M10.0312 7.78125H15C15.3232 7.78125 15.6332 7.90965 15.8618 8.13821C16.0903 8.36677 16.2188 8.67677 16.2188 9V13.9688C16.2188 14.2423 16.3274 14.5046 16.5208 14.698C16.7142 14.8913 16.9765 15 17.25 15C17.5235 15 17.7858 14.8913 17.9792 14.698C18.1726 14.5046 18.2812 14.2423 18.2812 13.9688V9C18.2803 8.13006 17.9342 7.29604 17.3191 6.6809C16.704 6.06576 15.8699 5.71974 15 5.71875H10.0312C9.75775 5.71875 9.49544 5.8274 9.30205 6.0208C9.10865 6.21419 9 6.4765 9 6.75C9 7.0235 9.10865 7.28581 9.30205 7.4792C9.49544 7.6726 9.75775 7.78125 10.0312 7.78125Z'
        fill={contentColor}
      />
    </Svg>
  )
}
