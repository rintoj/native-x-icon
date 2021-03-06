import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface AlertIconProps {
  color?: string
  size?: IconSize
}

export function AlertIcon({ size = 'normal', color = COLOR.SECONDARY }: AlertIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.5008 4.53704C10.4487 3.64109 11.2315 3 11.9999 3C12.7682 3 13.5511 3.64109 13.499 4.53704L13.1247 14.6426C13.1202 14.9346 13.0022 15.2137 12.7954 15.4205C12.5844 15.6315 12.2983 15.75 11.9999 15.75C11.7015 15.75 11.4154 15.6315 11.2044 15.4205C10.9976 15.2137 10.8796 14.9346 10.875 14.6426L10.5008 4.53704ZM12.0146 4.5111C12.0146 4.5111 12.0145 4.51102 12.0144 4.51086C12.0145 4.51101 12.0146 4.51109 12.0146 4.5111ZM11.9852 4.5111C11.9852 4.51109 11.9852 4.51101 11.9854 4.51086C11.9852 4.51102 11.9852 4.5111 11.9852 4.5111Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.5 19.5C10.5 18.6716 11.1716 18 12 18C12.8284 18 13.5 18.6716 13.5 19.5C13.5 20.3284 12.8284 21 12 21C11.1716 21 10.5 20.3284 10.5 19.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
