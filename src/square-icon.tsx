import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SquareIconProps {
  color?: string
  size?: IconSize
}

export function SquareIcon({ size = 'normal', color = COLOR.SECONDARY }: SquareIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.5 21.75H4.5C3.90345 21.7494 3.33152 21.5121 2.9097 21.0903C2.48787 20.6685 2.25062 20.0965 2.25 19.5V4.5C2.25062 3.90345 2.48787 3.33152 2.9097 2.9097C3.33152 2.48787 3.90345 2.25062 4.5 2.25H19.5C20.0965 2.25062 20.6685 2.48787 21.0903 2.9097C21.5121 3.33152 21.7494 3.90345 21.75 4.5V19.5C21.7494 20.0965 21.5121 20.6685 21.0903 21.0903C20.6685 21.5121 20.0965 21.7494 19.5 21.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
