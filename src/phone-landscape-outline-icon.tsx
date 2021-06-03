import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PhoneLandscapeOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PhoneLandscapeOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PhoneLandscapeOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M0.75 8.25L0.75 15.75C0.75 16.9926 1.75736 18 3 18H21C22.2426 18 23.25 16.9926 23.25 15.75V8.25C23.25 7.00736 22.2426 6 21 6L3 6C1.75736 6 0.75 7.00736 0.75 8.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M0.75 15.75V14.625C0.75 14.5255 0.789509 14.4302 0.859835 14.3598C0.930161 14.2895 1.02554 14.25 1.125 14.25V14.25C1.32391 14.25 1.51468 14.171 1.65533 14.0303C1.79598 13.8897 1.875 13.6989 1.875 13.5V10.5C1.875 10.3011 1.79598 10.1103 1.65533 9.96967C1.51468 9.82902 1.32391 9.75 1.125 9.75V9.75C1.02554 9.75 0.930161 9.71049 0.859835 9.64017C0.789509 9.56984 0.75 9.47446 0.75 9.375V8.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
