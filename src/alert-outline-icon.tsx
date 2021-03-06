import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface AlertOutlineIconProps {
  color?: string
  size?: IconSize
}

export function AlertOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: AlertOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <G clipPath='url(#clip0)'>
        <Path
          d='M12 3.75C11.5941 3.75 11.2228 4.095 11.25 4.5L11.625 14.625C11.625 14.7245 11.6645 14.8198 11.7348 14.8902C11.8052 14.9605 11.9005 15 12 15C12.0995 15 12.1948 14.9605 12.2652 14.8902C12.3355 14.8198 12.375 14.7245 12.375 14.625L12.75 4.5C12.7772 4.095 12.4059 3.75 12 3.75Z'
          stroke={contentColor}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M12 20.25C12.4142 20.25 12.75 19.9142 12.75 19.5C12.75 19.0858 12.4142 18.75 12 18.75C11.5858 18.75 11.25 19.0858 11.25 19.5C11.25 19.9142 11.5858 20.25 12 20.25Z'
          stroke={contentColor}
          strokeWidth='32'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </G>
      <Defs>
        <ClipPath id='clip0'>
          <Rect width='24' height='24' fill={contentColor} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
