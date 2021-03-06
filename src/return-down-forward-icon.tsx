import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReturnDownForwardIconProps {
  color?: string
  size?: IconSize
}

export function ReturnDownForwardIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ReturnDownForwardIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.2197 9.96967C18.5126 9.67678 18.9874 9.67678 19.2803 9.96967L22.2803 12.9697C22.5732 13.2626 22.5732 13.7374 22.2803 14.0303L19.2803 17.0303C18.9874 17.3232 18.5126 17.3232 18.2197 17.0303C17.9268 16.7374 17.9268 16.2626 18.2197 15.9697L20.6893 13.5L18.2197 11.0303C17.9268 10.7374 17.9268 10.2626 18.2197 9.96967Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.25 6.75C2.66421 6.75 3 7.08579 3 7.5V8.4375C3 10.7922 4.89709 12.75 7.21875 12.75H21C21.4142 12.75 21.75 13.0858 21.75 13.5C21.75 13.9142 21.4142 14.25 21 14.25H7.21875C4.03166 14.25 1.5 11.5831 1.5 8.4375V7.5C1.5 7.08579 1.83579 6.75 2.25 6.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
