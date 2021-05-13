import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SadOutlineIconProps {
  color?: string
  size?: IconSize
}

export function SadOutlineIcon({ size = 'normal', color = COLOR.SECONDARY }: SadOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M8.625 12C9.24632 12 9.75 11.4963 9.75 10.875C9.75 10.2537 9.24632 9.75 8.625 9.75C8.00368 9.75 7.5 10.2537 7.5 10.875C7.5 11.4963 8.00368 12 8.625 12Z'
        fill={contentColor}
      />
      <Path
        d='M12.0001 13.5C14.1291 13.5 15.9198 14.8842 16.4865 16.7733C16.5024 16.8297 16.5049 16.889 16.4937 16.9466C16.4825 17.0041 16.458 17.0582 16.4221 17.1046C16.3863 17.1509 16.34 17.1882 16.2871 17.2135C16.2342 17.2387 16.1762 17.2512 16.1176 17.25H7.8821C7.8237 17.2509 7.7659 17.2381 7.71331 17.2127C7.66072 17.1873 7.61479 17.1499 7.57919 17.1036C7.54358 17.0573 7.51929 17.0033 7.50824 16.946C7.49719 16.8886 7.49969 16.8295 7.51554 16.7733C8.07757 14.8842 9.86866 13.5 12.0001 13.5Z'
        fill={contentColor}
      />
      <Path
        d='M15.375 12C15.9963 12 16.5 11.4963 16.5 10.875C16.5 10.2537 15.9963 9.75 15.375 9.75C14.7537 9.75 14.25 10.2537 14.25 10.875C14.25 11.4963 14.7537 12 15.375 12Z'
        fill={contentColor}
      />
      <Path
        d='M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
    </Svg>
  )
}
