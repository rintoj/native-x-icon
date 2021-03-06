import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LockClosedOutlineIconProps {
  color?: string
  size?: IconSize
}

export function LockClosedOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LockClosedOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.75 9.75V5.29688C15.75 4.30231 15.3549 3.34849 14.6517 2.64522C13.9484 1.94196 12.9946 1.54688 12 1.54688C11.0054 1.54688 10.0516 1.94196 9.34835 2.64522C8.64509 3.34849 8.25 4.30231 8.25 5.29688V9.75'
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
