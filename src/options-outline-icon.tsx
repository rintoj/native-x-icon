import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface OptionsOutlineIconProps {
  color?: string
  size?: IconSize
}

export function OptionsOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: OptionsOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path d='M17.25 6H21' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M3 6H14.25' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M17.25 18H21' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M3 18H14.25' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M9.75 12H21' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M3 12H6.75' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M15.75 7.5C16.5784 7.5 17.25 6.82843 17.25 6C17.25 5.17157 16.5784 4.5 15.75 4.5C14.9216 4.5 14.25 5.17157 14.25 6C14.25 6.82843 14.9216 7.5 15.75 7.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8.25 13.5C9.07843 13.5 9.75 12.8284 9.75 12C9.75 11.1716 9.07843 10.5 8.25 10.5C7.42157 10.5 6.75 11.1716 6.75 12C6.75 12.8284 7.42157 13.5 8.25 13.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.75 19.5C16.5784 19.5 17.25 18.8284 17.25 18C17.25 17.1716 16.5784 16.5 15.75 16.5C14.9216 16.5 14.25 17.1716 14.25 18C14.25 18.8284 14.9216 19.5 15.75 19.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
