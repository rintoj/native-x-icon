import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoHtml5IconProps {
  color?: string
  size?: IconSize
}

export function LogoHtml5Icon({ size = 'normal', color = COLOR.SECONDARY }: LogoHtml5IconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M3 1.5L4.63781 20.4005L11.9892 22.5L19.3594 20.3977L21 1.5H3ZM17.4375 7.6875H8.8125L9 10.0781H17.25L16.6167 17.1745L12 18.4913L7.37438 17.1788L7.05656 13.5469H9.31875L9.47906 15.3886L12 16.0814L14.5041 15.382L14.7656 12.375H6.9375L6.34734 5.36297H17.6344L17.4375 7.6875Z'
        fill={contentColor}
      />
    </Svg>
  )
}
