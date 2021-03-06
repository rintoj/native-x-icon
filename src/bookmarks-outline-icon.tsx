import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BookmarksOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BookmarksOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BookmarksOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M6 3.75V3C6.00173 2.4038 6.23934 1.8325 6.66092 1.41092C7.0825 0.98934 7.6538 0.751731 8.25 0.75H18.75C19.3462 0.751731 19.9175 0.98934 20.3391 1.41092C20.7607 1.8325 20.9983 2.4038 21 3V20.25L17.25 17.25'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M15 4.5H5.25C4.6538 4.50173 4.0825 4.73934 3.66092 5.16092C3.23934 5.5825 3.00173 6.1538 3 6.75V23.25L10.125 17.25L17.25 23.25V6.75C17.2483 6.1538 17.0107 5.5825 16.5891 5.16092C16.1675 4.73934 15.5962 4.50173 15 4.5V4.5Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
    </Svg>
  )
}
