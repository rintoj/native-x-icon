import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface EggOutlineIconProps {
  color?: string
  size?: IconSize
}

export function EggOutlineIcon({ size = 'normal', color = COLOR.SECONDARY }: EggOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2.25C9 2.25 4.5 8.04797 4.5 13.432C4.5 18.8161 7.5 21.75 12 21.75C16.5 21.75 19.5 18.8161 19.5 13.432C19.5 8.04797 15 2.25 12 2.25Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
    </Svg>
  )
}
