import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CopyIconProps {
  color?: string
  size?: IconSize
}

export function CopyIcon({ size = 'normal', color = COLOR.SECONDARY }: CopyIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.125 22.5H8.625C7.72989 22.5 6.87145 22.1444 6.23851 21.5115C5.60558 20.8785 5.25 20.0201 5.25 19.125V8.625C5.25 7.72989 5.60558 6.87145 6.23851 6.23851C6.87145 5.60558 7.72989 5.25 8.625 5.25H19.125C20.0201 5.25 20.8785 5.60558 21.5115 6.23851C22.1444 6.87145 22.5 7.72989 22.5 8.625V19.125C22.5 20.0201 22.1444 20.8785 21.5115 21.5115C20.8785 22.1444 20.0201 22.5 19.125 22.5Z'
        fill={contentColor}
      />
      <Path
        d='M7.5 3.75H18.5569C18.3235 3.09246 17.8924 2.52322 17.3228 2.12038C16.7531 1.71755 16.0727 1.50084 15.375 1.5H4.875C3.97989 1.5 3.12145 1.85558 2.48851 2.48851C1.85558 3.12145 1.5 3.97989 1.5 4.875V15.375C1.50084 16.0727 1.71755 16.7531 2.12038 17.3228C2.52322 17.8924 3.09246 18.3235 3.75 18.5569V7.5C3.75 6.50544 4.14509 5.55161 4.84835 4.84835C5.55161 4.14509 6.50544 3.75 7.5 3.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
