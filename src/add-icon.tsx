import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface AddIconProps {
  color?: string
  size?: IconSize
}

export function AddIcon({ size = 'normal', color = COLOR.SECONDARY }: AddIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 4.5C12.4142 4.5 12.75 4.83579 12.75 5.25V18.75C12.75 19.1642 12.4142 19.5 12 19.5C11.5858 19.5 11.25 19.1642 11.25 18.75V5.25C11.25 4.83579 11.5858 4.5 12 4.5Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.5 12C4.5 11.5858 4.83579 11.25 5.25 11.25H18.75C19.1642 11.25 19.5 11.5858 19.5 12C19.5 12.4142 19.1642 12.75 18.75 12.75H5.25C4.83579 12.75 4.5 12.4142 4.5 12Z'
        fill={contentColor}
      />
    </Svg>
  )
}
