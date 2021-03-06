import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ColorFilterOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ColorFilterOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ColorFilterOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 14.25C15.1066 14.25 17.625 11.7316 17.625 8.625C17.625 5.5184 15.1066 3 12 3C8.8934 3 6.375 5.5184 6.375 8.625C6.375 11.7316 8.8934 14.25 12 14.25Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M16.125 21C19.2316 21 21.75 18.4816 21.75 15.375C21.75 12.2684 19.2316 9.75 16.125 9.75C13.0184 9.75 10.5 12.2684 10.5 15.375C10.5 18.4816 13.0184 21 16.125 21Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M7.875 21C10.9816 21 13.5 18.4816 13.5 15.375C13.5 12.2684 10.9816 9.75 7.875 9.75C4.7684 9.75 2.25 12.2684 2.25 15.375C2.25 18.4816 4.7684 21 7.875 21Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
    </Svg>
  )
}
