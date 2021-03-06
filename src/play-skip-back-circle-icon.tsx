import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlaySkipBackCircleIconProps {
  color?: string
  size?: IconSize
}

export function PlaySkipBackCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PlaySkipBackCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25C6.62391 2.25 2.25 6.62391 2.25 12ZM8.25 9C8.25 8.80109 8.32902 8.61032 8.46967 8.46967C8.61032 8.32902 8.80109 8.25 9 8.25C9.19891 8.25 9.38968 8.32902 9.53033 8.46967C9.67098 8.61032 9.75 8.80109 9.75 9V11.4844L14.985 8.32219C15.062 8.27607 15.1498 8.25129 15.2395 8.25037C15.3293 8.24945 15.4176 8.27244 15.4955 8.31697C15.5734 8.3615 15.638 8.42597 15.6827 8.50375C15.7275 8.58153 15.7507 8.66981 15.75 8.75953V15.2405C15.7505 15.3301 15.7272 15.4183 15.6824 15.4959C15.6376 15.5736 15.5729 15.6379 15.4951 15.6823C15.4172 15.7267 15.3289 15.7496 15.2393 15.7487C15.1497 15.7477 15.0619 15.7229 14.985 15.6769L9.75 12.5156V15C9.75 15.1989 9.67098 15.3897 9.53033 15.5303C9.38968 15.671 9.19891 15.75 9 15.75C8.80109 15.75 8.61032 15.671 8.46967 15.5303C8.32902 15.3897 8.25 15.1989 8.25 15V9Z'
        fill={contentColor}
      />
    </Svg>
  )
}
