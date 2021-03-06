import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoCapacitorIconProps {
  color?: string
  size?: IconSize
}

export function LogoCapacitorIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoCapacitorIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.5 4.73859L17.4549 9.78375L22.464 14.8022L19.2155 18.0506L5.93958 4.77422L9.18754 1.52531L14.2065 6.53531L19.2502 1.5L22.5 4.73859Z'
        fill={contentColor}
      />
      <Path
        d='M1.52578 9.18708L4.77422 5.93817L18.0502 19.215L14.8017 22.4635L9.78609 17.454L4.73812 22.4996L1.5 19.2497L6.53531 14.2055L1.52578 9.18708Z'
        fill={contentColor}
      />
    </Svg>
  )
}
