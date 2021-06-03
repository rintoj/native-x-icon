import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ChatbubbleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ChatbubbleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ChatbubbleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M4.10108 17.8125C4.15686 17.6072 4.03358 17.3217 3.91592 17.1159C3.87929 17.0546 3.83955 16.9951 3.79686 16.9378C2.78777 15.4075 2.24992 13.6147 2.24999 11.7816C2.23358 6.51984 6.5967 2.25 11.992 2.25C16.6973 2.25 20.625 5.50969 21.5428 9.83672C21.6803 10.4782 21.7498 11.1325 21.75 11.7886C21.75 17.0578 17.5551 21.3947 12.1598 21.3947C11.302 21.3947 10.1442 21.1791 9.5128 21.0023C8.88139 20.8256 8.25092 20.5913 8.08827 20.5284C7.92191 20.4645 7.74524 20.4316 7.56702 20.4314C7.37235 20.4307 7.17956 20.4694 7.0003 20.5453L3.82077 21.6928C3.75111 21.7228 3.6773 21.7421 3.60186 21.75C3.54233 21.7498 3.48342 21.7378 3.42856 21.7147C3.37369 21.6916 3.32396 21.6579 3.28223 21.6154C3.24051 21.5729 3.20762 21.5226 3.18549 21.4673C3.16335 21.4121 3.1524 21.353 3.15327 21.2934C3.15718 21.2412 3.1666 21.1895 3.18139 21.1392L4.10108 17.8125Z'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}
