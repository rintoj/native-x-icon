import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoNpmIconProps {
  color?: string
  size?: IconSize
}

export function LogoNpmIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoNpmIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path d='M12 9.98944H10.6687V12.666H12V9.98944Z' fill={contentColor} />
      <Path
        d='M0 7.3125V15.3469H6.66562V16.6875H12V15.3469H24V7.3125H0ZM6.66562 14.0109H5.33438V9.99375H3.99844V14.0109H1.33125V8.65313H6.66562V14.0109ZM13.3312 14.0109H10.6641V15.3516H7.99688V8.65313H13.3312V14.0109ZM22.6688 14.0109H21.3375V9.99375H20.0062V14.0109H18.675V9.99375H17.3438V14.0109H14.6766V8.65313H22.6781V14.0109H22.6688Z'
        fill={contentColor}
      />
    </Svg>
  )
}
