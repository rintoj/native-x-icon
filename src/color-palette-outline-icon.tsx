import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ColorPaletteOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ColorPaletteOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ColorPaletteOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.1614 16.3078C19.852 16.0219 19.3974 15.9516 19.0083 15.8859C18.4692 15.7969 18.263 15.6984 17.9489 15.4172C17.2786 14.8219 17.2786 13.9594 17.9489 13.3641L19.3692 12.1031C21.5442 10.1813 21.5442 7.03125 19.3692 5.10938C17.7661 3.69844 15.6145 3 13.3786 3C10.7677 3 8.03955 3.95156 5.93486 5.81719C2.0208 9.27656 2.0208 14.9438 5.93486 18.4031C7.88017 20.1234 10.5052 20.9812 13.102 21H13.1817C15.7786 21 18.338 20.1609 20.1567 18.5438C20.8317 17.9484 20.7188 16.8281 20.1614 16.3078Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M6.75 11.25C7.57843 11.25 8.25 10.5784 8.25 9.75C8.25 8.92157 7.57843 8.25 6.75 8.25C5.92157 8.25 5.25 8.92157 5.25 9.75C5.25 10.5784 5.92157 11.25 6.75 11.25Z'
        fill={contentColor}
      />
      <Path
        d='M7.125 16.0781C7.95343 16.0781 8.625 15.4066 8.625 14.5781C8.625 13.7497 7.95343 13.0781 7.125 13.0781C6.29657 13.0781 5.625 13.7497 5.625 14.5781C5.625 15.4066 6.29657 16.0781 7.125 16.0781Z'
        fill={contentColor}
      />
      <Path
        d='M10.5 8.25C11.3284 8.25 12 7.57843 12 6.75C12 5.92157 11.3284 5.25 10.5 5.25C9.67157 5.25 9 5.92157 9 6.75C9 7.57843 9.67157 8.25 10.5 8.25Z'
        fill={contentColor}
      />
      <Path
        d='M12 19.4531C13.2426 19.4531 14.25 18.4458 14.25 17.2031C14.25 15.9605 13.2426 14.9531 12 14.9531C10.7574 14.9531 9.75 15.9605 9.75 17.2031C9.75 18.4458 10.7574 19.4531 12 19.4531Z'
        fill={contentColor}
      />
      <Path
        d='M15.375 8.25C16.2034 8.25 16.875 7.57843 16.875 6.75C16.875 5.92157 16.2034 5.25 15.375 5.25C14.5466 5.25 13.875 5.92157 13.875 6.75C13.875 7.57843 14.5466 8.25 15.375 8.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
