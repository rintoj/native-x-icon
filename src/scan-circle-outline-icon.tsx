import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ScanCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ScanCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ScanCircleOutlineIconProps) {
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
        d='M13.875 16.5H15.1875C15.5356 16.5 15.8694 16.3617 16.1156 16.1156C16.3617 15.8694 16.5 15.5356 16.5 15.1875V13.875'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M16.5 10.125V8.8125C16.5 8.4644 16.3617 8.13056 16.1156 7.88442C15.8694 7.63828 15.5356 7.5 15.1875 7.5H13.875'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M10.125 16.5H8.8125C8.4644 16.5 8.13056 16.3617 7.88442 16.1156C7.63828 15.8694 7.5 15.5356 7.5 15.1875V13.875'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.5 10.125V8.8125C7.5 8.4644 7.63828 8.13056 7.88442 7.88442C8.13056 7.63828 8.4644 7.5 8.8125 7.5H10.125'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
