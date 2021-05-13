import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoVueIconProps {
  color?: string
  size?: IconSize
}

export function LogoVueIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoVueIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 6.75149L9.39894 2.24634H5.67566L12 13.2005L18.3244 2.24634H14.6011L12 6.75149Z'
        fill={contentColor}
      />
      <Path
        d='M19.1906 2.24634L12 14.7006L4.80936 2.24634H0.737793L12 21.7538L23.2622 2.24634H19.1906Z'
        fill={contentColor}
      />
    </Svg>
  )
}
