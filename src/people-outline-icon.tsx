import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PeopleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PeopleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PeopleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.8437 7.875C18.7064 9.78141 17.2922 11.25 15.75 11.25C14.2078 11.25 12.7912 9.78188 12.6562 7.875C12.5156 5.89172 13.8923 4.5 15.75 4.5C17.6076 4.5 18.9844 5.92781 18.8437 7.875Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.7501 14.25C12.6952 14.25 9.75756 15.7673 9.02162 18.7223C8.92412 19.1133 9.16928 19.5 9.571 19.5H21.9296C22.3313 19.5 22.5751 19.1133 22.479 18.7223C21.743 15.72 18.8054 14.25 15.7501 14.25Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M9.37495 8.71594C9.26527 10.2384 8.12245 11.4375 6.89058 11.4375C5.65871 11.4375 4.51402 10.2389 4.40621 8.71594C4.29418 7.13203 5.40652 6 6.89058 6C8.37464 6 9.48698 7.16109 9.37495 8.71594Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M9.65622 14.3439C8.81013 13.9563 7.87825 13.8072 6.8906 13.8072C4.4531 13.8072 2.10466 15.0189 1.51638 17.3791C1.43903 17.6913 1.63497 18.0002 1.9556 18.0002H7.21872'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}
