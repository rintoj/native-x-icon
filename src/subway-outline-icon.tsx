import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SubwayOutlineIconProps {
  color?: string
  size?: IconSize
}

export function SubwayOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SubwayOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.5 1.5H7.5C6.25736 1.5 5.25 2.50736 5.25 3.75V15.75C5.25 16.9926 6.25736 18 7.5 18H16.5C17.7426 18 18.75 16.9926 18.75 15.75V3.75C18.75 2.50736 17.7426 1.5 16.5 1.5Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M9.75 3.75H14.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M17.25 6H6.75C5.92157 6 5.25 6.67157 5.25 7.5V9C5.25 9.82843 5.92157 10.5 6.75 10.5H17.25C18.0784 10.5 18.75 9.82843 18.75 9V7.5C18.75 6.67157 18.0784 6 17.25 6Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8.25 15.75C8.66421 15.75 9 15.4142 9 15C9 14.5858 8.66421 14.25 8.25 14.25C7.83579 14.25 7.5 14.5858 7.5 15C7.5 15.4142 7.83579 15.75 8.25 15.75Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M15.75 15.75C16.1642 15.75 16.5 15.4142 16.5 15C16.5 14.5858 16.1642 14.25 15.75 14.25C15.3358 14.25 15 14.5858 15 15C15 15.4142 15.3358 15.75 15.75 15.75Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M6.75 21.75H17.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.75 20.25L18 22.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8.25 20.25L6 22.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
