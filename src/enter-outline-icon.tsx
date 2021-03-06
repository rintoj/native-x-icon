import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface EnterOutlineIconProps {
  color?: string
  size?: IconSize
}

export function EnterOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: EnterOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M8.25 8.25V6.375C8.25 5.87772 8.44754 5.40081 8.79917 5.04917C9.15081 4.69754 9.62772 4.5 10.125 4.5H19.875C20.3723 4.5 20.8492 4.69754 21.2008 5.04917C21.5525 5.40081 21.75 5.87772 21.75 6.375V17.625C21.75 18.1223 21.5525 18.5992 21.2008 18.9508C20.8492 19.3025 20.3723 19.5 19.875 19.5H10.125C9.62772 19.5 9.15081 19.3025 8.79917 18.9508C8.44754 18.5992 8.25 18.1223 8.25 17.625V15.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12.75 15.75L16.5 12L12.75 8.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M2.25 12H15.75' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
