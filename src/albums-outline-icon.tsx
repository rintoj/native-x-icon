import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface AlbumsOutlineIconProps {
  color?: string
  size?: IconSize
}

export function AlbumsOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: AlbumsOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.6467 8.25H4.35328C3.60588 8.25 3 8.85588 3 9.60328V18.8967C3 19.6441 3.60588 20.25 4.35328 20.25H19.6467C20.3941 20.25 21 19.6441 21 18.8967V9.60328C21 8.85588 20.3941 8.25 19.6467 8.25Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M6.75 3.75H17.25'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path d='M5.25 6H18.75' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
    </Svg>
  )
}
