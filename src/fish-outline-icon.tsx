import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FishOutlineIconProps {
  color?: string
  size?: IconSize
}

export function FishOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: FishOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M11.25 7.125C8.87297 7.69734 6.83672 9.57703 5.61094 10.567C5.2573 10.2394 4.88462 9.93291 4.49484 9.64922C2.79047 8.40422 0.75 8.25 0.75 8.25C0.75 8.25 1.28297 10.6655 2.68875 11.992C1.28297 13.3191 0.75 15.7345 0.75 15.7345C0.75 15.7345 2.79047 15.5803 4.49484 14.3353C4.88133 14.0541 5.25088 13.7503 5.60156 13.4255C6.825 14.4164 8.87063 16.3008 11.25 16.875L10.5 19.5C12.3483 19.1873 14.1966 17.8355 14.94 17.2383C21 16.9688 23.25 13.0781 23.25 12C23.25 10.9688 21 7.03125 14.9583 6.76266C14.2275 6.17719 12.3637 4.815 10.5 4.5L11.25 7.125Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M19.5 11.9993C19.9142 11.9993 20.25 11.6635 20.25 11.2493C20.25 10.8351 19.9142 10.4993 19.5 10.4993C19.0858 10.4993 18.75 10.8351 18.75 11.2493C18.75 11.6635 19.0858 11.9993 19.5 11.9993Z'
        fill={contentColor}
      />
      <Path
        d='M17.7363 16.6875C16.9099 15.2635 16.4746 13.6464 16.4746 12C16.4746 10.3536 16.9099 8.73646 17.7363 7.3125'
        stroke={contentColor}
        strokeMiterlimit='20'
        strokeLinecap='round'
      />
    </Svg>
  )
}
