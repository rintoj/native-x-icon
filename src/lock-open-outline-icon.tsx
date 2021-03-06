import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LockOpenOutlineIconProps {
  color?: string
  size?: IconSize
}

export function LockOpenOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LockOpenOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.75 5.25C15.75 4.25544 15.3549 3.30161 14.6517 2.59835C13.9484 1.89509 12.9946 1.5 12 1.5C11.0054 1.5 10.0516 1.89509 9.34835 2.59835C8.64509 3.30161 8.25 4.25544 8.25 5.25V9.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M17.25 9.75H6.75C5.50736 9.75 4.5 10.7574 4.5 12V20.25C4.5 21.4926 5.50736 22.5 6.75 22.5H17.25C18.4926 22.5 19.5 21.4926 19.5 20.25V12C19.5 10.7574 18.4926 9.75 17.25 9.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
