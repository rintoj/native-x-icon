import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FlameOutlineIconProps {
  color?: string
  size?: IconSize
}

export function FlameOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: FlameOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M5.25 15C5.25 10.6406 11.0625 7.26562 9.75 2.25C12.8438 2.25 18.75 6.75 18.75 15C18.75 16.7902 18.0388 18.5071 16.773 19.773C15.5071 21.0388 13.7902 21.75 12 21.75C10.2098 21.75 8.4929 21.0388 7.22703 19.773C5.96116 18.5071 5.25 16.7902 5.25 15V15Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15 17.25C15 19.9552 13.5 21 12 21C10.5 21 9 19.9552 9 17.25C9 14.5448 10.875 13.2188 10.5 11.25C12.4688 11.25 15 14.5448 15 17.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
