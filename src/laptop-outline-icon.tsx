import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LaptopOutlineIconProps {
  color?: string
  size?: IconSize
}

export function LaptopOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LaptopOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.2434 4.5H3.75656C2.92451 4.5 2.25 5.17451 2.25 6.00656V17.2434C2.25 18.0755 2.92451 18.75 3.75656 18.75H20.2434C21.0755 18.75 21.75 18.0755 21.75 17.2434V6.00656C21.75 5.17451 21.0755 4.5 20.2434 4.5Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M0.75 19.5H23.25'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}
