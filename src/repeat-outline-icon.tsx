import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface RepeatOutlineIconProps {
  color?: string
  size?: IconSize
}

export function RepeatOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: RepeatOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15 5.625L17.25 7.875L15 10.125'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M16.5 7.875H6.75C5.75635 7.87797 4.80425 8.27401 4.10163 8.97663C3.39901 9.67925 3.00297 10.6314 3 11.625V12.375'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M9 18.375L6.75 16.125L9 13.875'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.5 16.125H17.25C18.2436 16.122 19.1958 15.726 19.8984 15.0234C20.601 14.3208 20.997 13.3686 21 12.375V11.625'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
