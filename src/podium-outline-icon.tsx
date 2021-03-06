import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PodiumOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PodiumOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PodiumOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M1.5 7.5V21.375C1.5 21.4745 1.53951 21.5698 1.60984 21.6402C1.68016 21.7105 1.77554 21.75 1.875 21.75H8.25V7.5C8.25 7.30109 8.17098 7.11032 8.03033 6.96967C7.88968 6.82902 7.69891 6.75 7.5 6.75H2.25C2.05109 6.75 1.86032 6.82902 1.71967 6.96967C1.57902 7.11032 1.5 7.30109 1.5 7.5V7.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15 2.25H9C8.80109 2.25 8.61032 2.32902 8.46967 2.46967C8.32902 2.61032 8.25 2.80109 8.25 3V21.75H15.75V3C15.75 2.80109 15.671 2.61032 15.5303 2.46967C15.3897 2.32902 15.1989 2.25 15 2.25V2.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21.75 9.75H16.5C16.3011 9.75 16.1103 9.82902 15.9697 9.96967C15.829 10.1103 15.75 10.3011 15.75 10.5V21.75H22.125C22.2245 21.75 22.3198 21.7105 22.3902 21.6402C22.4605 21.5698 22.5 21.4745 22.5 21.375V10.5C22.5 10.3011 22.421 10.1103 22.2803 9.96967C22.1397 9.82902 21.9489 9.75 21.75 9.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
