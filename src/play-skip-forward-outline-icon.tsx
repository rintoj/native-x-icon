import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlaySkipForwardOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PlaySkipForwardOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PlaySkipForwardOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M5.25 5.20308V18.7968C5.25 19.6143 6.04688 20.1337 6.70312 19.7418L18.3234 12.787C18.8916 12.4471 18.8916 11.5528 18.3234 11.2129L6.70312 4.25808C6.04688 3.86621 5.25 4.38558 5.25 5.20308Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M18.75 3.75V20.25'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}
