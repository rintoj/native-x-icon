import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GitPullRequestOutlineIconProps {
  color?: string
  size?: IconSize
}

export function GitPullRequestOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: GitPullRequestOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M6 21.75C7.24264 21.75 8.25 20.7426 8.25 19.5C8.25 18.2574 7.24264 17.25 6 17.25C4.75736 17.25 3.75 18.2574 3.75 19.5C3.75 20.7426 4.75736 21.75 6 21.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M6 6.75V17.25' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M13.5 7.5L10.5 4.5L13.5 1.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6 6.75C7.24264 6.75 8.25 5.74264 8.25 4.5C8.25 3.25736 7.24264 2.25 6 2.25C4.75736 2.25 3.75 3.25736 3.75 4.5C3.75 5.74264 4.75736 6.75 6 6.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18 21.75C19.2426 21.75 20.25 20.7426 20.25 19.5C20.25 18.2574 19.2426 17.25 18 17.25C16.7574 17.25 15.75 18.2574 15.75 19.5C15.75 20.7426 16.7574 21.75 18 21.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M11.25 4.5H15.1875C15.9334 4.5 16.6488 4.79632 17.1762 5.32376C17.7037 5.85121 18 6.56658 18 7.3125V17.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
