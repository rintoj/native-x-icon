import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BatteryDeadIconProps {
  color?: string
  size?: IconSize
}

export function BatteryDeadIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BatteryDeadIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.59531 7.5C2.82643 7.5 2.20312 8.1233 2.20312 8.89219V15.1078C2.20312 15.8767 2.82643 16.5 3.59531 16.5H18.0609C18.8298 16.5 19.4531 15.8767 19.4531 15.1078V8.89219C19.4531 8.1233 18.8298 7.5 18.0609 7.5H3.59531ZM0.703125 8.89219C0.703125 7.29488 1.998 6 3.59531 6H18.0609C19.6582 6 20.9531 7.29488 20.9531 8.89219V15.1078C20.9531 16.7051 19.6582 18 18.0609 18H3.59531C1.998 18 0.703125 16.7051 0.703125 15.1078V8.89219Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.4531 9.50024C22.8673 9.50024 23.2031 9.83603 23.2031 10.2502V13.7499C23.2031 14.1642 22.8673 14.4999 22.4531 14.4999C22.0389 14.4999 21.7031 14.1642 21.7031 13.7499V10.2502C21.7031 9.83603 22.0389 9.50024 22.4531 9.50024Z'
        fill={contentColor}
      />
    </Svg>
  )
}
