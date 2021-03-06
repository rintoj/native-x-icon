import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReturnUpForwardIconProps {
  color?: string
  size?: IconSize
}

export function ReturnUpForwardIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ReturnUpForwardIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.2197 6.96967C18.5126 6.67678 18.9874 6.67678 19.2803 6.96967L22.2803 9.96967C22.5732 10.2626 22.5732 10.7374 22.2803 11.0303L19.2803 14.0303C18.9874 14.3232 18.5126 14.3232 18.2197 14.0303C17.9268 13.7374 17.9268 13.2626 18.2197 12.9697L20.6893 10.5L18.2197 8.03033C17.9268 7.73744 17.9268 7.26256 18.2197 6.96967Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.5 15.5625C1.5 12.4169 4.03166 9.75 7.21875 9.75H21C21.4142 9.75 21.75 10.0858 21.75 10.5C21.75 10.9142 21.4142 11.25 21 11.25H7.21875C4.89709 11.25 3 13.2078 3 15.5625V16.5C3 16.9142 2.66421 17.25 2.25 17.25C1.83579 17.25 1.5 16.9142 1.5 16.5V15.5625Z'
        fill={contentColor}
      />
    </Svg>
  )
}
