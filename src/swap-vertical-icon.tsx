import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SwapVerticalIconProps {
  color?: string
  size?: IconSize
}

export function SwapVerticalIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SwapVerticalIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.9697 3.96967C16.2626 3.67678 16.7374 3.67678 17.0303 3.96967L22.2803 9.21967C22.5732 9.51256 22.5732 9.98744 22.2803 10.2803C21.9874 10.5732 21.5126 10.5732 21.2197 10.2803L16.5 5.56066L11.7803 10.2803C11.4874 10.5732 11.0126 10.5732 10.7197 10.2803C10.4268 9.98744 10.4268 9.51256 10.7197 9.21967L15.9697 3.96967Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.5 4.55215C16.9142 4.55215 17.25 4.88794 17.25 5.30215V19.4992C17.25 19.9134 16.9142 20.2492 16.5 20.2492C16.0858 20.2492 15.75 19.9134 15.75 19.4992V5.30215C15.75 4.88794 16.0858 4.55215 16.5 4.55215Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.71967 13.7197C2.01256 13.4268 2.48744 13.4268 2.78033 13.7197L7.5 18.4393L12.2197 13.7197C12.5126 13.4268 12.9874 13.4268 13.2803 13.7197C13.5732 14.0126 13.5732 14.4874 13.2803 14.7803L8.03033 20.0303C7.73744 20.3232 7.26256 20.3232 6.96967 20.0303L1.71967 14.7803C1.42678 14.4874 1.42678 14.0126 1.71967 13.7197Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.5 3.75C7.91421 3.75 8.25 4.08579 8.25 4.5V18.6562C8.25 19.0705 7.91421 19.4062 7.5 19.4062C7.08579 19.4062 6.75 19.0705 6.75 18.6562V4.5C6.75 4.08579 7.08579 3.75 7.5 3.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
