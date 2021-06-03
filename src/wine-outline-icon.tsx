import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface WineOutlineIconProps {
  color?: string
  size?: IconSize
}

export function WineOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: WineOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.683 3.75H5.31702V4.5C5.31702 4.5 4.10202 12.75 12 12.75C19.898 12.75 18.683 4.5 18.683 4.5V3.75Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path d='M12 12.75V20.25' stroke={contentColor} strokeLinejoin='round' />
      <Path
        d='M16.5 20.25H7.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M5.25 7.5H18.75' stroke={contentColor} strokeLinejoin='round' />
    </Svg>
  )
}
