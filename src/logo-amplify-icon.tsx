import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoAmplifyIconProps {
  color?: string
  size?: IconSize
}

export function LogoAmplifyIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoAmplifyIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.26453 12.5625L7.15641 9.34266L8.78063 12.1083L5.61469 17.4989H11.9428L13.5614 20.25H0.75L5.26453 12.5625ZM8.01 7.88625L9.56953 5.22984L18.3956 20.25H15.27L8.01 7.88625ZM10.4377 3.75H13.5591L23.25 20.25H20.1244L10.4377 3.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
