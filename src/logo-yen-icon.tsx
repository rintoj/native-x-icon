import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoYenIconProps {
  color?: string
  size?: IconSize
}

export function LogoYenIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoYenIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 1.5H17.25L12 11.8655L6.75 1.5H3L8.26734 11.25H6V13.5H9.44812L10.125 14.9531V15.75H6V18H10.125V22.5H13.875V18H18V15.75H13.875V14.9531L14.573 13.5H18V11.25H15.7364L21 1.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
