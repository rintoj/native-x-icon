import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlayBackOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PlayBackOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PlayBackOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.4999 6.82144V17.1808C22.4999 17.8033 21.8905 18.1989 21.3922 17.9003L12.539 12.6002C12.1058 12.341 12.1058 11.6594 12.539 11.4002L21.3922 6.10331C21.8905 5.80331 22.4999 6.19894 22.4999 6.82144Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M11.7858 6.82144V17.1808C11.7858 17.8033 11.1764 18.1989 10.6781 17.9003L1.82484 12.6002C1.39172 12.341 1.39172 11.6594 1.82484 11.4002L10.6781 6.10331C11.1769 5.80331 11.7858 6.19894 11.7858 6.82144Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
    </Svg>
  )
}
