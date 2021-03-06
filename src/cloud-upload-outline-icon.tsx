import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CloudUploadOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CloudUploadOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CloudUploadOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15 17.2401H18.5625C21.1406 17.2401 23.25 15.8709 23.25 13.3214C23.25 10.7718 20.7656 9.50246 18.75 9.40261C18.3333 5.41542 15.4219 2.99011 12 2.99011C8.76562 2.99011 6.6825 5.13652 6 7.26511C3.1875 7.5323 0.75 9.32199 0.75 12.2526C0.75 15.1832 3.28125 17.2401 6.375 17.2401H9'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15 11.9901L12 8.99011L9 11.9901'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 21.0098V9.74011'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
