import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ChatboxIconProps {
  color?: string
  size?: IconSize
}

export function ChatboxIcon({ size = 'normal', color = COLOR.SECONDARY }: ChatboxIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M6.75 21.75C6.55109 21.75 6.36032 21.671 6.21967 21.5303C6.07902 21.3897 6 21.1989 6 21V18H4.875C3.9802 17.999 3.12233 17.6431 2.48961 17.0104C1.85689 16.3777 1.50099 15.5198 1.5 14.625V5.625C1.50099 4.7302 1.85689 3.87233 2.48961 3.23961C3.12233 2.60689 3.9802 2.25099 4.875 2.25H19.125C20.0198 2.25099 20.8777 2.60689 21.5104 3.23961C22.1431 3.87233 22.499 4.7302 22.5 5.625V14.625C22.499 15.5198 22.1431 16.3777 21.5104 17.0104C20.8777 17.6431 20.0198 17.999 19.125 18H11.5191L7.23047 21.5761C7.09551 21.6883 6.92554 21.7499 6.75 21.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
