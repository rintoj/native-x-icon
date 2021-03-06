import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlaySkipForwardCircleIconProps {
  color?: string
  size?: IconSize
}

export function PlaySkipForwardCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PlaySkipForwardCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM15.75 15C15.75 15.1989 15.671 15.3897 15.5303 15.5303C15.3897 15.671 15.1989 15.75 15 15.75C14.8011 15.75 14.6103 15.671 14.4697 15.5303C14.329 15.3897 14.25 15.1989 14.25 15V12.5156L9.015 15.6769C8.9381 15.7229 8.85033 15.7477 8.7607 15.7487C8.67106 15.7496 8.58278 15.7267 8.50492 15.6823C8.42705 15.6379 8.36241 15.5736 8.31761 15.4959C8.27281 15.4183 8.24948 15.3301 8.25 15.2405V8.75953C8.24948 8.66989 8.27281 8.58173 8.31761 8.50408C8.36241 8.42643 8.42705 8.3621 8.50492 8.31768C8.58278 8.27326 8.67106 8.25036 8.7607 8.25131C8.85033 8.25227 8.9381 8.27705 9.015 8.32312L14.25 11.4844V9C14.25 8.80109 14.329 8.61032 14.4697 8.46967C14.6103 8.32902 14.8011 8.25 15 8.25C15.1989 8.25 15.3897 8.32902 15.5303 8.46967C15.671 8.61032 15.75 8.80109 15.75 9V15Z'
        fill={contentColor}
      />
    </Svg>
  )
}
