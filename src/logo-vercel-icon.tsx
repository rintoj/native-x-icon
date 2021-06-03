import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoVercelIconProps {
  color?: string
  size?: IconSize
}

export function LogoVercelIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoVercelIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 2.25L23.25 21.75H0.75L12 2.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
