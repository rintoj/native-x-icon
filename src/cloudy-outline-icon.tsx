import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CloudyOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CloudyOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CloudyOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M4.69594 11.3058C4.85283 11.2823 4.99816 11.2094 5.11084 11.0977C5.22353 10.986 5.29772 10.8414 5.32266 10.6847C5.93438 6.82453 8.73469 4.5 12 4.5C15.0323 4.5 17.0527 6.48563 17.8556 8.57812C17.9029 8.70231 17.9821 8.81182 18.0852 8.8956C18.1883 8.97938 18.3117 9.03448 18.443 9.05531C21.0638 9.47156 23.25 11.213 23.25 14.25C23.25 17.3438 20.7188 19.5 17.625 19.5H5.4375C2.85938 19.5 0.75 18.2138 0.75 15.375C0.75 12.8236 2.80734 11.587 4.69594 11.3058Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
    </Svg>
  )
}
