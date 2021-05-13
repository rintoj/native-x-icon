import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlayForwardOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PlayForwardOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PlayForwardOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M1.5 6.82156V17.1809C1.5 17.8034 2.10938 18.1991 2.60766 17.9005L11.4609 12.6036C11.8941 12.3444 11.8941 11.6628 11.4609 11.4036L2.60766 6.10671C2.10938 5.80343 1.5 6.19906 1.5 6.82156Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
      <Path
        d='M12.2144 6.82156V17.1809C12.2144 17.8034 12.8237 18.1991 13.322 17.9005L22.1753 12.6036C22.6084 12.3444 22.6084 11.6628 22.1753 11.4036L13.322 6.10671C12.8233 5.80343 12.2144 6.19906 12.2144 6.82156Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
    </Svg>
  )
}
