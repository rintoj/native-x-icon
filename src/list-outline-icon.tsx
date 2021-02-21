import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ListOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ListOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ListOutlineIconProps) {
  const { getColor } = useTheme()
  const strokeColor = getColor?.(color)
  const iconSize = getIconSize(size)

  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 16 16' fill='none'>
      <Path
        d='M5 4.5h9M5 8h9M5 11.5h9M2.5 5a.5.5 0 100-1 .5.5 0 000 1zM2.5 8.5a.5.5 0 100-1 .5.5 0 000 1zM2.5 12a.5.5 0 100-1 .5.5 0 000 1z'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
