import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CloudDownloadOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CloudDownloadOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CloudDownloadOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15 15.75H18.5625C21.1406 15.75 23.25 14.7558 23.25 12.2062C23.25 9.65672 20.7656 8.76234 18.75 8.6625C18.3333 4.67531 15.4219 2.25 12 2.25C8.76562 2.25 6.6825 4.39641 6 6.525C3.1875 6.79219 0.75 8.20688 0.75 11.1375C0.75 14.0681 3.28125 15.75 6.375 15.75H9'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M9 18.7546L12 21.75L15 18.7546'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 10.5V21.0014'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
