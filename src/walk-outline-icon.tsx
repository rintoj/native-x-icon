import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface WalkOutlineIconProps {
  color?: string
  size?: IconSize
}

export function WalkOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: WalkOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M14.7287 22.6087L12.0676 17.2303L9.96337 14.5402C9.65251 14.0142 9.48853 13.4144 9.48853 12.8034V6.75H10.2231C10.4707 6.74994 10.7159 6.79866 10.9447 6.89338C11.1735 6.98809 11.3814 7.12696 11.5565 7.30203C11.7316 7.4771 11.8705 7.68496 11.9653 7.91373C12.0601 8.14249 12.1088 8.38769 12.1088 8.63531V17.2303'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M5.99536 13.7367V10.2436C5.99536 10.2436 7.74193 6.75 9.48849 6.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M17.3484 12.8634L14.25 10.8281'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.99353 22.4231L10.4999 18.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12.1087 5.00277C13.0733 5.00277 13.8553 4.22081 13.8553 3.25621C13.8553 2.29161 13.0733 1.50964 12.1087 1.50964C11.1441 1.50964 10.3622 2.29161 10.3622 3.25621C10.3622 4.22081 11.1441 5.00277 12.1087 5.00277Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
