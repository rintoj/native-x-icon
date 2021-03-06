import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BarcodeOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BarcodeOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BarcodeOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18 18.7655L19.6467 18.75C20.0051 18.7484 20.3484 18.6053 20.6019 18.3519C20.8553 18.0984 20.9984 17.7551 21 17.3967V6.60328C20.9984 6.24486 20.8553 5.90158 20.6019 5.64814C20.3484 5.3947 20.0051 5.2516 19.6467 5.25L18 5.26547'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6 5.25L4.275 5.26547C3.53062 5.26547 3 5.87484 3 6.61875V17.4127C3 18.1566 3.53062 18.7655 4.275 18.7655L6 18.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M18 9V15' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M15 7.5V16.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M12 8.25V15.75' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M9 7.5V16.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M6 9V15' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
