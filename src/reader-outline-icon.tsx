import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReaderOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ReaderOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ReaderOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.25 2.25H6.75C5.50736 2.25 4.5 3.25736 4.5 4.5V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75H17.25C18.4926 21.75 19.5 20.7426 19.5 19.5V4.5C19.5 3.25736 18.4926 2.25 17.25 2.25Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path d='M8.25 6H15.75' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M8.25 9.75H15.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M8.25 13.5H12' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
