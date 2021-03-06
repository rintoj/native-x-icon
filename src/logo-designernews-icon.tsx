import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoDesignernewsIconProps {
  color?: string
  size?: IconSize
}

export function LogoDesignernewsIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoDesignernewsIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path d='M13.8425 5.75625L10.4464 3L13.8533 8.74875L13.8425 5.75625Z' fill={contentColor} />
      <Path
        d='M15.9108 3V12.1688H13.9608L10.575 6.6225L10.6659 12.1688H8.51766V6.15L6.51984 4.5C6.57328 4.5675 6.62672 4.635 6.675 4.70813C7.21078 5.49 7.47844 6.42375 7.47844 7.54875C7.47844 10.3144 5.83781 12.1669 3.35906 12.1669H0V12.1894L10.6927 21H24V9.64313L15.9108 3Z'
        fill={contentColor}
      />
      <Path
        d='M5.24474 7.61775C5.24474 5.9865 4.48396 5.08087 3.11755 5.08087H2.08911V10.0871H3.10724C4.49989 10.0871 5.24474 9.22088 5.24474 7.61775Z'
        fill={contentColor}
      />
    </Svg>
  )
}
