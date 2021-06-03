import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GitCommitOutlineIconProps {
  color?: string
  size?: IconSize
}

export function GitCommitOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: GitCommitOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M7.5 12H2.25' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M21.75 12H16.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
