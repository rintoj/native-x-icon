import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ColorWandOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ColorWandOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ColorWandOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M10.4466 8.35744C9.8696 7.78044 8.93417 7.78036 8.35727 8.35727C7.78036 8.93418 7.78043 9.86961 8.35743 10.4466L18.8036 20.8928C19.3806 21.4698 20.316 21.4699 20.8929 20.8929C21.4698 20.316 21.4698 19.3806 20.8928 18.8036L10.4466 8.35744Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M8.36156 8.3615C8.22381 8.49922 8.11454 8.66273 8.03999 8.84269C7.96543 9.02265 7.92706 9.21554 7.92706 9.41033C7.92706 9.60512 7.96543 9.798 8.03999 9.97796C8.11454 10.1579 8.22381 10.3214 8.36156 10.4592L10.4648 12.5624L12.5625 10.4648L10.4592 8.3615C10.3215 8.22375 10.158 8.11448 9.97802 8.03993C9.79806 7.96537 9.60518 7.927 9.41039 7.927C9.2156 7.927 9.02272 7.96537 8.84276 8.03993C8.6628 8.11448 8.49929 8.22375 8.36156 8.3615Z'
        fill={contentColor}
      />
      <Path d='M2.25 9H4.5' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
      <Path
        d='M4.22714 4.22705L5.81808 5.81799'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path d='M9 2.25V4.5' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
      <Path
        d='M13.7728 4.22705L12.1819 5.81799'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M5.81808 12.182L4.22714 13.7729'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}
