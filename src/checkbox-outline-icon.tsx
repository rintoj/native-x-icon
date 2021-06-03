import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CheckboxOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CheckboxOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CheckboxOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.5 8.25L10.2 15.75L7.5 12.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18.75 3H5.25C4.00736 3 3 4.00736 3 5.25V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V5.25C21 4.00736 19.9926 3 18.75 3Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
    </Svg>
  )
}
