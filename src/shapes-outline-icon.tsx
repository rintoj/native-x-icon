import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ShapesOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ShapesOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ShapesOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path d='M15.75 15H1.5L8.625 2.25L15.75 15Z' stroke={contentColor} strokeLinejoin='round' />
      <Path
        d='M12.4369 9.11722C13.7288 8.38941 15.2244 8.10725 16.6926 8.31432C18.1609 8.52139 19.5201 9.20618 20.5604 10.2629C21.6006 11.3196 22.2639 12.6894 22.4479 14.1608C22.6318 15.6321 22.3262 17.1231 21.5781 18.4034C20.8301 19.6837 19.6813 20.682 18.3092 21.2442C16.9371 21.8064 15.4181 21.9012 13.9868 21.5138C12.5555 21.1265 11.2915 20.2786 10.3902 19.1012C9.48886 17.9238 9.0003 16.4824 9 14.9996'
        stroke={contentColor}
        strokeLinejoin='round'
      />
    </Svg>
  )
}
