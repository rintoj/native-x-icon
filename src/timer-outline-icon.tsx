import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TimerOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TimerOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TimerOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M5.2926 5.99974C3.83723 7.62519 3.0224 9.72431 2.99995 11.906C2.94463 16.8911 7.01479 20.9904 11.9999 20.9997C16.9781 21.0091 20.9999 16.9765 20.9999 11.9997C20.9999 7.09943 17.0835 3.11177 12.2109 2.99974C12.1835 2.99886 12.1561 3.00351 12.1305 3.01341C12.105 3.02332 12.0816 3.03828 12.0619 3.05739C12.0423 3.07651 12.0266 3.09939 12.016 3.12468C12.0053 3.14997 11.9999 3.17714 11.9999 3.20458V7.12474'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M10.9397 13.0614L7.23658 7.76452C7.18534 7.69113 7.16158 7.60205 7.16944 7.51289C7.17731 7.42374 7.2163 7.34019 7.27959 7.2769C7.34288 7.21362 7.42642 7.17462 7.51558 7.16676C7.60473 7.15889 7.69381 7.18266 7.7672 7.23389L13.0641 10.937C13.389 11.171 13.6087 11.5235 13.6757 11.9183C13.7427 12.313 13.6516 12.7182 13.4222 13.0464C13.1927 13.3745 12.8433 13.599 12.4495 13.6715C12.0557 13.744 11.6492 13.6585 11.318 13.4336C11.1715 13.3321 11.0436 13.2062 10.9397 13.0614Z'
        fill={contentColor}
      />
    </Svg>
  )
}
