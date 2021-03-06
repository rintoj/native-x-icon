import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface AlarmOutlineIconProps {
  color?: string
  size?: IconSize
}

export function AlarmOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: AlarmOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.5033 12.7501C19.5033 11.2667 19.0634 9.81664 18.2393 8.58327C17.4152 7.34991 16.2438 6.38861 14.8734 5.82095C13.5029 5.2533 11.9949 5.10477 10.5401 5.39416C9.08523 5.68355 7.74886 6.39786 6.69997 7.44675C5.65107 8.49564 4.93677 9.83202 4.64738 11.2869C4.35799 12.7417 4.50652 14.2497 5.07417 15.6202C5.64183 16.9906 6.60312 18.162 7.83649 18.9861C9.06986 19.8102 10.5199 20.25 12.0033 20.25C13.9924 20.25 15.9 19.4599 17.3066 18.0534C18.7131 16.6468 19.5033 14.7392 19.5033 12.7501Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M6.66187 4.27547C6.2683 3.93868 5.76799 3.75248 5.25 3.75L5.11922 3.75375C3.92156 3.82594 2.99999 4.875 3.00327 6.14062C3.00327 6.75984 3.22171 7.04859 3.51327 7.41703C3.53139 7.44071 3.55426 7.46032 3.58042 7.47461C3.60658 7.4889 3.63544 7.49755 3.66515 7.5H3.7064C3.72963 7.49958 3.75245 7.49383 3.77309 7.48318C3.79374 7.47253 3.81166 7.45728 3.82546 7.43859L6.67406 4.64062C6.69839 4.61603 6.71739 4.58669 6.72989 4.55443C6.74239 4.52217 6.74812 4.48769 6.74672 4.45312C6.74554 4.41927 6.7374 4.38603 6.7228 4.35546C6.7082 4.3249 6.68746 4.29766 6.66187 4.27547V4.27547Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M17.3381 4.27547C17.7316 3.93868 18.232 3.75248 18.7499 3.75L18.8807 3.75375C20.0784 3.82594 20.9999 4.875 20.9967 6.14063C20.9967 6.75984 20.7782 7.04859 20.4867 7.41703C20.4685 7.44062 20.4456 7.46015 20.4195 7.47435C20.3933 7.48856 20.3645 7.49714 20.3348 7.49953H20.2935C20.2703 7.49912 20.2475 7.49336 20.2268 7.48271C20.2062 7.47207 20.1883 7.45681 20.1745 7.43812L17.3259 4.64063C17.3016 4.61603 17.2826 4.58669 17.2701 4.55443C17.2576 4.52217 17.2518 4.48769 17.2532 4.45313C17.2544 4.41927 17.2626 4.38603 17.2771 4.35546C17.2917 4.3249 17.3125 4.29767 17.3381 4.27547V4.27547Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M12.0032 7.5V12.75H8.25323'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M19.5032 20.25L17.6282 18.375'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M4.50333 20.25L6.37833 18.375'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
