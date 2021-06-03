import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FlashOutlineIconProps {
  color?: string
  size?: IconSize
}

export function FlashOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: FlashOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M14.7783 1.54688L4.5 14.25H10.5L9.02297 22.3702C9.02016 22.3861 9.02088 22.4024 9.02507 22.4181C9.02927 22.4337 9.03684 22.4482 9.04725 22.4606C9.05767 22.473 9.07067 22.4829 9.08535 22.4897C9.10002 22.4965 9.11601 22.5 9.13219 22.5V22.5C9.1494 22.5 9.16637 22.4959 9.18175 22.4882C9.19713 22.4805 9.2105 22.4693 9.22078 22.4555L19.5 9.75H13.5L14.9841 1.62891C14.9861 1.61273 14.9846 1.59631 14.9797 1.58074C14.9749 1.56518 14.9668 1.55082 14.956 1.53862C14.9452 1.52643 14.9319 1.51668 14.917 1.51002C14.9021 1.50336 14.886 1.49994 14.8697 1.5V1.5C14.8518 1.50007 14.8343 1.50435 14.8184 1.5125C14.8025 1.52064 14.7888 1.53242 14.7783 1.54688V1.54688Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
