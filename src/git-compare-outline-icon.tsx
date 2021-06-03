import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GitCompareOutlineIconProps {
  color?: string
  size?: IconSize
}

export function GitCompareOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: GitCompareOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M14.25 7.5L11.25 4.5L14.25 1.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M9.70312 16.5L12.7031 19.5L9.70312 22.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M5.25 6.75C6.49264 6.75 7.5 5.74264 7.5 4.5C7.5 3.25736 6.49264 2.25 5.25 2.25C4.00736 2.25 3 3.25736 3 4.5C3 5.74264 4.00736 6.75 5.25 6.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18.75 21.75C19.9926 21.75 21 20.7426 21 19.5C21 18.2574 19.9926 17.25 18.75 17.25C17.5074 17.25 16.5 18.2574 16.5 19.5C16.5 20.7426 17.5074 21.75 18.75 21.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 4.5H15.9375C16.6834 4.5 17.3988 4.79632 17.9262 5.32376C18.4537 5.85121 18.75 6.56658 18.75 7.3125V17.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M11.9531 19.5H8.01562C7.2697 19.5 6.55433 19.2037 6.02689 18.6762C5.49944 18.1488 5.20312 17.4334 5.20312 16.6875V6.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
