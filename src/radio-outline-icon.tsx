import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface RadioOutlineIconProps {
  color?: string
  size?: IconSize
  selected?: boolean
  selectedColor?: string
}

export function RadioOutlineIcon({
  size = 'normal',
  selected = false,
  color = COLOR.SECONDARY,
  selectedColor = COLOR.ACCENT,
}: RadioOutlineIconProps) {
  const { getColor } = useTheme()
  const strokeColor = getColor?.(selected ? selectedColor : color)
  const iconSize = getIconSize(size)

  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9z'
        stroke={strokeColor}
        strokeMiterlimit={10}
      />
      {selected && (
        <Path
          d='M16.5 8.25l-6.3 7.5-2.7-3'
          stroke={strokeColor}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      )}
    </Svg>
  )
}
