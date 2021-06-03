import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LeafOutlineIconProps {
  color?: string
  size?: IconSize
}

export function LeafOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LeafOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.0886 8.03568C10.9219 5.34411 6.60942 7.2763 2.62505 3.05755C1.69692 2.07318 2.23598 14.0966 7.22349 18.6529C10.8699 21.981 16.5 21.6097 18.3985 18.3754C20.2969 15.141 19.2554 10.7268 15.0886 8.03568Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8.10938 11.8594C12.1406 15.6562 16.3125 17.9062 21.7969 18.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
