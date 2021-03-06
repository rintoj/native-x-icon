import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface WifiOutlineIconProps {
  color?: string
  size?: IconSize
}

export function WifiOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: WifiOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.5817 14.5595C14.595 13.6825 13.3207 13.198 12.0004 13.198C10.6802 13.198 9.40594 13.6825 8.41919 14.5595'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18.4434 11.6965C16.6958 10.0624 14.3926 9.15332 12 9.15332C9.60735 9.15332 7.30413 10.0624 5.55652 11.6965'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M20.9869 8.53558C18.5135 6.32906 15.3147 5.10962 12.0001 5.10962C8.68543 5.10962 5.48664 6.32906 3.01318 8.53558'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 19.5C11.7033 19.5 11.4133 19.412 11.1666 19.2472C10.92 19.0824 10.7277 18.8481 10.6142 18.574C10.5006 18.2999 10.4709 17.9983 10.5288 17.7074C10.5867 17.4164 10.7296 17.1491 10.9393 16.9393C11.1491 16.7296 11.4164 16.5867 11.7074 16.5288C11.9983 16.4709 12.2999 16.5006 12.574 16.6142C12.8481 16.7277 13.0824 16.92 13.2472 17.1666C13.412 17.4133 13.5 17.7033 13.5 18C13.5 18.3978 13.342 18.7794 13.0607 19.0607C12.7794 19.342 12.3978 19.5 12 19.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
