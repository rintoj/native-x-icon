import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MaleFemaleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MaleFemaleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: MaleFemaleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M10.125 15.75C13.6458 15.75 16.5 12.8958 16.5 9.375C16.5 5.85418 13.6458 3 10.125 3C6.60418 3 3.75 5.85418 3.75 9.375C3.75 12.8958 6.60418 15.75 10.125 15.75Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M10.125 16.5V22.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12.75 19.5H7.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M20.25 5.25V1.5H16.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M15.7162 6.03375L20.2499 1.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
