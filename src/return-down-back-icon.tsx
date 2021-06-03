import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReturnDownBackIconProps {
  color?: string
  size?: IconSize
}

export function ReturnDownBackIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ReturnDownBackIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.78033 9.96967C6.07322 10.2626 6.07322 10.7374 5.78033 11.0303L3.31066 13.5L5.78033 15.9697C6.07322 16.2626 6.07322 16.7374 5.78033 17.0303C5.48744 17.3232 5.01256 17.3232 4.71967 17.0303L1.71967 14.0303C1.42678 13.7374 1.42678 13.2626 1.71967 12.9697L4.71967 9.96967C5.01256 9.67678 5.48744 9.67678 5.78033 9.96967Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.75 6.75C22.1642 6.75 22.5 7.08579 22.5 7.5V8.4375C22.5 11.5831 19.9683 14.25 16.7812 14.25H3C2.58579 14.25 2.25 13.9142 2.25 13.5C2.25 13.0858 2.58579 12.75 3 12.75H16.7812C19.1029 12.75 21 10.7922 21 8.4375V7.5C21 7.08579 21.3358 6.75 21.75 6.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
