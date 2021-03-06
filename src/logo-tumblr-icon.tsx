import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoTumblrIconProps {
  color?: string
  size?: IconSize
}

export function LogoTumblrIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoTumblrIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.2812 1.5H5.625C3.31922 1.5 1.5 3.31922 1.5 5.625V18.2812C1.5 20.587 3.31922 22.5 5.625 22.5H18.2812C20.587 22.5 22.5 20.587 22.5 18.2812V5.625C22.5 3.31922 20.587 1.5 18.2812 1.5ZM15.75 18.5625H13.3125C11.3198 18.5625 9.9375 17.4525 9.9375 15V11.25H8.25V9C10.2427 8.48438 10.9664 6.735 11.0625 5.25H13.125V8.625H15.5625V11.25H13.125L13.1067 14.5552C13.1067 15.5803 13.6223 15.9347 14.4483 15.9347L15.75 15.9375V18.5625Z'
        fill={contentColor}
      />
    </Svg>
  )
}
