import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TodayOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TodayOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TodayOutlineIconProps) {
  const { getColor } = useTheme()
  const strokeColor = getColor?.(color)
  const iconSize = getIconSize(size)

  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.5 3.75h-15A2.25 2.25 0 002.25 6v13.5a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25z'
        stroke={strokeColor}
        strokeLinejoin='round'
      />
      <Path
        d='M6 2.25v1.5M18 2.25v1.5M9.14 10.5H5.86a.61.61 0 00-.61.61v3.28c0 .337.273.61.61.61h3.28a.61.61 0 00.61-.61v-3.28a.61.61 0 00-.61-.61zM21.75 7.5H2.25'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
