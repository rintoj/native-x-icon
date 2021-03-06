import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MaleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MaleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: MaleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M10.125 21C14.06 21 17.25 17.81 17.25 13.875C17.25 9.93997 14.06 6.75 10.125 6.75C6.18997 6.75 3 9.93997 3 13.875C3 17.81 6.18997 21 10.125 21Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M21 7.5V3H16.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M15.1875 8.8125L21 3'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
