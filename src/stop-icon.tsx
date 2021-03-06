import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface StopIconProps {
  color?: string
  size?: IconSize
}

export function StopIcon({ size = 'normal', color = COLOR.SECONDARY }: StopIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.375 20.25H5.625C5.12772 20.25 4.65081 20.0525 4.29917 19.7008C3.94754 19.3492 3.75 18.8723 3.75 18.375V5.625C3.75 5.12772 3.94754 4.65081 4.29917 4.29917C4.65081 3.94754 5.12772 3.75 5.625 3.75H18.375C18.8723 3.75 19.3492 3.94754 19.7008 4.29917C20.0525 4.65081 20.25 5.12772 20.25 5.625V18.375C20.25 18.8723 20.0525 19.3492 19.7008 19.7008C19.3492 20.0525 18.8723 20.25 18.375 20.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
