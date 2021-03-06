import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ResizeIconProps {
  color?: string
  size?: IconSize
}

export function ResizeIcon({ size = 'normal', color = COLOR.SECONDARY }: ResizeIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.5 4.5C13.5 4.08579 13.8358 3.75 14.25 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V9.75C20.25 10.1642 19.9142 10.5 19.5 10.5C19.0858 10.5 18.75 10.1642 18.75 9.75V5.25H14.25C13.8358 5.25 13.5 4.91421 13.5 4.5Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.5507 4.44851C19.8436 4.74139 19.8437 5.21626 19.5508 5.50917L5.77938 19.282C5.4865 19.5749 5.01163 19.5749 4.71872 19.282C4.42581 18.9892 4.42579 18.5143 4.71867 18.2214L18.4901 4.44856C18.7829 4.15566 19.2578 4.15563 19.5507 4.44851Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.5 13.5C4.91421 13.5 5.25 13.8358 5.25 14.25V18.75H9.75C10.1642 18.75 10.5 19.0858 10.5 19.5C10.5 19.9142 10.1642 20.25 9.75 20.25H4.5C4.08579 20.25 3.75 19.9142 3.75 19.5V14.25C3.75 13.8358 4.08579 13.5 4.5 13.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
