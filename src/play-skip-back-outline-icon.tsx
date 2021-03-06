import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlaySkipBackOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PlaySkipBackOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PlaySkipBackOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.75 5.20308V18.7968C18.75 19.6143 17.9531 20.1337 17.2969 19.7418L5.67609 12.787C5.10797 12.4471 5.10797 11.5528 5.67609 11.2129L17.2969 4.25808C17.9531 3.86621 18.75 4.38558 18.75 5.20308Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M5.25 3.75V20.25'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}
