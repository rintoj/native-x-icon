import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CarOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CarOutlineIcon({ size = 'normal', color = COLOR.SECONDARY }: CarOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M3.75 10.5L5.52094 6.36797C5.80922 5.69531 6.54375 5.25 7.36453 5.25H16.6355C17.4563 5.25 18.1908 5.69531 18.4791 6.36797L20.25 10.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M20.25 10.5H3.75V17.25H20.25V10.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M5.25 17.25V18.75H3.75V17.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M20.25 17.25V18.75H18.75V17.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6.75 14.25C7.16421 14.25 7.5 13.9142 7.5 13.5C7.5 13.0858 7.16421 12.75 6.75 12.75C6.33579 12.75 6 13.0858 6 13.5C6 13.9142 6.33579 14.25 6.75 14.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M17.25 14.25C17.6642 14.25 18 13.9142 18 13.5C18 13.0858 17.6642 12.75 17.25 12.75C16.8358 12.75 16.5 13.0858 16.5 13.5C16.5 13.9142 16.8358 14.25 17.25 14.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
