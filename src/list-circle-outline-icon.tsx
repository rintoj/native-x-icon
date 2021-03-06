import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ListCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ListCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ListCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M10.5 8.625H16.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M10.5 12H16.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M10.5 15.3281H16.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21 12.0938C21 7.125 16.9688 3.09375 12 3.09375C7.03125 3.09375 3 7.125 3 12.0938C3 17.0625 7.03125 21.0938 12 21.0938C16.9688 21.0938 21 17.0625 21 12.0938Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M7.875 9C8.08211 9 8.25 8.83211 8.25 8.625C8.25 8.41789 8.08211 8.25 7.875 8.25C7.66789 8.25 7.5 8.41789 7.5 8.625C7.5 8.83211 7.66789 9 7.875 9Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.875 12.4219C8.08211 12.4219 8.25 12.254 8.25 12.0469C8.25 11.8398 8.08211 11.6719 7.875 11.6719C7.66789 11.6719 7.5 11.8398 7.5 12.0469C7.5 12.254 7.66789 12.4219 7.875 12.4219Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.875 15.75C8.08211 15.75 8.25 15.5821 8.25 15.375C8.25 15.1679 8.08211 15 7.875 15C7.66789 15 7.5 15.1679 7.5 15.375C7.5 15.5821 7.66789 15.75 7.875 15.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
