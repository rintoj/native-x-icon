import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ImageOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ImageOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ImageOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.5 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V6C21.75 4.75736 20.7426 3.75 19.5 3.75Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M15.75 9.75C16.5784 9.75 17.25 9.07843 17.25 8.25C17.25 7.42157 16.5784 6.75 15.75 6.75C14.9216 6.75 14.25 7.42157 14.25 8.25C14.25 9.07843 14.9216 9.75 15.75 9.75Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M14.25 15.7404L10.0003 11.4987C9.72989 11.2283 9.36642 11.0715 8.9842 11.0601C8.60198 11.0488 8.22986 11.1839 7.94391 11.4378L2.25 16.5003'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M10.5 20.2501L16.2816 14.4685C16.546 14.2036 16.8999 14.0471 17.2738 14.0297C17.6477 14.0124 18.0145 14.1354 18.3023 14.3747L21.75 17.2501'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
