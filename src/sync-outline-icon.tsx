import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SyncOutlineIconProps {
  color?: string
  size?: IconSize
}

export function SyncOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SyncOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.3751 13.3869V11.99C20.3751 7.36207 16.6139 3.60926 11.9751 3.60926C10.7132 3.60771 9.46721 3.89081 8.32985 4.43749C7.1925 4.98417 6.19311 5.78035 5.40607 6.76676M3.59998 10.6105V12.0074C3.59998 16.6405 7.35935 20.3905 12 20.3905C13.2583 20.3887 14.5003 20.1061 15.6356 19.5635C16.7709 19.0208 17.7708 18.2317 18.5625 17.2536'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M1.5 12L3.5625 9.9375L5.71875 12'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M22.5 12L20.4375 14.0625L18.2812 12'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
