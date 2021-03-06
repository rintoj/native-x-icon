import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlayIconProps {
  color?: string
  size?: IconSize
}

export function PlayIcon({ size = 'normal', color = COLOR.SECONDARY }: PlayIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M6.23433 20.6252C5.94653 20.6247 5.66382 20.5492 5.41402 20.4063C4.85152 20.0875 4.50183 19.4688 4.50183 18.7971V5.20333C4.50183 4.52974 4.85152 3.91286 5.41402 3.59411C5.66977 3.44713 5.96031 3.37154 6.25526 3.37525C6.55022 3.37896 6.83876 3.46183 7.09074 3.6152L18.7087 10.5696C18.9508 10.7214 19.1504 10.9322 19.2888 11.1823C19.4272 11.4324 19.4997 11.7135 19.4997 11.9993C19.4997 12.2851 19.4272 12.5662 19.2888 12.8162C19.1504 13.0663 18.9508 13.2771 18.7087 13.429L7.08886 20.3852C6.831 20.5411 6.53565 20.6241 6.23433 20.6252Z'
        fill={contentColor}
      />
    </Svg>
  )
}
