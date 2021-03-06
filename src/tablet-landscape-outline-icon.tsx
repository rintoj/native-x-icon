import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TabletLandscapeOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TabletLandscapeOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TabletLandscapeOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M0.75 6L0.75 18C0.75 19.2426 1.75736 20.25 3 20.25H21C22.2426 20.25 23.25 19.2426 23.25 18V6C23.25 4.75736 22.2426 3.75 21 3.75H3C1.75736 3.75 0.75 4.75736 0.75 6Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
