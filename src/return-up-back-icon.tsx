import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReturnUpBackIconProps {
  color?: string
  size?: IconSize
}

export function ReturnUpBackIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ReturnUpBackIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.78033 6.96967C6.07322 7.26256 6.07322 7.73744 5.78033 8.03033L3.31066 10.5L5.78033 12.9697C6.07322 13.2626 6.07322 13.7374 5.78033 14.0303C5.48744 14.3232 5.01256 14.3232 4.71967 14.0303L1.71967 11.0303C1.42678 10.7374 1.42678 10.2626 1.71967 9.96967L4.71967 6.96967C5.01256 6.67678 5.48744 6.67678 5.78033 6.96967Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.25 10.5C2.25 10.0858 2.58579 9.75 3 9.75H16.7812C19.9683 9.75 22.5 12.4169 22.5 15.5625V16.5C22.5 16.9142 22.1642 17.25 21.75 17.25C21.3358 17.25 21 16.9142 21 16.5V15.5625C21 13.2078 19.1029 11.25 16.7812 11.25H3C2.58579 11.25 2.25 10.9142 2.25 10.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
