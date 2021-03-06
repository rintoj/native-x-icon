import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FemaleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function FemaleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: FemaleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 15.75C15.935 15.75 19.125 12.56 19.125 8.625C19.125 4.68997 15.935 1.5 12 1.5C8.06497 1.5 4.875 4.68997 4.875 8.625C4.875 12.56 8.06497 15.75 12 15.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M12 15.75V22.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M14.7188 19.5H9.28125'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
