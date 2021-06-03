import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PrintOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PrintOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PrintOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18 17.25H19.125C19.6218 17.2485 20.0979 17.0505 20.4492 16.6992C20.8005 16.3479 20.9985 15.8718 21 15.375V7.875C20.9985 7.37818 20.8005 6.90212 20.4492 6.55081C20.0979 6.1995 19.6218 6.00148 19.125 6H4.875C4.37818 6.00148 3.90212 6.1995 3.55081 6.55081C3.1995 6.90212 3.00148 7.37818 3 7.875V15.375C3.00148 15.8718 3.1995 16.3479 3.55081 16.6992C3.90212 17.0505 4.37818 17.2485 4.875 17.25H6'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M16.86 11.25H7.14C6.5104 11.25 6 11.7604 6 12.39V19.86C6 20.4896 6.5104 21 7.14 21H16.86C17.4896 21 18 20.4896 18 19.86V12.39C18 11.7604 17.4896 11.25 16.86 11.25Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M18 6V4.875C17.9985 4.37818 17.8005 3.90212 17.4492 3.55081C17.0979 3.1995 16.6218 3.00148 16.125 3H7.875C7.37818 3.00148 6.90212 3.1995 6.55081 3.55081C6.1995 3.90212 6.00148 4.37818 6 4.875V6'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M18.375 9.75C18.9963 9.75 19.5 9.24632 19.5 8.625C19.5 8.00368 18.9963 7.5 18.375 7.5C17.7537 7.5 17.25 8.00368 17.25 8.625C17.25 9.24632 17.7537 9.75 18.375 9.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
