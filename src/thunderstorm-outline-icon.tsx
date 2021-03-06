import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ThunderstormOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ThunderstormOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ThunderstormOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M5.625 16.5L4.5 18.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6.375 20.25L5.625 21.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18.75 16.5L17.625 18.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M19.5 20.25L18.75 21.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M9.75 14.25L9 18.75H11.25V22.5L15 17.25H12.75L13.5 14.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18.953 7.1666H18.3844C18.0333 3.97722 15.2878 1.49988 12 1.49988C10.679 1.49861 9.3901 1.90655 8.31041 2.66761C7.23072 3.42868 6.41328 4.5055 5.97047 5.75004H5.75625C3.41531 5.75004 1.5 7.66254 1.5 9.99972C1.5 12.3374 3.41531 14.2499 5.75625 14.2499H18.953C20.9062 14.2499 22.5 12.6561 22.5 10.708C22.5 8.76035 20.9062 7.1666 18.953 7.1666Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
