import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SyncCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function SyncCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SyncCircleOutlineIconProps) {
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
        d='M16.4916 12.7443V11.9943C16.4885 11.0834 16.2094 10.1947 15.6912 9.44553C15.1729 8.69634 14.4398 8.12179 13.5885 7.7976C12.7371 7.47342 11.8075 7.41483 10.9222 7.62956C10.0369 7.84428 9.23747 8.32224 8.62925 9.00043M7.49487 11.2584V12.0084C7.49806 12.9204 7.77765 13.81 8.29675 14.5599C8.81585 15.3097 9.55008 15.8846 10.4026 16.2086C11.2551 16.5327 12.1858 16.5907 13.0719 16.375C13.958 16.1593 14.7579 15.68 15.3661 15.0004'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6.3689 11.9996L7.47468 10.8933L8.63108 11.9996'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M17.6311 12L16.5253 13.1063L15.3689 12'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
