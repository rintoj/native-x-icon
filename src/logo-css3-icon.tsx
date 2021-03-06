import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoCss3IconProps {
  color?: string
  size?: IconSize
}

export function LogoCss3Icon({ size = 'normal', color = COLOR.SECONDARY }: LogoCss3IconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M3 1.5L4.64062 20.4009L11.9892 22.5L19.3594 20.3977L21 1.5H3ZM16.6256 17.1984L12.0033 18.5156L7.38797 17.1919L7.07156 13.5469H9.33375L9.49453 15.4012L12.0066 16.1119L12.0127 16.125L14.5191 15.4289L14.7834 12.4219H9.51562L9.32812 10.0781H14.9836L15.1875 7.6875H6.5625L6.375 5.39062H17.6522L16.6256 17.1984Z'
        fill={contentColor}
      />
    </Svg>
  )
}
