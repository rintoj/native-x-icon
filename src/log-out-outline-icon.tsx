import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogOutOutlineIconProps {
  color?: string
  size?: IconSize
}

export function LogOutOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogOutOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M14.25 15.75V17.625C14.25 18.1223 14.0525 18.5992 13.7008 18.9508C13.3492 19.3025 12.8723 19.5 12.375 19.5H4.875C4.37772 19.5 3.90081 19.3025 3.54917 18.9508C3.19754 18.5992 3 18.1223 3 17.625V6.375C3 5.87772 3.19754 5.40081 3.54917 5.04917C3.90081 4.69754 4.37772 4.5 4.875 4.5H12C13.0355 4.5 14.25 5.33953 14.25 6.375V8.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M17.25 15.75L21 12L17.25 8.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M8.25 12H20.25' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}