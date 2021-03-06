import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CameraOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CameraOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CameraOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.4316 6.96937L15.1838 4.99781C14.9208 4.69125 14.5603 4.5 14.1562 4.5H9.84375C9.43969 4.5 9.07922 4.69125 8.81625 4.99781L7.56844 6.96937C7.30547 7.27641 6.96656 7.5 6.5625 7.5H3.75C3.35218 7.5 2.97064 7.65804 2.68934 7.93934C2.40804 8.22064 2.25 8.60218 2.25 9V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V9C21.75 8.60218 21.592 8.22064 21.3107 7.93934C21.0294 7.65804 20.6478 7.5 20.25 7.5H17.4844C17.0789 7.5 16.6945 7.27641 16.4316 6.96937Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 16.5C14.0711 16.5 15.75 14.8211 15.75 12.75C15.75 10.6789 14.0711 9 12 9C9.92893 9 8.25 10.6789 8.25 12.75C8.25 14.8211 9.92893 16.5 12 16.5Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M5.8125 7.40625V6.375H4.6875V7.40625'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
