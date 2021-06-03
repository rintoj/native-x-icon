import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BarChartOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BarChartOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BarChartOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M1.5 1.5V21.75C1.5 21.9489 1.57902 22.1397 1.71967 22.2803C1.86032 22.421 2.05109 22.5 2.25 22.5H22.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.3125 10.5H5.4375C4.91973 10.5 4.5 10.9197 4.5 11.4375V18.5625C4.5 19.0803 4.91973 19.5 5.4375 19.5H7.3125C7.83027 19.5 8.25 19.0803 8.25 18.5625V11.4375C8.25 10.9197 7.83027 10.5 7.3125 10.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M14.0625 8.25H12.1875C11.6697 8.25 11.25 8.66973 11.25 9.1875V18.5625C11.25 19.0803 11.6697 19.5 12.1875 19.5H14.0625C14.5803 19.5 15 19.0803 15 18.5625V9.1875C15 8.66973 14.5803 8.25 14.0625 8.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M20.7955 5.25H18.9205C18.4028 5.25 17.983 5.66973 17.983 6.1875V18.5625C17.983 19.0803 18.4028 19.5 18.9205 19.5H20.7955C21.3133 19.5 21.733 19.0803 21.733 18.5625V6.1875C21.733 5.66973 21.3133 5.25 20.7955 5.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
