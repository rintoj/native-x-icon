import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MailOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MailOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: MailOutlineIconProps) {
  const { getColor } = useTheme()
  const fillColor = getColor?.(color)
  const iconSize = getIconSize(size)

  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 18 18' fill='none'>
      <Path
        d='M14.906 3.375H3.094c-.777 0-1.406.63-1.406 1.406v8.438c0 .776.63 1.406 1.406 1.406h11.812c.777 0 1.406-.63 1.406-1.406V4.78c0-.776-.63-1.406-1.406-1.406z'
        stroke={fillColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M3.938 5.625L9 9.563l5.063-3.938'
        stroke={fillColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
