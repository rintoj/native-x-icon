import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ThermometerOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ThermometerOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ThermometerOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M14.4244 14.1689C14.371 14.1351 14.3271 14.0884 14.2966 14.0331C14.2661 13.9778 14.2501 13.9157 14.25 13.8525V3.75C14.25 3.15326 14.013 2.58097 13.591 2.15901C13.1691 1.73705 12.5968 1.5 12 1.5C11.4033 1.5 10.831 1.73705 10.409 2.15901C9.98707 2.58097 9.75002 3.15326 9.75002 3.75V13.8525C9.74992 13.9155 9.73393 13.9775 9.70354 14.0327C9.67314 14.088 9.62932 14.1346 9.57611 14.1684C8.90965 14.6026 8.36802 15.2031 8.00473 15.9107C7.64145 16.6183 7.4691 17.4084 7.50471 18.203C7.55834 19.3772 8.06933 20.4839 8.92838 21.2863C9.78743 22.0886 10.9263 22.523 12.1015 22.4965C13.2767 22.47 14.3949 21.9847 15.2169 21.1444C16.0388 20.3041 16.4994 19.1755 16.5 18C16.5003 17.2391 16.3107 16.4902 15.9482 15.8211C15.5857 15.1521 15.062 14.5842 14.4244 14.1689V14.1689Z'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path d='M12 5.25V18' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
      <Path
        d='M12 20.25C13.2426 20.25 14.25 19.2426 14.25 18C14.25 16.7574 13.2426 15.75 12 15.75C10.7574 15.75 9.75 16.7574 9.75 18C9.75 19.2426 10.7574 20.25 12 20.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
