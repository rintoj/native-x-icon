import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LockOutlineIconProps {
  color?: string
  size?: IconSize
}

export function LockOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LockOutlineIconProps) {
  const { getColor } = useTheme()
  const textFill = getColor?.(color)
  const iconSize = getIconSize(size)

  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 18 18' fill='none'>
      <Path
        d='M11.813 7.313v-3.34a2.812 2.812 0 10-5.626 0v3.34'
        stroke={textFill}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12.938 7.313H5.061c-.931 0-1.687.755-1.687 1.687v6.188c0 .931.756 1.687 1.688 1.687h7.875c.931 0 1.687-.756 1.687-1.688V9c0-.932-.755-1.688-1.688-1.688z'
        stroke={textFill}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
