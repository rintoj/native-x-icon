import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BrushOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BrushOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BrushOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.2048 2.79519C20.8489 2.43927 20.3662 2.23932 19.8628 2.23932C19.3595 2.23932 18.8767 2.43927 18.5208 2.79519L8.625 13.816C9.70687 14.0363 10.7869 15.0952 10.9341 16.125L21.2048 5.47925C21.5608 5.12331 21.7607 4.64057 21.7607 4.13722C21.7607 3.63386 21.5608 3.15112 21.2048 2.79519V2.79519Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6.46875 15.75C5.06813 15.75 3.9375 16.8984 3.9375 18.3216C3.9375 19.4442 2.95875 20.0358 2.25 20.0358C3.02625 21.0816 4.35094 21.75 5.625 21.75C7.48969 21.75 9 20.2158 9 18.3216C9 16.8984 7.86937 15.75 6.46875 15.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
