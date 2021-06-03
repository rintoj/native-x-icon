import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FlaskOutlineIconProps {
  color?: string
  size?: IconSize
}

export function FlaskOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: FlaskOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M8.25 2.25H15.75'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M5.53125 14.25H18.4688'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M9.75001 2.25V6.63187C9.74994 7.19894 9.58938 7.75441 9.28689 8.23406L3.43173 17.5073C2.26876 19.3491 3.59204 21.75 5.76939 21.75H18.2306C20.408 21.75 21.7313 19.3491 20.5683 17.5073L14.7127 8.23406C14.4103 7.75436 14.2499 7.1989 14.25 6.63187V2.25'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}
