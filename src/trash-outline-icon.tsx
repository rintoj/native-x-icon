import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TrashOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TrashOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TrashOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M5.25 5.25L6.1875 20.25C6.23203 21.1167 6.8625 21.75 7.6875 21.75H16.3125C17.1408 21.75 17.7595 21.1167 17.8125 20.25L18.75 5.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M3.75 5.25H20.25'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M9 5.24988V3.37488C8.99957 3.22702 9.02838 3.08054 9.08476 2.94385C9.14114 2.80717 9.22399 2.68297 9.32854 2.57842C9.4331 2.47387 9.55729 2.39102 9.69398 2.33464C9.83066 2.27825 9.97715 2.24945 10.125 2.24988H13.875C14.0229 2.24945 14.1694 2.27825 14.306 2.33464C14.4427 2.39102 14.5669 2.47387 14.6715 2.57842C14.776 2.68297 14.8589 2.80717 14.9153 2.94385C14.9716 3.08054 15.0005 3.22702 15 3.37488V5.24988'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M12 8.25V18.75' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M8.625 8.25L9 18.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.375 8.25L15 18.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
