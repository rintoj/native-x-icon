import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LanguageOutlineIconProps {
  color?: string
  size?: IconSize
}

export function LanguageOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LanguageOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M2.25 5.25H15.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M9 3V5.25' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M12.75 21L17.25 10.5L21.75 21'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M14.1328 18H20.3672'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M13.1859 5.25C13.1859 5.25 12.0469 9.65625 9.32812 12.9844C6.60938 16.3125 3.75 18 3.75 18'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 15.75C12 15.75 10.3594 14.4844 8.625 12.2344C6.89062 9.98438 6 8.25 6 8.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
