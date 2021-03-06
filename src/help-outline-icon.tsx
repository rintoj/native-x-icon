import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HelpOutlineIconProps {
  color?: string
  size?: IconSize
}

export function HelpOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: HelpOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M7.5 7.68749C7.5 7.68749 7.5675 6.14061 9.07219 4.9003C9.96562 4.16389 11.0386 3.95061 12 3.93749C12.878 3.9267 13.6627 4.0753 14.1319 4.30405C14.9339 4.69686 16.5 5.65311 16.5 7.68749C16.5 9.82827 15.1322 10.7986 13.5773 11.8678C12.0225 12.937 11.625 13.9856 11.625 15.1875'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M11.625 20.2493C12.4534 20.2493 13.125 19.5777 13.125 18.7493C13.125 17.9209 12.4534 17.2493 11.625 17.2493C10.7966 17.2493 10.125 17.9209 10.125 18.7493C10.125 19.5777 10.7966 20.2493 11.625 20.2493Z'
        fill={contentColor}
      />
    </Svg>
  )
}
