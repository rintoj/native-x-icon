import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface NotificationsCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function NotificationsCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: NotificationsCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M17.1188 14.6719C16.3533 13.7653 15.8128 13.3842 15.8128 10.8844C15.8128 8.59406 14.6044 7.77984 13.6097 7.38422C13.5411 7.35559 13.4792 7.31295 13.428 7.25903C13.3769 7.20511 13.3375 7.1411 13.3125 7.07109C13.1386 6.49688 12.6506 6 12 6C11.3494 6 10.8605 6.49688 10.6875 7.07156C10.6627 7.14158 10.6234 7.20562 10.5723 7.25955C10.5212 7.31348 10.4594 7.35611 10.3908 7.38469C9.39517 7.78125 8.18767 8.59406 8.18767 10.8848C8.18767 13.3847 7.64673 13.7658 6.88127 14.6723C6.56392 15.0473 6.8508 15.7505 7.4058 15.7505H16.5938C17.1455 15.75 17.4347 15.0469 17.1188 14.6719Z'
        fill={contentColor}
      />
      <Path
        d='M10.3238 16.4999C10.2974 16.4998 10.2713 16.5052 10.2472 16.5158C10.223 16.5264 10.2014 16.542 10.1837 16.5616C10.166 16.5812 10.1527 16.6042 10.1445 16.6293C10.1363 16.6544 10.1335 16.6809 10.1363 16.7071C10.2418 17.5846 11.0208 17.9999 12 17.9999C12.9689 17.9999 13.741 17.571 13.8591 16.7099C13.8623 16.6835 13.8598 16.6566 13.8518 16.6312C13.8439 16.6058 13.8306 16.5824 13.8128 16.5625C13.7951 16.5427 13.7733 16.5268 13.749 16.516C13.7246 16.5052 13.6982 16.4997 13.6716 16.4999H10.3238Z'
        fill={contentColor}
      />
    </Svg>
  )
}
