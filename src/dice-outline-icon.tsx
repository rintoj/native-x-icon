import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface DiceOutlineIconProps {
  color?: string
  size?: IconSize
}

export function DiceOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: DiceOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 16.0018V7.99739C20.9997 7.73541 20.9308 7.47807 20.8001 7.25101C20.6694 7.02394 20.4815 6.83506 20.2552 6.70317L13.1302 2.55661C12.7869 2.35675 12.3968 2.25146 11.9995 2.25146C11.6023 2.25146 11.2122 2.35675 10.8689 2.55661L3.74484 6.70317C3.51848 6.83506 3.33061 7.02394 3.19993 7.25101C3.06925 7.47807 3.00032 7.73541 3 7.99739V16.0018C3.00016 16.2639 3.06901 16.5214 3.1997 16.7487C3.33038 16.9759 3.51834 17.1649 3.74484 17.2969L10.8698 21.4435C11.2132 21.6431 11.6033 21.7482 12.0005 21.7482C12.3976 21.7482 12.7877 21.6431 13.1311 21.4435L20.2561 17.2969C20.4824 17.1648 20.6702 16.9758 20.8007 16.7485C20.9312 16.5213 20.9999 16.2638 21 16.0018Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M3.23438 7.21802L12 12.3743L20.7656 7.21802'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12 21.7493V12.3743'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12 7.875C12.6213 7.875 13.125 7.53921 13.125 7.125C13.125 6.71079 12.6213 6.375 12 6.375C11.3787 6.375 10.875 6.71079 10.875 7.125C10.875 7.53921 11.3787 7.875 12 7.875Z'
        fill={contentColor}
      />
      <Path
        d='M9.75 15C10.1642 15 10.5 14.4963 10.5 13.875C10.5 13.2537 10.1642 12.75 9.75 12.75C9.33579 12.75 9 13.2537 9 13.875C9 14.4963 9.33579 15 9.75 15Z'
        fill={contentColor}
      />
      <Path
        d='M5.25 16.5C5.66421 16.5 6 15.9963 6 15.375C6 14.7537 5.66421 14.25 5.25 14.25C4.83579 14.25 4.5 14.7537 4.5 15.375C4.5 15.9963 4.83579 16.5 5.25 16.5Z'
        fill={contentColor}
      />
      <Path
        d='M14.25 15C14.6642 15 15 14.4963 15 13.875C15 13.2537 14.6642 12.75 14.25 12.75C13.8358 12.75 13.5 13.2537 13.5 13.875C13.5 14.4963 13.8358 15 14.25 15Z'
        fill={contentColor}
      />
      <Path
        d='M18.75 12.375C19.1642 12.375 19.5 11.8713 19.5 11.25C19.5 10.6287 19.1642 10.125 18.75 10.125C18.3358 10.125 18 10.6287 18 11.25C18 11.8713 18.3358 12.375 18.75 12.375Z'
        fill={contentColor}
      />
      <Path
        d='M14.25 19.125C14.6642 19.125 15 18.6213 15 18C15 17.3787 14.6642 16.875 14.25 16.875C13.8358 16.875 13.5 17.3787 13.5 18C13.5 18.6213 13.8358 19.125 14.25 19.125Z'
        fill={contentColor}
      />
      <Path
        d='M18.75 16.5C19.1642 16.5 19.5 15.9963 19.5 15.375C19.5 14.7537 19.1642 14.25 18.75 14.25C18.3358 14.25 18 14.7537 18 15.375C18 15.9963 18.3358 16.5 18.75 16.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
