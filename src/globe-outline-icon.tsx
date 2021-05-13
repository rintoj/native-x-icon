import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GlobeOutlineIconProps {
  color?: string
  size?: IconSize
}

export function GlobeOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: GlobeOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2.25C6.61547 2.25 2.25 6.61547 2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12C21.75 6.61547 17.3845 2.25 12 2.25Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
      <Path
        d='M12 2.25C9.27797 2.25 6.71859 6.61547 6.71859 12C6.71859 17.3845 9.27797 21.75 12 21.75C14.722 21.75 17.2814 17.3845 17.2814 12C17.2814 6.61547 14.722 2.25 12 2.25Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
      <Path
        d='M5.49984 5.49976C7.29234 6.77241 9.5489 7.53132 12 7.53132C14.4511 7.53132 16.7076 6.77241 18.5001 5.49976'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M18.5001 18.5001C16.7076 17.2274 14.4511 16.4685 12 16.4685C9.5489 16.4685 7.29234 17.2274 5.49984 18.5001'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path d='M12 2.25V21.75' stroke={contentColor} stroke-miterlimit='10' />
      <Path d='M21.75 12H2.25' stroke={contentColor} stroke-miterlimit='10' />
    </Svg>
  )
}
