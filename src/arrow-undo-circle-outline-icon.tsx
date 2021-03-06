import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ArrowUndoCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ArrowUndoCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ArrowUndoCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M11.4886 15.3627V13.6133C14.1637 13.6133 15.45 14.2447 16.5783 15.4265C16.8314 15.6913 17.2814 15.4883 17.2481 15.1251C16.9927 12.2446 15.6478 9.63646 11.4886 9.63646V7.88708C11.4883 7.81093 11.4657 7.73653 11.4236 7.67306C11.3815 7.6096 11.3218 7.55984 11.2518 7.52993C11.1817 7.50002 11.1045 7.49127 11.0295 7.50476C10.9546 7.51825 10.8852 7.55338 10.83 7.60583L6.87094 11.3436C6.83277 11.3796 6.80236 11.4229 6.78157 11.4711C6.76078 11.5192 6.75006 11.5711 6.75006 11.6235C6.75006 11.6759 6.76078 11.7278 6.78157 11.7759C6.80236 11.824 6.83277 11.8674 6.87094 11.9033L10.8281 15.6426C10.8832 15.6955 10.9526 15.7312 11.0277 15.7451C11.1028 15.759 11.1804 15.7505 11.2507 15.7207C11.3211 15.6909 11.3811 15.641 11.4234 15.5774C11.4657 15.5138 11.4884 15.4391 11.4886 15.3627Z'
        fill={contentColor}
      />
      <Path
        d='M12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12C21 7.03125 16.9688 3 12 3Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
    </Svg>
  )
}
