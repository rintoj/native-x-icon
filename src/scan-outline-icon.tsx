import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ScanOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ScanOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ScanOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.75 21H18.375C19.0712 21 19.7389 20.7234 20.2312 20.2312C20.7234 19.7389 21 19.0712 21 18.375V15.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21 8.25V5.625C21 4.92881 20.7234 4.26113 20.2312 3.76884C19.7389 3.27656 19.0712 3 18.375 3H15.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8.25 21H5.625C4.92881 21 4.26113 20.7234 3.76884 20.2312C3.27656 19.7389 3 19.0712 3 18.375V15.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M3 8.25V5.625C3 4.92881 3.27656 4.26113 3.76884 3.76884C4.26113 3.27656 4.92881 3 5.625 3H8.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
