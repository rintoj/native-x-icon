import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TodayOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TodayOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TodayOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.5 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V19.5C2.25 20.7426 3.25736 21.75 4.5 21.75H19.5C20.7426 21.75 21.75 20.7426 21.75 19.5V6C21.75 4.75736 20.7426 3.75 19.5 3.75Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path d='M6 2.25V3.75' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M18 2.25V3.75' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M9.14062 10.5H5.85938C5.52283 10.5 5.25 10.7728 5.25 11.1094V14.3906C5.25 14.7272 5.52283 15 5.85938 15H9.14062C9.47717 15 9.75 14.7272 9.75 14.3906V11.1094C9.75 10.7728 9.47717 10.5 9.14062 10.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21.75 7.5H2.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
