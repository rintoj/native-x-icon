import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface WatchOutlineIconProps {
  color?: string
  size?: IconSize
}

export function WatchOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: WatchOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.75 5.25H8.25C6.59315 5.25 5.25 6.59315 5.25 8.25V15.75C5.25 17.4069 6.59315 18.75 8.25 18.75H15.75C17.4069 18.75 18.75 17.4069 18.75 15.75V8.25C18.75 6.59315 17.4069 5.25 15.75 5.25Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M8.25 5.25V1.875C8.25 1.77554 8.28951 1.68016 8.35983 1.60984C8.43016 1.53951 8.52554 1.5 8.625 1.5H15.375C15.4745 1.5 15.5698 1.53951 15.6402 1.60984C15.7105 1.68016 15.75 1.77554 15.75 1.875V5.25'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M15.75 18.75V22.125C15.75 22.2245 15.7105 22.3198 15.6402 22.3902C15.5698 22.4605 15.4745 22.5 15.375 22.5H8.625C8.52554 22.5 8.43016 22.4605 8.35983 22.3902C8.28951 22.3198 8.25 22.2245 8.25 22.125V18.75'
        stroke={contentColor}
        strokeLinejoin='round'
      />
    </Svg>
  )
}
