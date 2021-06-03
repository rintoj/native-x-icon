import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TabletPortraitOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TabletPortraitOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TabletPortraitOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18 0.75H6C4.75736 0.75 3.75 1.75736 3.75 3V21C3.75 22.2426 4.75736 23.25 6 23.25H18C19.2426 23.25 20.25 22.2426 20.25 21V3C20.25 1.75736 19.2426 0.75 18 0.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
