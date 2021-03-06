import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ArchiveOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ArchiveOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ArchiveOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M3.75 7.125V19.125C3.75148 19.6218 3.9495 20.0979 4.30081 20.4492C4.65212 20.8005 5.12818 20.9985 5.625 21H18.375C18.8718 20.9985 19.3479 20.8005 19.6992 20.4492C20.0505 20.0979 20.2485 19.6218 20.25 19.125V7.125'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M20.4375 3H3.5625C2.83763 3 2.25 3.58763 2.25 4.3125V5.4375C2.25 6.16237 2.83763 6.75 3.5625 6.75H20.4375C21.1624 6.75 21.75 6.16237 21.75 5.4375V4.3125C21.75 3.58763 21.1624 3 20.4375 3Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M15 14.25L12 17.25L9 14.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 16.2136V10.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
