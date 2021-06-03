import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PushOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PushOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PushOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.75 15.75H17.625C18.1223 15.75 18.5992 15.5525 18.9508 15.2008C19.3025 14.8492 19.5 14.3723 19.5 13.875V4.125C19.5 3.62772 19.3025 3.15081 18.9508 2.79917C18.5992 2.44754 18.1223 2.25 17.625 2.25H6.375C5.87772 2.25 5.40081 2.44754 5.04917 2.79917C4.69754 3.15081 4.5 3.62772 4.5 4.125V13.875C4.5 14.3723 4.69754 14.8492 5.04917 15.2008C5.40081 15.5525 5.87772 15.75 6.375 15.75H8.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8.25 11.25L12 7.5L15.75 11.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M12 21.75V8.25' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
