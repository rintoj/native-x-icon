import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SendOutlineIconProps {
  color?: string
  size?: IconSize
}

export function SendOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SendOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.0453 12.7102L2.02312 20.9677C1.9675 20.9939 1.90619 21.0056 1.84484 21.0019C1.78349 20.9982 1.72405 20.9791 1.67198 20.9465C1.61991 20.9138 1.57688 20.8686 1.54683 20.815C1.51678 20.7614 1.50068 20.7011 1.5 20.6396V15.3282C1.5 15.2408 1.53049 15.1562 1.5862 15.089C1.64191 15.0217 1.71935 14.976 1.80516 14.9597L13.4123 12.7566C14.2261 12.6024 14.2261 11.4371 13.4123 11.2829L1.80469 9.07974C1.71904 9.0634 1.64177 9.01772 1.58616 8.95056C1.53056 8.8834 1.50009 8.79897 1.5 8.71178V3.40271C1.5 3.13365 1.77562 2.92178 2.02312 3.02771L22.0453 11.3326C22.1799 11.3905 22.2946 11.4867 22.3751 11.6091C22.4557 11.7315 22.4986 11.8748 22.4986 12.0214C22.4986 12.1679 22.4557 12.3113 22.3751 12.4337C22.2946 12.5561 22.1799 12.6522 22.0453 12.7102Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
