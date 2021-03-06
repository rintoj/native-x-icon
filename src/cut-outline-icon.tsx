import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CutOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CutOutlineIcon({ size = 'normal', color = COLOR.SECONDARY }: CutOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M4.875 9.75C6.32475 9.75 7.5 8.57475 7.5 7.125C7.5 5.67525 6.32475 4.5 4.875 4.5C3.42525 4.5 2.25 5.67525 2.25 7.125C2.25 8.57475 3.42525 9.75 4.875 9.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M4.875 19.5C6.32475 19.5 7.5 18.3247 7.5 16.875C7.5 15.4253 6.32475 14.25 4.875 14.25C3.42525 14.25 2.25 15.4253 2.25 16.875C2.25 18.3247 3.42525 19.5 4.875 19.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.35938 8.20312L6.84375 8.90625L8.57812 9.60938C8.57812 9.60938 8.74031 9.30844 8.90625 9.14062L7.35938 8.20312Z'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='square'
      />
      <Path
        d='M7.22672 15.6766L21.5625 7.59391C21.4453 7.27985 20.25 7.03141 18.5625 7.40641C17.1975 7.70969 12.8831 8.76813 11.1019 10.0338C9.64922 11.0655 10.6406 12.7502 9 13.9689C7.79953 14.8595 6.91734 15.0386 6.91734 15.0386L7.22672 15.6766Z'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M16.147 13.0422L13.8281 14.3749C14.4952 14.6908 16.9003 15.9344 19.3125 16.0779C20.0119 16.1196 20.7188 16.0961 21.1406 15.7966L16.147 13.0422Z'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M12 12.75C12.8284 12.75 13.5 12.0784 13.5 11.25C13.5 10.4216 12.8284 9.75 12 9.75C11.1716 9.75 10.5 10.4216 10.5 11.25C10.5 12.0784 11.1716 12.75 12 12.75Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
    </Svg>
  )
}
