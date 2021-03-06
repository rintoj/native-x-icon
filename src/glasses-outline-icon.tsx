import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GlassesOutlineIconProps {
  color?: string
  size?: IconSize
}

export function GlassesOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: GlassesOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M10.5 10.875C10.5 10.4772 10.658 10.0956 10.9393 9.81434C11.2206 9.53304 11.6022 9.375 12 9.375C12.3978 9.375 12.7794 9.53304 13.0607 9.81434C13.342 10.0956 13.5 10.4772 13.5 10.875'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21 9.375H21.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M3 9.375H2.25' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M3 9.375C3 13.875 3.75 15.375 6.75 15.375C9.75 15.375 10.5 13.875 10.5 9.375C10.5 9.375 9.75 8.625 6.75 8.625C3.75 8.625 3 9.375 3 9.375Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21 9.375C21 13.875 20.25 15.375 17.25 15.375C14.25 15.375 13.5 13.875 13.5 9.375C13.5 9.375 14.25 8.625 17.25 8.625C20.25 8.625 21 9.375 21 9.375Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
