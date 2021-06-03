import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ArrowBackIconProps {
  color?: string
  size?: IconSize
}

export function ArrowBackIcon({ size = 'normal', color = COLOR.SECONDARY }: ArrowBackIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.233 4.4545C12.6723 4.89384 12.6723 5.60616 12.233 6.0455L6.27849 12L12.233 17.9545C12.6723 18.3938 12.6723 19.1062 12.233 19.5455C11.7937 19.9848 11.0813 19.9848 10.642 19.5455L3.892 12.7955C3.45267 12.3562 3.45267 11.6438 3.892 11.2045L10.642 4.4545C11.0813 4.01517 11.7937 4.01517 12.233 4.4545Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.5 12C4.5 11.3787 5.00368 10.875 5.625 10.875H19.3125C19.9338 10.875 20.4375 11.3787 20.4375 12C20.4375 12.6213 19.9338 13.125 19.3125 13.125H5.625C5.00368 13.125 4.5 12.6213 4.5 12Z'
        fill={contentColor}
      />
    </Svg>
  )
}
