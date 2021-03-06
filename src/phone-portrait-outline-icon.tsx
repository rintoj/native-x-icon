import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PhonePortraitOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PhonePortraitOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PhonePortraitOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.75 0.75H8.25C7.00736 0.75 6 1.75736 6 3V21C6 22.2426 7.00736 23.25 8.25 23.25H15.75C16.9926 23.25 18 22.2426 18 21V3C18 1.75736 16.9926 0.75 15.75 0.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8.25 0.75H9.375C9.47446 0.75 9.56984 0.789509 9.64017 0.859835C9.71049 0.930161 9.75 1.02554 9.75 1.125C9.75 1.32391 9.82902 1.51468 9.96967 1.65533C10.1103 1.79598 10.3011 1.875 10.5 1.875H13.5C13.6989 1.875 13.8897 1.79598 14.0303 1.65533C14.171 1.51468 14.25 1.32391 14.25 1.125C14.25 1.02554 14.2895 0.930161 14.3598 0.859835C14.4302 0.789509 14.5255 0.75 14.625 0.75H15.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
