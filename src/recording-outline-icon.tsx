import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface RecordingOutlineIconProps {
  color?: string
  size?: IconSize
}

export function RecordingOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: RecordingOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M6 16.5C8.48528 16.5 10.5 14.4853 10.5 12C10.5 9.51472 8.48528 7.5 6 7.5C3.51472 7.5 1.5 9.51472 1.5 12C1.5 14.4853 3.51472 16.5 6 16.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18 16.5C20.4853 16.5 22.5 14.4853 22.5 12C22.5 9.51472 20.4853 7.5 18 7.5C15.5147 7.5 13.5 9.51472 13.5 12C13.5 14.4853 15.5147 16.5 18 16.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M6 16.5H18' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
