import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PieChartOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PieChartOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PieChartOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.0022 3.78047C12.2488 3.76016 12.498 3.75 12.7499 3.75C17.7186 3.75 21.7499 7.78125 21.7499 12.75C21.7499 17.7188 17.7186 21.75 12.7499 21.75C10.8432 21.7499 8.98581 21.1446 7.44523 20.0213C5.90464 18.8979 4.76041 17.3145 4.17737 15.4992'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M11.9998 2.25C6.61476 2.25 2.24977 6.615 2.24977 12C2.24772 13.3731 2.53673 14.7311 3.09773 15.9844L11.9998 12V2.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
