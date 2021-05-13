import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BasketballOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BasketballOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BasketballOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M20.2941 11.9554C18.1254 11.7809 16.0933 10.8268 14.5739 9.26956C13.0544 7.71231 12.1506 5.65737 12.0295 3.48505'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M11.9531 20.3255C11.7853 18.1517 10.834 16.1126 9.27599 14.5873C7.71801 13.062 5.65928 12.1541 3.48234 12.0324'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M5.63626 5.63626L18.3638 18.3638'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M5.63626 18.3638L18.3638 5.63626'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
