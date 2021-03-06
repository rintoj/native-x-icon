import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ChevronForwardIconProps {
  color?: string
  size?: IconSize
}

export function ChevronForwardIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ChevronForwardIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.8295 4.4545C8.26884 4.01517 8.98116 4.01517 9.4205 4.4545L16.1705 11.2045C16.6098 11.6438 16.6098 12.3562 16.1705 12.7955L9.4205 19.5455C8.98116 19.9848 8.26884 19.9848 7.8295 19.5455C7.39017 19.1062 7.39017 18.3938 7.8295 17.9545L13.784 12L7.8295 6.0455C7.39017 5.60616 7.39017 4.89384 7.8295 4.4545Z'
        fill={contentColor}
      />
    </Svg>
  )
}
