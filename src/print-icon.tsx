import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PrintIconProps {
  color?: string
  size?: IconSize
}

export function PrintIcon({ size = 'normal', color = COLOR.SECONDARY }: PrintIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.125 5.25H4.96875C4.24769 5.25 3.55617 5.53644 3.0463 6.0463C2.53644 6.55617 2.25 7.24769 2.25 7.96875V15.375C2.25 16.0712 2.52656 16.7389 3.01884 17.2312C3.51113 17.7234 4.17881 18 4.875 18H5.25V19.86C5.25 20.3613 5.44912 20.842 5.80357 21.1964C6.15801 21.5509 6.63874 21.75 7.14 21.75H16.86C17.3613 21.75 17.842 21.5509 18.1964 21.1964C18.5509 20.842 18.75 20.3613 18.75 19.86V18H19.125C19.8212 18 20.4889 17.7234 20.9812 17.2312C21.4734 16.7389 21.75 16.0712 21.75 15.375V7.875C21.75 7.17881 21.4734 6.51113 20.9812 6.01884C20.4889 5.52656 19.8212 5.25 19.125 5.25ZM17.25 19.86C17.2496 19.9633 17.2084 20.0623 17.1354 20.1354C17.0623 20.2084 16.9633 20.2496 16.86 20.25H7.14C7.03668 20.2496 6.9377 20.2084 6.86464 20.1354C6.79158 20.0623 6.75037 19.9633 6.75 19.86V12.39C6.75037 12.2867 6.79158 12.1877 6.86464 12.1146C6.9377 12.0416 7.03668 12.0004 7.14 12H16.86C16.9633 12.0004 17.0623 12.0416 17.1354 12.1146C17.2084 12.1877 17.2496 12.2867 17.25 12.39V19.86ZM18.4688 9.74625C18.2393 9.76469 18.0097 9.7123 17.811 9.59615C17.6122 9.48 17.4539 9.30568 17.3573 9.09671C17.2608 8.88774 17.2307 8.65418 17.2711 8.42756C17.3114 8.20093 17.4204 7.99214 17.5831 7.82937C17.7459 7.6666 17.9547 7.55768 18.1813 7.5173C18.4079 7.47693 18.6415 7.50705 18.8505 7.6036C19.0594 7.70014 19.2338 7.85847 19.3499 8.05721C19.4661 8.25596 19.5184 8.48555 19.5 8.715C19.4786 8.98136 19.3631 9.23141 19.1741 9.42036C18.9852 9.60932 18.7351 9.72484 18.4688 9.74625Z'
        fill={contentColor}
      />
      <Path
        d='M16.1249 2.25H7.87491C7.24398 2.25094 6.63442 2.47873 6.1575 2.8918C5.68058 3.30487 5.3681 3.87566 5.2771 4.5H18.7227C18.6317 3.87566 18.3192 3.30487 17.8423 2.8918C17.3654 2.47873 16.7558 2.25094 16.1249 2.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}