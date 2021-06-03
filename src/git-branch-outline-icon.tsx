import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GitBranchOutlineIconProps {
  color?: string
  size?: IconSize
}

export function GitBranchOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: GitBranchOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M7.5 6.75C8.74264 6.75 9.75 5.74264 9.75 4.5C9.75 3.25736 8.74264 2.25 7.5 2.25C6.25736 2.25 5.25 3.25736 5.25 4.5C5.25 5.74264 6.25736 6.75 7.5 6.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.5 21.75C8.74264 21.75 9.75 20.7426 9.75 19.5C9.75 18.2574 8.74264 17.25 7.5 17.25C6.25736 17.25 5.25 18.2574 5.25 19.5C5.25 20.7426 6.25736 21.75 7.5 21.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.5 17.25V6.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M16.5 9.75C17.7426 9.75 18.75 8.74264 18.75 7.5C18.75 6.25736 17.7426 5.25 16.5 5.25C15.2574 5.25 14.25 6.25736 14.25 7.5C14.25 8.74264 15.2574 9.75 16.5 9.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M16.5 9.75C16.5 15.75 7.5 12 7.5 17.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
