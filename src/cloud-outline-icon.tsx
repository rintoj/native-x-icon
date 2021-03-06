import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CloudOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CloudOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CloudOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.75 11.25C18.3333 7.05281 15.4219 4.5 12 4.5C8.76562 4.5 6.6825 6.75938 6 9C3.1875 9.28125 0.75 11.0433 0.75 14.25C0.75 17.3438 3.28125 19.5 6.375 19.5H18.5625C21.1406 19.5 23.25 18.2138 23.25 15.375C23.25 12.5709 20.7656 11.355 18.75 11.25Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
    </Svg>
  )
}
