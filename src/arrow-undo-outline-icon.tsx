import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ArrowUndoOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ArrowUndoOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ArrowUndoOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M11.25 19.875V15.375C16.7063 15.375 18.7214 16.9575 21 19.875C21 14.2861 19.1452 8.625 11.25 8.625V4.125L3 12L11.25 19.875Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
    </Svg>
  )
}
