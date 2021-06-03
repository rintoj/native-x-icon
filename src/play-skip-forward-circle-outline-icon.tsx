import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlaySkipForwardCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PlaySkipForwardCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PlaySkipForwardCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M15 8.25C14.8011 8.25 14.6103 8.32902 14.4697 8.46967C14.329 8.61032 14.25 8.80109 14.25 9V11.4844L9.01501 8.32312C8.93811 8.27705 8.85034 8.25227 8.7607 8.25131C8.67107 8.25036 8.58279 8.27326 8.50493 8.31768C8.42706 8.3621 8.36242 8.42643 8.31762 8.50408C8.27282 8.58173 8.24949 8.66989 8.25001 8.75953V15.2405C8.24949 15.3301 8.27282 15.4183 8.31762 15.4959C8.36242 15.5736 8.42706 15.6379 8.50493 15.6823C8.58279 15.7267 8.67107 15.7496 8.7607 15.7487C8.85034 15.7477 8.93811 15.7229 9.01501 15.6769L14.25 12.5156V15C14.25 15.1989 14.329 15.3897 14.4697 15.5303C14.6103 15.671 14.8011 15.75 15 15.75C15.1989 15.75 15.3897 15.671 15.5303 15.5303C15.671 15.3897 15.75 15.1989 15.75 15V9C15.75 8.80109 15.671 8.61032 15.5303 8.46967C15.3897 8.32902 15.1989 8.25 15 8.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
