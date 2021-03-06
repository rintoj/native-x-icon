import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HeartHalfOutlineIconProps {
  color?: string
  size?: IconSize
}

export function HeartHalfOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: HeartHalfOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.5432 3C14.2889 3 12.7932 4.38469 12 5.39062C11.2088 4.38328 9.71113 3 7.45691 3C4.61534 3 2.27956 5.36906 2.25003 8.28047C2.22472 10.8216 3.12331 13.1681 4.99738 15.4523C5.87722 16.5248 7.47238 18.2395 11.1563 20.7403C11.4047 20.9106 11.6989 21.0017 12 21.0017C12.3012 21.0017 12.5953 20.9106 12.8438 20.7403C16.5277 18.2395 18.1228 16.5248 19.0027 15.4523C20.8777 13.1677 21.7753 10.8211 21.75 8.28047C21.7205 5.36906 19.3847 3 16.5432 3ZM12 19.5V9.73031C12 8.81016 12.2452 7.91344 12.6661 7.095C12.6672 7.09241 12.6684 7.0899 12.6699 7.0875C12.9429 6.59456 13.2867 6.1443 13.6903 5.75109C14.5402 4.92188 15.4997 4.5 16.5432 4.5C18.5658 4.5 20.2285 6.2025 20.2496 8.29688C20.2969 13.2005 16.1077 16.7114 12 19.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
