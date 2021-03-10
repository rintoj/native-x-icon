import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface AddOutlineIconProps {
  color?: string
  size?: IconSize
}

export function AddOutlineIcon({ size = 'normal', color = COLOR.SECONDARY }: AddOutlineIconProps) {
  const { getColor } = useTheme()
  const strokeColor = getColor?.(color)
  const iconSize = getIconSize(size)

  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 5.25v13.5M18.75 12H5.25'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
