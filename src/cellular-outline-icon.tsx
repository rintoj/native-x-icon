import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CellularOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CellularOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CellularOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.125 4.5H19.875C19.6679 4.5 19.5 4.66789 19.5 4.875V19.125C19.5 19.3321 19.6679 19.5 19.875 19.5H22.125C22.3321 19.5 22.5 19.3321 22.5 19.125V4.875C22.5 4.66789 22.3321 4.5 22.125 4.5Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M16.125 8.25H13.875C13.6679 8.25 13.5 8.41789 13.5 8.625V19.125C13.5 19.3321 13.6679 19.5 13.875 19.5H16.125C16.3321 19.5 16.5 19.3321 16.5 19.125V8.625C16.5 8.41789 16.3321 8.25 16.125 8.25Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M10.125 11.25H7.875C7.66789 11.25 7.5 11.4179 7.5 11.625V19.125C7.5 19.3321 7.66789 19.5 7.875 19.5H10.125C10.3321 19.5 10.5 19.3321 10.5 19.125V11.625C10.5 11.4179 10.3321 11.25 10.125 11.25Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M4.125 14.25H1.875C1.66789 14.25 1.5 14.4179 1.5 14.625V19.125C1.5 19.3321 1.66789 19.5 1.875 19.5H4.125C4.33211 19.5 4.5 19.3321 4.5 19.125V14.625C4.5 14.4179 4.33211 14.25 4.125 14.25Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
    </Svg>
  )
}
