import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface StatsChartOutlineIconProps {
  color?: string
  size?: IconSize
}

export function StatsChartOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: StatsChartOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M4.875 15H3.375C3.16789 15 3 15.1679 3 15.375V22.125C3 22.3321 3.16789 22.5 3.375 22.5H4.875C5.08211 22.5 5.25 22.3321 5.25 22.125V15.375C5.25 15.1679 5.08211 15 4.875 15Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.375 10.5H13.875C13.6679 10.5 13.5 10.6679 13.5 10.875V22.125C13.5 22.3321 13.6679 22.5 13.875 22.5H15.375C15.5821 22.5 15.75 22.3321 15.75 22.125V10.875C15.75 10.6679 15.5821 10.5 15.375 10.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M20.625 5.25H19.125C18.9179 5.25 18.75 5.41789 18.75 5.625V22.125C18.75 22.3321 18.9179 22.5 19.125 22.5H20.625C20.8321 22.5 21 22.3321 21 22.125V5.625C21 5.41789 20.8321 5.25 20.625 5.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M10.125 1.5H8.625C8.41789 1.5 8.25 1.66789 8.25 1.875V22.125C8.25 22.3321 8.41789 22.5 8.625 22.5H10.125C10.3321 22.5 10.5 22.3321 10.5 22.125V1.875C10.5 1.66789 10.3321 1.5 10.125 1.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
