import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PencilOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PencilOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PencilOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.0686 5.87109L4.07812 18.8906L3 21L5.10891 19.9219L18.1289 6.93141L17.0686 5.87109Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M19.7199 3.2195L18.6595 4.27981L19.7199 5.34059L20.7802 4.27981C20.9207 4.13917 20.9997 3.94848 20.9997 3.74965C20.9997 3.55083 20.9207 3.36013 20.7802 3.2195V3.2195C20.6395 3.07895 20.4488 3 20.25 3C20.0512 3 19.8605 3.07895 19.7199 3.2195V3.2195Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
