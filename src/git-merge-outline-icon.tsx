import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GitMergeOutlineIconProps {
  color?: string
  size?: IconSize
}

export function GitMergeOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: GitMergeOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M6.04688 6.75C7.28952 6.75 8.29688 5.74264 8.29688 4.5C8.29688 3.25736 7.28952 2.25 6.04688 2.25C4.80423 2.25 3.79688 3.25736 3.79688 4.5C3.79688 5.74264 4.80423 6.75 6.04688 6.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6.04688 21.75C7.28952 21.75 8.29688 20.7426 8.29688 19.5C8.29688 18.2574 7.28952 17.25 6.04688 17.25C4.80423 17.25 3.79688 18.2574 3.79688 19.5C3.79688 20.7426 4.80423 21.75 6.04688 21.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6.04688 6.75V17.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18.0469 15.75C19.2895 15.75 20.2969 14.7426 20.2969 13.5C20.2969 12.2574 19.2895 11.25 18.0469 11.25C16.8042 11.25 15.7969 12.2574 15.7969 13.5C15.7969 14.7426 16.8042 15.75 18.0469 15.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6.04688 6.75C6.04688 11.25 11.2969 13.5 15.7969 13.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
