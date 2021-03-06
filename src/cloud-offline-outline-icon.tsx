import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CloudOfflineOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CloudOfflineOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CloudOfflineOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <G clipPath='url(#clip0)'>
        <Path
          d='M4.39313 8.58984C2.31984 9.28359 0.75 10.9266 0.75 13.5C0.75 16.5938 3.28125 18.75 6.375 18.75H15.0173'
          stroke={contentColor}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M21.9291 17.7066C22.7456 17.0297 23.25 16.013 23.25 14.625C23.25 11.8209 20.7656 10.605 18.75 10.5C18.3333 6.30281 15.4219 3.75 12 3.75C10.7737 3.75 9.71297 4.07484 8.83125 4.60031'
          stroke={contentColor}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path d='M21 21L3 3' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
      </G>
      <Defs>
        <ClipPath id='clip0'>
          <Rect width='24' height='24' fill={contentColor} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
