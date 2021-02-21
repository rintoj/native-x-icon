import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MoreOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MoreOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: MoreOutlineIconProps) {
  const { getColor } = useTheme()
  const strokeColor = getColor?.(color)
  const iconSize = getIconSize(size)

  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM19.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
        stroke={strokeColor}
        strokeMiterlimit={10}
      />
    </Svg>
  )
}
