import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PauseCircleIconProps {
  color?: string
  size?: IconSize
}

export function PauseCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PauseCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM10.5 15C10.5 15.1989 10.421 15.3897 10.2803 15.5303C10.1397 15.671 9.94891 15.75 9.75 15.75C9.55109 15.75 9.36032 15.671 9.21967 15.5303C9.07902 15.3897 9 15.1989 9 15V9C9 8.80109 9.07902 8.61032 9.21967 8.46967C9.36032 8.32902 9.55109 8.25 9.75 8.25C9.94891 8.25 10.1397 8.32902 10.2803 8.46967C10.421 8.61032 10.5 8.80109 10.5 9V15ZM15 15C15 15.1989 14.921 15.3897 14.7803 15.5303C14.6397 15.671 14.4489 15.75 14.25 15.75C14.0511 15.75 13.8603 15.671 13.7197 15.5303C13.579 15.3897 13.5 15.1989 13.5 15V9C13.5 8.80109 13.579 8.61032 13.7197 8.46967C13.8603 8.32902 14.0511 8.25 14.25 8.25C14.4489 8.25 14.6397 8.32902 14.7803 8.46967C14.921 8.61032 15 8.80109 15 9V15Z'
        fill={contentColor}
      />
    </Svg>
  )
}
