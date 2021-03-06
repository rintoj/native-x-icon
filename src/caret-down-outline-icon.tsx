import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CaretDownOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CaretDownOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CaretDownOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M4.59378 8.90913L11.146 16.5554C11.2516 16.6786 11.3826 16.7774 11.53 16.8452C11.6774 16.913 11.8378 16.9481 12 16.9481C12.1623 16.9481 12.3226 16.913 12.4701 16.8452C12.6175 16.7774 12.7485 16.6786 12.8541 16.5554L19.4063 8.90913C20.0316 8.17928 19.5132 7.05194 18.5522 7.05194H5.44597C4.48503 7.05194 3.9666 8.17928 4.59378 8.90913Z'
        fill={contentColor}
      />
    </Svg>
  )
}
