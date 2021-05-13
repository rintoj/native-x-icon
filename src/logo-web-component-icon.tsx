import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoWebComponentIconProps {
  color?: string
  size?: IconSize
}

export function LogoWebComponentIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoWebComponentIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M23.25 12L17.625 2.25H11.2379L9.18286 5.8125H15.5677L19.1372 12L15.5677 18.1875H9.18286L11.2379 21.75H17.625L23.25 12Z'
        fill={contentColor}
      />
      <Path
        d='M8.43281 18.1875L4.86281 12L8.43281 5.8125L10.4878 2.25H6.375L0.75 12L6.375 21.75H10.4878L8.43281 18.1875Z'
        fill={contentColor}
      />
    </Svg>
  )
}
