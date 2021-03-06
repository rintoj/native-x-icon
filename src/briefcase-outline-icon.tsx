import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BriefcaseOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BriefcaseOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BriefcaseOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.25 6H3.75C2.50736 6 1.5 7.00736 1.5 8.25V18.75C1.5 19.9926 2.50736 21 3.75 21H20.25C21.4926 21 22.5 19.9926 22.5 18.75V8.25C22.5 7.00736 21.4926 6 20.25 6Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M6.75 6V4.5C6.75 4.10218 6.90804 3.72064 7.18934 3.43934C7.47064 3.15804 7.85218 3 8.25 3H15.75C16.1478 3 16.5294 3.15804 16.8107 3.43934C17.092 3.72064 17.25 4.10218 17.25 4.5V6'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M22.5 11.25H1.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15 11.25V12.375C15 12.4745 14.9605 12.5698 14.8902 12.6402C14.8198 12.7105 14.7245 12.75 14.625 12.75H9.375C9.27554 12.75 9.18016 12.7105 9.10983 12.6402C9.03951 12.5698 9 12.4745 9 12.375V11.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
