import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface NotificationsOffOutlineIconProps {
  color?: string
  size?: IconSize
}

export function NotificationsOffOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: NotificationsOffOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M6.02376 9.5903C6.01219 9.78249 6.00641 9.98186 6.00641 10.1884C6.00641 14.2501 5.1561 15.0001 3.95282 16.4734C3.45406 17.0837 3.89047 18.0001 4.76329 18.0001H14.9999'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M19.4297 15.7172C18.5634 14.618 17.9944 13.5117 17.9944 10.1859C17.9944 6.46875 16.095 5.14359 14.5312 4.5C14.3236 4.41469 14.1281 4.21875 14.0648 4.00547C13.7911 3.07219 13.0228 2.25 12 2.25C10.9772 2.25 10.2094 3.07266 9.9375 4.00641C9.87422 4.22203 9.67875 4.41469 9.46875 4.5C9.17861 4.61833 8.89673 4.75599 8.625 4.91203'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15 18V18.75C15 19.5456 14.6839 20.3087 14.1213 20.8713C13.5587 21.4339 12.7956 21.75 12 21.75C11.2044 21.75 10.4413 21.4339 9.87868 20.8713C9.31607 20.3087 9 19.5456 9 18.75V18'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M21 21L3 3' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
    </Svg>
  )
}
