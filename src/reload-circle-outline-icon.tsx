import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReloadCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ReloadCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ReloadCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M16.0097 9.27373L15.4767 8.65357C14.7478 7.89045 13.7898 7.38613 12.7481 7.21725C11.7065 7.04836 10.6382 7.22415 9.70553 7.71789C8.7729 8.21164 8.02696 8.99635 7.58105 9.95277C7.13514 10.9092 7.01365 11.985 7.23503 13.0168C7.45642 14.0486 8.00858 14.9799 8.80761 15.6692C9.60664 16.3585 10.6088 16.7681 11.6619 16.8358C12.715 16.9034 13.7614 16.6255 14.6421 16.0441C15.5228 15.4627 16.1896 14.6098 16.5412 13.6148'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M17.2182 7.59299C17.1657 7.59321 17.1139 7.60385 17.0656 7.62429C17.0173 7.64473 16.9736 7.67456 16.9369 7.71205L14.146 10.503C14.0893 10.5594 14.0507 10.6314 14.0351 10.7098C14.0194 10.7882 14.0273 10.8694 14.0579 10.9433C14.0885 11.0172 14.1403 11.0803 14.2068 11.1247C14.2733 11.169 14.3515 11.1926 14.4315 11.1925H17.2224C17.3295 11.1925 17.4323 11.1499 17.5081 11.0742C17.5839 10.9984 17.6264 10.8956 17.6264 10.7885V7.99659C17.6266 7.94323 17.6161 7.89038 17.5957 7.84109C17.5752 7.7918 17.5452 7.74705 17.5074 7.70943C17.4696 7.67181 17.4246 7.64206 17.3752 7.62192C17.3258 7.60177 17.2729 7.59162 17.2196 7.59205L17.2182 7.59299Z'
        fill={contentColor}
      />
    </Svg>
  )
}
