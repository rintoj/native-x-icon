import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BatteryHalfIconProps {
  color?: string
  size?: IconSize
}

export function BatteryHalfIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BatteryHalfIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.64219 7.5C2.8733 7.5 2.25 8.1233 2.25 8.89219V15.1078C2.25 15.8767 2.8733 16.5 3.64219 16.5H18.1078C18.8767 16.5 19.5 15.8767 19.5 15.1078V8.89219C19.5 8.1233 18.8767 7.5 18.1078 7.5H3.64219ZM0.75 8.89219C0.75 7.29488 2.04488 6 3.64219 6H18.1078C19.7051 6 21 7.29488 21 8.89219V15.1078C21 16.7051 19.7051 18 18.1078 18H3.64219C2.04488 18 0.75 16.7051 0.75 15.1078V8.89219Z'
        fill={contentColor}
      />
      <Path
        d='M11.0626 9.32468H4.20428C4.10073 9.32468 4.01678 9.40862 4.01678 9.51218V14.487C4.01678 14.5906 4.10073 14.6745 4.20428 14.6745H11.0626C11.1661 14.6745 11.2501 14.5906 11.2501 14.487V9.51218C11.2501 9.40862 11.1661 9.32468 11.0626 9.32468Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.76678 10.0747V13.9245H10.5001V10.0747H4.76678ZM3.26678 9.51218C3.26678 8.99441 3.68652 8.57468 4.20428 8.57468H11.0626C11.5803 8.57468 12.0001 8.99441 12.0001 9.51218V14.487C12.0001 15.0048 11.5803 15.4245 11.0626 15.4245H4.20428C3.68652 15.4245 3.26678 15.0048 3.26678 14.487V9.51218Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.5 9.50024C22.9142 9.50024 23.25 9.83603 23.25 10.2502V13.7499C23.25 14.1642 22.9142 14.4999 22.5 14.4999C22.0858 14.4999 21.75 14.1642 21.75 13.7499V10.2502C21.75 9.83603 22.0858 9.50024 22.5 9.50024Z'
        fill={contentColor}
      />
    </Svg>
  )
}
