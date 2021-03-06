import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BatteryDeadOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BatteryDeadOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BatteryDeadOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.0609 6.75H3.59531C2.41221 6.75 1.45312 7.70909 1.45312 8.89219V15.1078C1.45312 16.2909 2.41221 17.25 3.59531 17.25H18.0609C19.244 17.25 20.2031 16.2909 20.2031 15.1078V8.89219C20.2031 7.70909 19.244 6.75 18.0609 6.75Z'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='square'
      />
      <Path
        d='M22.4531 10.2502V13.7499'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}
