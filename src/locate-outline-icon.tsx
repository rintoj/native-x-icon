import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LocateOutlineIconProps {
  color?: string
  size?: IconSize
}

export function LocateOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LocateOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path d='M12 4.5V2.625' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M12 21.375V19.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 5.25C10.665 5.25 9.35994 5.64588 8.2499 6.38758C7.13987 7.12928 6.27471 8.18349 5.76382 9.41689C5.25292 10.6503 5.11925 12.0075 5.3797 13.3169C5.64015 14.6262 6.28303 15.829 7.22703 16.773C8.17104 17.717 9.37377 18.3599 10.6831 18.6203C11.9925 18.8808 13.3497 18.7471 14.5831 18.2362C15.8165 17.7253 16.8707 16.8601 17.6124 15.7501C18.3541 14.6401 18.75 13.335 18.75 12C18.75 10.2098 18.0388 8.4929 16.773 7.22703C15.5071 5.96116 13.7902 5.25 12 5.25Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M19.5 12H21.375'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M2.625 12H4.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
