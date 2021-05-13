import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PauseIconProps {
  color?: string
  size?: IconSize
}

export function PauseIcon({ size = 'normal', color = COLOR.SECONDARY }: PauseIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M9.75 20.25H7.5C7.30109 20.25 7.11032 20.171 6.96967 20.0303C6.82902 19.8897 6.75 19.6989 6.75 19.5V4.5C6.75 4.30109 6.82902 4.11032 6.96967 3.96967C7.11032 3.82902 7.30109 3.75 7.5 3.75H9.75C9.94891 3.75 10.1397 3.82902 10.2803 3.96967C10.421 4.11032 10.5 4.30109 10.5 4.5V19.5C10.5 19.6989 10.421 19.8897 10.2803 20.0303C10.1397 20.171 9.94891 20.25 9.75 20.25Z'
        fill={contentColor}
      />
      <Path
        d='M16.5 20.25H14.25C14.0511 20.25 13.8603 20.171 13.7197 20.0303C13.579 19.8897 13.5 19.6989 13.5 19.5V4.5C13.5 4.30109 13.579 4.11032 13.7197 3.96967C13.8603 3.82902 14.0511 3.75 14.25 3.75H16.5C16.6989 3.75 16.8897 3.82902 17.0303 3.96967C17.171 4.11032 17.25 4.30109 17.25 4.5V19.5C17.25 19.6989 17.171 19.8897 17.0303 20.0303C16.8897 20.171 16.6989 20.25 16.5 20.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
