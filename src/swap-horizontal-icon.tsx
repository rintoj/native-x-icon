import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SwapHorizontalIconProps {
  color?: string
  size?: IconSize
}

export function SwapHorizontalIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SwapHorizontalIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.7197 1.71967C14.0126 1.42678 14.4874 1.42678 14.7803 1.71967L20.0303 6.96967C20.3232 7.26256 20.3232 7.73744 20.0303 8.03033L14.7803 13.2803C14.4874 13.5732 14.0126 13.5732 13.7197 13.2803C13.4268 12.9874 13.4268 12.5126 13.7197 12.2197L18.4393 7.5L13.7197 2.78033C13.4268 2.48744 13.4268 2.01256 13.7197 1.71967Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.75 7.5C3.75 7.08579 4.08579 6.75 4.5 6.75H18.697C19.1112 6.75 19.447 7.08579 19.447 7.5C19.447 7.91421 19.1112 8.25 18.697 8.25H4.5C4.08579 8.25 3.75 7.91421 3.75 7.5Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.2803 10.7197C10.5732 11.0126 10.5732 11.4874 10.2803 11.7803L5.56066 16.5L10.2803 21.2197C10.5732 21.5126 10.5732 21.9874 10.2803 22.2803C9.98744 22.5732 9.51256 22.5732 9.21967 22.2803L3.96967 17.0303C3.67678 16.7374 3.67678 16.2626 3.96967 15.9697L9.21967 10.7197C9.51256 10.4268 9.98744 10.4268 10.2803 10.7197Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.59375 16.5C4.59375 16.0858 4.92954 15.75 5.34375 15.75H19.5C19.9142 15.75 20.25 16.0858 20.25 16.5C20.25 16.9142 19.9142 17.25 19.5 17.25H5.34375C4.92954 17.25 4.59375 16.9142 4.59375 16.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
