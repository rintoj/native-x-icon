import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface NotificationsWithBadgeIconProps {
  color?: string
  size?: IconSize
}

export function NotificationsWithBadgeIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: NotificationsWithBadgeIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.0474 16.4728C18.8436 14.9995 17.9938 14.2495 17.9938 10.1878C17.9938 6.46826 16.0944 5.1431 14.5311 4.49951C14.3235 4.4142 14.128 4.21826 14.0647 4.00498C13.7905 3.0717 13.0217 2.24951 11.9999 2.24951C10.978 2.24951 10.2088 3.07217 9.93736 4.00592C9.87408 4.22154 9.67861 4.4142 9.47096 4.49951C7.9058 5.14404 6.0083 6.46451 6.0083 10.1878C6.00596 14.2495 5.15611 14.9995 3.95237 16.4728C3.45362 17.0831 3.89049 17.9995 4.76283 17.9995H19.2416C20.1092 17.9995 20.5433 17.0803 20.0474 16.4728Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M14.9999 17.9988V18.7488C14.9999 19.5444 14.6839 20.3075 14.1213 20.8701C13.5586 21.4327 12.7956 21.7488 11.9999 21.7488C11.2043 21.7488 10.4412 21.4327 9.87862 20.8701C9.31601 20.3075 8.99994 19.5444 8.99994 18.7488V17.9988'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Circle cx="18" cy="6" r="4.75" fill='#ED2733' stroke='#ED2733' />
    </Svg>
  )
}
