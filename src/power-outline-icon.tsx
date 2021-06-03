import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PowerOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PowerOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PowerOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.7187 5.0625C18.7446 5.90424 19.5711 6.96309 20.1385 8.16273C20.7058 9.36237 21.0001 10.6729 20.9999 12C20.9999 16.9688 16.9687 21 11.9999 21C7.03117 21 2.99992 16.9688 2.99992 12C2.99598 10.677 3.28378 9.36937 3.84282 8.17027C4.40187 6.97116 5.2184 5.91005 6.23429 5.0625'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M12 3V12' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
