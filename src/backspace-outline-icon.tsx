import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BackspaceOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BackspaceOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BackspaceOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M6.33694 18.2878C6.46356 18.4329 6.61975 18.5492 6.79503 18.6289C6.97032 18.7086 7.16063 18.7499 7.35319 18.75H18.8966C19.2551 18.7484 19.5983 18.6053 19.8518 18.3519C20.1052 18.0984 20.2483 17.7551 20.2499 17.3967V6.60328C20.2483 6.24486 20.1052 5.90158 19.8518 5.64814C19.5983 5.3947 19.2551 5.2516 18.8966 5.25H7.35319C7.16081 5.25018 6.97068 5.29142 6.79551 5.37096C6.62033 5.4505 6.46416 5.56652 6.33741 5.71125L2.17163 12L6.33694 18.2864V18.2878Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M15.7815 9.0154L9.68726 15.1096'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.7815 15.1096L9.68726 9.0154'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.7815 9.0154L9.68726 15.1096'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.7815 15.1096L9.68726 9.0154'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
