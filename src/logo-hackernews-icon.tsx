import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoHackernewsIconProps {
  color?: string
  size?: IconSize
}

export function LogoHackernewsIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoHackernewsIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M1.5 1.5V22.5H22.5V1.5H1.5ZM13.2033 13.2577V17.1952H11.0156V13.2577L7.40625 6.69516H9.98438L12.1556 11.2673L14.2336 6.69516H16.7053L13.2033 13.2577Z'
        fill={contentColor}
      />
    </Svg>
  )
}
