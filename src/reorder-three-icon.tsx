import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReorderThreeIconProps {
  color?: string
  size?: IconSize
}

export function ReorderThreeIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ReorderThreeIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M3.75 12C3.75 11.4305 4.21171 10.9688 4.78125 10.9688H19.2188C19.7883 10.9688 20.25 11.4305 20.25 12C20.25 12.5695 19.7883 13.0312 19.2188 13.0312H4.78125C4.21171 13.0312 3.75 12.5695 3.75 12Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M3.75 8.25C3.75 7.68046 4.21171 7.21875 4.78125 7.21875H19.2188C19.7883 7.21875 20.25 7.68046 20.25 8.25C20.25 8.81954 19.7883 9.28125 19.2188 9.28125H4.78125C4.21171 9.28125 3.75 8.81954 3.75 8.25Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M3.75 15.75C3.75 15.1805 4.21171 14.7188 4.78125 14.7188H19.2188C19.7883 14.7188 20.25 15.1805 20.25 15.75C20.25 16.3195 19.7883 16.7812 19.2188 16.7812H4.78125C4.21171 16.7812 3.75 16.3195 3.75 15.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
