import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReloadOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ReloadOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ReloadOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.75 6.93738L17.76 5.78567C16.9206 4.90402 15.9106 4.2024 14.7914 3.72348C13.6722 3.24456 12.4673 2.99837 11.25 2.99988C6.28125 2.99988 2.25 7.03114 2.25 11.9999C2.25 16.9686 6.28125 20.9999 11.25 20.9999C13.1114 20.9998 14.927 20.4228 16.447 19.3483C17.967 18.2738 19.1166 16.7546 19.7377 14.9999'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M21.7499 4.56642V9.74986C21.7499 9.94877 21.6709 10.1395 21.5303 10.2802C21.3896 10.4208 21.1989 10.4999 20.9999 10.4999H15.8165C15.1481 10.4999 14.8134 9.6922 15.2859 9.2197L20.4698 4.03579C20.9423 3.56236 21.7499 3.89798 21.7499 4.56642Z'
        fill={contentColor}
      />
    </Svg>
  )
}
