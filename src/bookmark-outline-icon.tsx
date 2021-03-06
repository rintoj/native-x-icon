import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BookmarkOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BookmarkOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BookmarkOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.5 2.25H7.5C6.90326 2.25 6.33097 2.48705 5.90901 2.90901C5.48705 3.33097 5.25 3.90326 5.25 4.5V21.75L12 15.75L18.75 21.75V4.5C18.75 3.90326 18.5129 3.33097 18.091 2.90901C17.669 2.48705 17.0967 2.25 16.5 2.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
