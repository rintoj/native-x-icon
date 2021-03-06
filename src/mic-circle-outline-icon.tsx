import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MicCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MicCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: MicCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M10.5 17.25H13.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.75 10.5143V11.6355C15.75 13.4833 13.8478 14.9861 12 14.9861C10.1522 14.9861 8.25 13.4833 8.25 11.6355V10.5143'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M12 15V17.25' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M14.25 8.25C14.25 7.00736 13.2426 6 12 6C10.7574 6 9.75 7.00736 9.75 8.25V11.25C9.75 12.4926 10.7574 13.5 12 13.5C13.2426 13.5 14.25 12.4926 14.25 11.25V8.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
