import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoDeviantartIconProps {
  color?: string
  size?: IconSize
}

export function LogoDeviantartIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoDeviantartIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.125 4.84125V0.75H19.1236H14.9386L14.5214 1.16156L12.5456 4.84031L11.9245 5.25H4.875V10.868H8.75062L9.09562 11.2762L4.875 19.1588V23.25H4.87594H9.06094L9.47859 22.838L11.4539 19.1592L12.0755 18.75H19.125V13.1311H15.2494L14.9044 12.7209L19.125 4.84125Z'
        fill={contentColor}
      />
    </Svg>
  )
}
