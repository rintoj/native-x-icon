import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TvOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TvOutlineIcon({ size = 'normal', color = COLOR.SECONDARY }: TvOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.9934 4.5H3.00656C2.17451 4.5 1.5 5.17451 1.5 6.00656V15.7434C1.5 16.5755 2.17451 17.25 3.00656 17.25H20.9934C21.8255 17.25 22.5 16.5755 22.5 15.7434V6.00656C22.5 5.17451 21.8255 4.5 20.9934 4.5Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path d='M6 19.5H18' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
    </Svg>
  )
}
