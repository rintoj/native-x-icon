import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReorderFourIconProps {
  color?: string
  size?: IconSize
}

export function ReorderFourIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ReorderFourIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M3.75 14.25C3.75 13.6805 4.21171 13.2188 4.78125 13.2188H19.2188C19.7883 13.2188 20.25 13.6805 20.25 14.25C20.25 14.8195 19.7883 15.2812 19.2188 15.2812H4.78125C4.21171 15.2812 3.75 14.8195 3.75 14.25Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M3.75 9.75C3.75 9.18046 4.21171 8.71875 4.78125 8.71875H19.2188C19.7883 8.71875 20.25 9.18046 20.25 9.75C20.25 10.3195 19.7883 10.7812 19.2188 10.7812H4.78125C4.21171 10.7812 3.75 10.3195 3.75 9.75Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M3.75 5.25C3.75 4.68046 4.21171 4.21875 4.78125 4.21875H19.2188C19.7883 4.21875 20.25 4.68046 20.25 5.25C20.25 5.81954 19.7883 6.28125 19.2188 6.28125H4.78125C4.21171 6.28125 3.75 5.81954 3.75 5.25Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M3.75 18.75C3.75 18.1805 4.21171 17.7188 4.78125 17.7188H19.2188C19.7883 17.7188 20.25 18.1805 20.25 18.75C20.25 19.3195 19.7883 19.7812 19.2188 19.7812H4.78125C4.21171 19.7812 3.75 19.3195 3.75 18.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
