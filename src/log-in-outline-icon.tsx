import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogInOutlineIconProps {
  color?: string
  size?: IconSize
}

export function LogInOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogInOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M9 8.25V6.375C9 5.87772 9.19754 5.40081 9.54917 5.04917C9.90081 4.69754 10.3777 4.5 10.875 4.5H18.375C18.8723 4.5 19.3492 4.69754 19.7008 5.04917C20.0525 5.40081 20.25 5.87772 20.25 6.375V17.625C20.25 18.1223 20.0525 18.5992 19.7008 18.9508C19.3492 19.3025 18.8723 19.5 18.375 19.5H11.25C10.2145 19.5 9 18.6605 9 17.625V15.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M13.5 15.75L17.25 12L13.5 8.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M3.75 12H16.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
