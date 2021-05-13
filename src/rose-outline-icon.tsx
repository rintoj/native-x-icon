import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface RoseOutlineIconProps {
  color?: string
  size?: IconSize
}

export function RoseOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: RoseOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.5 6C18.6141 6.19922 17.775 6.41906 16.9828 6.65391C15.0844 7.21641 13.4437 7.92656 12.0422 8.60625C11.1375 9.04547 10.8141 9.23953 9.62812 9.92953C6.89062 11.5088 5.25 13.5577 5.25 16.6238C5.25 20.0883 7.85625 22.5 12 22.5C16.1438 22.5 18.75 19.8839 18.75 16.4194C18.75 12.9548 15.8906 10.5581 19.5 6Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12.375 8.44641C11.452 7.18078 10.5844 6.63281 9.90469 6.2625C7.62188 5.02031 4.5 4.5 4.5 4.5C6.44531 6.54844 6.24375 8.72344 6 10.5C6 10.5 5.81859 12.0412 6.08953 13.238'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M17.4375 6.52266C16.7133 4.80937 15.75 3 15.75 3C15.75 3 12.7819 3 9.38953 6'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M11.882 4.10484C10.3712 2.14734 8.25013 1.5 8.25013 1.5C7.53294 2.475 6.9006 3.91781 6.6156 4.97672'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
