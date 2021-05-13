import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CaretUpOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CaretUpOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CaretUpOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.4063 15.0911L12.8541 7.44481C12.7485 7.32162 12.6175 7.22274 12.47 7.15495C12.3226 7.08716 12.1623 7.05206 12 7.05206C11.8378 7.05206 11.6774 7.08716 11.53 7.15495C11.3826 7.22274 11.2516 7.32162 11.146 7.44481L4.59377 15.0911C3.96846 15.8209 4.48689 16.9483 5.44783 16.9483H18.5541C19.515 16.9483 20.0335 15.8209 19.4063 15.0911Z'
        fill={contentColor}
      />
    </Svg>
  )
}
