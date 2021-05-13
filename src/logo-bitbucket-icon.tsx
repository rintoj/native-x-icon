import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoBitbucketIconProps {
  color?: string
  size?: IconSize
}

export function LogoBitbucketIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoBitbucketIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.6467 1.51119C22.6073 1.50502 22.5675 1.50142 22.5276 1.50041H1.48075C1.07809 1.49478 0.75559 1.82291 0.749965 2.23869C0.748153 2.28271 0.751774 2.3268 0.760747 2.36994L3.82168 21.6473C3.85997 21.8807 3.97552 22.0944 4.14981 22.2543C4.32223 22.4122 4.54742 22.5 4.78122 22.5004H19.4615C19.6373 22.5007 19.8072 22.437 19.9395 22.3213C20.0718 22.2055 20.1575 22.0456 20.1806 21.8713L22.0031 10.2506H15.2432L14.3779 15.5006H9.61918L8.41309 8.56306H22.2684L23.2415 2.37556C23.3011 1.96541 23.0362 1.57681 22.6467 1.51119Z'
        fill={contentColor}
      />
    </Svg>
  )
}
