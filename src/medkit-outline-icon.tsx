import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MedkitOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MedkitOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: MedkitOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.25 5.25H3.75C2.50736 5.25 1.5 6.25736 1.5 7.5V19.5C1.5 20.7426 2.50736 21.75 3.75 21.75H20.25C21.4926 21.75 22.5 20.7426 22.5 19.5V7.5C22.5 6.25736 21.4926 5.25 20.25 5.25Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M6.75 5.25V3.75C6.75 3.35218 6.90804 2.97064 7.18934 2.68934C7.47064 2.40804 7.85218 2.25 8.25 2.25H15.75C16.1478 2.25 16.5294 2.40804 16.8107 2.68934C17.092 2.97064 17.25 3.35218 17.25 3.75V5.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M12 9.75V17.25' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M15.75 13.5H8.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
