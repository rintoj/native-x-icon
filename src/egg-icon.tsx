import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface EggIconProps {
  color?: string
  size?: IconSize
}

export function EggIcon({ size = 'normal', color = COLOR.SECONDARY }: EggIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 22.5C9.53578 22.5 7.46625 21.6778 6.01406 20.122C4.53281 18.5344 3.75 16.2211 3.75 13.432C3.75 10.8047 4.75687 7.875 6.51234 5.39062C8.23359 2.95312 10.2848 1.5 12 1.5C13.7152 1.5 15.7664 2.95312 17.4877 5.39062C19.2431 7.875 20.25 10.8047 20.25 13.432C20.25 16.2211 19.4672 18.5344 17.9859 20.122C16.5338 21.6778 14.4642 22.5 12 22.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
