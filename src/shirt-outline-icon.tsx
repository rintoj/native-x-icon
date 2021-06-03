import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ShirtOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ShirtOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ShirtOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M14.745 2.25C14.745 2.25 13.6772 2.625 12 2.625C10.3228 2.625 9.255 2.25 9.255 2.25C9.08627 2.25 8.91875 2.27853 8.75953 2.33437L1.5 4.875L2.27953 9L4.57078 9.25875C4.85137 9.2905 5.10976 9.42662 5.29464 9.64007C5.47952 9.85352 5.57737 10.1287 5.56875 10.4109L5.25 21.75H18.75L18.4313 10.4109C18.4226 10.1287 18.5205 9.85352 18.7054 9.64007C18.8902 9.42662 19.1486 9.2905 19.4292 9.25875L21.7205 9L22.5 4.875L15.2405 2.33437C15.0812 2.27853 14.9137 2.25 14.745 2.25V2.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.6239 2.46826C15.4114 3.26709 14.9408 3.9733 14.2854 4.47709C13.6301 4.98087 12.8266 5.254 12 5.254C11.1734 5.254 10.3699 4.98087 9.71456 4.47709C9.0592 3.9733 8.58865 3.26709 8.3761 2.46826'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
