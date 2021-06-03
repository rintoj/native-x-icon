import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface AppsOutlineIconProps {
  color?: string
  size?: IconSize
}

export function AppsOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: AppsOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M6.75 4.875C6.75 3.83947 5.91053 3 4.875 3C3.83947 3 3 3.83947 3 4.875C3 5.91053 3.83947 6.75 4.875 6.75C5.91053 6.75 6.75 5.91053 6.75 4.875Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M13.875 4.875C13.875 3.83947 13.0355 3 12 3C10.9645 3 10.125 3.83947 10.125 4.875C10.125 5.91053 10.9645 6.75 12 6.75C13.0355 6.75 13.875 5.91053 13.875 4.875Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M21 4.875C21 3.83947 20.1605 3 19.125 3C18.0895 3 17.25 3.83947 17.25 4.875C17.25 5.91053 18.0895 6.75 19.125 6.75C20.1605 6.75 21 5.91053 21 4.875Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M6.75 12C6.75 10.9645 5.91053 10.125 4.875 10.125C3.83947 10.125 3 10.9645 3 12C3 13.0355 3.83947 13.875 4.875 13.875C5.91053 13.875 6.75 13.0355 6.75 12Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M13.875 12C13.875 10.9645 13.0355 10.125 12 10.125C10.9645 10.125 10.125 10.9645 10.125 12C10.125 13.0355 10.9645 13.875 12 13.875C13.0355 13.875 13.875 13.0355 13.875 12Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M21 12C21 10.9645 20.1605 10.125 19.125 10.125C18.0895 10.125 17.25 10.9645 17.25 12C17.25 13.0355 18.0895 13.875 19.125 13.875C20.1605 13.875 21 13.0355 21 12Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M6.75 19.125C6.75 18.0895 5.91053 17.25 4.875 17.25C3.83947 17.25 3 18.0895 3 19.125C3 20.1605 3.83947 21 4.875 21C5.91053 21 6.75 20.1605 6.75 19.125Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M13.875 19.125C13.875 18.0895 13.0355 17.25 12 17.25C10.9645 17.25 10.125 18.0895 10.125 19.125C10.125 20.1605 10.9645 21 12 21C13.0355 21 13.875 20.1605 13.875 19.125Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M21 19.125C21 18.0895 20.1605 17.25 19.125 17.25C18.0895 17.25 17.25 18.0895 17.25 19.125C17.25 20.1605 18.0895 21 19.125 21C20.1605 21 21 20.1605 21 19.125Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
    </Svg>
  )
}
