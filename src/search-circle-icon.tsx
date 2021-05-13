import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SearchCircleIconProps {
  color?: string
  size?: IconSize
}

export function SearchCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SearchCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 3C7.03734 3 3 7.03734 3 12C3 16.9627 7.03734 21 12 21C16.9627 21 21 16.9627 21 12C21 7.03734 16.9627 3 12 3ZM16.2802 16.2802C16.1395 16.4207 15.9488 16.4997 15.75 16.4997C15.5512 16.4997 15.3605 16.4207 15.2198 16.2802L13.2117 14.2725C12.3634 14.8563 11.3275 15.1019 10.3073 14.9613C9.28712 14.8206 8.35635 14.3038 7.69762 13.5122C7.03889 12.7206 6.69976 11.7115 6.74678 10.6827C6.7938 9.65398 7.22357 8.67995 7.95176 7.95176C8.67995 7.22357 9.65398 6.7938 10.6827 6.74678C11.7115 6.69976 12.7206 7.03889 13.5122 7.69762C14.3038 8.35635 14.8206 9.28712 14.9613 10.3073C15.1019 11.3275 14.8563 12.3634 14.2725 13.2117L16.2802 15.2198C16.4207 15.3605 16.4997 15.5512 16.4997 15.75C16.4997 15.9488 16.4207 16.1395 16.2802 16.2802Z'
        fill={contentColor}
      />
      <Path
        d='M10.875 13.5C12.3247 13.5 13.5 12.3247 13.5 10.875C13.5 9.42525 12.3247 8.25 10.875 8.25C9.42525 8.25 8.25 9.42525 8.25 10.875C8.25 12.3247 9.42525 13.5 10.875 13.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
