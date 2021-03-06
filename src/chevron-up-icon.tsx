import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ChevronUpIconProps {
  color?: string
  size?: IconSize
}

export function ChevronUpIcon({ size = 'normal', color = COLOR.SECONDARY }: ChevronUpIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.2045 7.8295C11.6438 7.39017 12.3562 7.39017 12.7955 7.8295L19.5455 14.5795C19.9848 15.0188 19.9848 15.7312 19.5455 16.1705C19.1062 16.6098 18.3938 16.6098 17.9545 16.1705L12 10.216L6.0455 16.1705C5.60616 16.6098 4.89384 16.6098 4.4545 16.1705C4.01517 15.7312 4.01517 15.0188 4.4545 14.5795L11.2045 7.8295Z'
        fill={contentColor}
      />
    </Svg>
  )
}
