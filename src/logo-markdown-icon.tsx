import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoMarkdownIconProps {
  color?: string
  size?: IconSize
}

export function LogoMarkdownIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoMarkdownIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.2656 3H1.73438C0.777187 3 0 3.81469 0 4.81734V19.1808C0 20.1839 0.777187 21 1.73438 21H22.2656C23.2209 21 24 20.1839 24 19.1808V4.81734C24 3.81469 23.2228 3 22.2656 3ZM13.5 17.25H10.5V12L8.25 15L6 12V17.25H3V6.75H6L8.25 10.5L10.5 6.75H13.5V17.25ZM18 17.25L14.25 12H16.5023L16.5 6.75H19.5V12H21.75L18 17.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
