import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface EyeOutlineIconProps {
  color?: string
  size?: IconSize
}

export function EyeOutlineIcon({ size = 'normal', color = COLOR.SECONDARY }: EyeOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M11.9841 5.25C8.33067 5.25 4.58301 7.36453 1.6327 11.5936C1.54849 11.7156 1.50234 11.8599 1.50009 12.0082C1.49783 12.1564 1.53958 12.302 1.62004 12.4266C3.88692 15.975 7.58442 18.75 11.9841 18.75C16.336 18.75 20.1094 15.9666 22.3805 12.4102C22.4591 12.2881 22.5009 12.1459 22.5009 12.0007C22.5009 11.8555 22.4591 11.7134 22.3805 11.5912C20.1043 8.07562 16.3032 5.25 11.9841 5.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
    </Svg>
  )
}
