import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface VolumeOffIconProps {
  color?: string
  size?: IconSize
}

export function VolumeOffIcon({ size = 'normal', color = COLOR.SECONDARY }: VolumeOffIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.125 19.5C15.8852 19.4998 15.6517 19.4228 15.4589 19.2801C15.4481 19.2726 15.4383 19.2647 15.428 19.2562L11.1408 15.7453H7.875C7.57663 15.7453 7.29048 15.6268 7.0795 15.4158C6.86853 15.2048 6.75 14.9187 6.75 14.6203V9.37825C6.75 9.07988 6.86853 8.79373 7.0795 8.58276C7.29048 8.37178 7.57663 8.25325 7.875 8.25325H11.1398L15.427 4.74231C15.4373 4.73388 15.4472 4.72591 15.458 4.71841C15.6256 4.595 15.8241 4.52051 16.0315 4.50322C16.239 4.48593 16.4471 4.52652 16.6328 4.62047C16.8186 4.71443 16.9746 4.85806 17.0835 5.0354C17.1925 5.21274 17.2501 5.41683 17.25 5.62497V18.375C17.25 18.6733 17.1315 18.9595 16.9205 19.1705C16.7095 19.3814 16.4234 19.5 16.125 19.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
