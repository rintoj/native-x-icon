import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TextOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TextOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TextOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M1.5 19.4766L7.125 4.47656L12.75 19.4766'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M10.7812 14.2266H3.46875'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.2812 11.2266C15.8527 9.88172 17.2031 8.97656 18.75 8.97656C20.9062 8.97656 22.5 10.4766 22.5 12.7266V19.4766'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15 16.8047C15 18.4922 16.2591 19.5234 17.8125 19.5234C20.3438 19.5234 22.5 18.2578 22.5 14.5547V13.8516C21.5625 13.8516 19.7812 13.8984 18.1875 14.0859C16.6514 14.2669 15 14.9766 15 16.8047Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
