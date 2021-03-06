import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TrashBinOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TrashBinOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TrashBinOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.25 6.75L18.9061 19.6753C18.8631 20.0403 18.6877 20.3767 18.4131 20.6209C18.1385 20.8651 17.7839 21 17.4164 21H6.58406C6.2166 21 5.86193 20.8651 5.58733 20.6209C5.31273 20.3767 5.13732 20.0403 5.09438 19.6753L3.75 6.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21.75 3H2.25C1.83579 3 1.5 3.33579 1.5 3.75V6C1.5 6.41421 1.83579 6.75 2.25 6.75H21.75C22.1642 6.75 22.5 6.41421 22.5 6V3.75C22.5 3.33579 22.1642 3 21.75 3Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M14.625 11.25L9.375 16.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M14.625 16.5L9.375 11.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
