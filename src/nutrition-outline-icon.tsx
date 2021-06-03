import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface NutritionOutlineIconProps {
  color?: string
  size?: IconSize
}

export function NutritionOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: NutritionOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.5 6.00004C14.9878 5.86457 13.5 6.75004 12 6.75004C10.5 6.75004 9.01172 5.85942 7.5 6.00004C4.5 6.28129 3 9.00004 3 13.5C3 17.25 6 22.5 8.2125 22.5C10.425 22.5 10.6472 21.375 12 21.375C13.3528 21.375 13.5745 22.5 15.7875 22.5C18.0005 22.5 21 17.25 21 13.5C21 9.00004 19.6406 6.28129 16.5 6.00004Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M15.1837 3.89682C14.1994 4.8812 13.0434 5.16245 12.4265 5.24636C12.3701 5.25449 12.3126 5.24965 12.2584 5.23223C12.2041 5.21481 12.1546 5.18525 12.1134 5.1458C12.0723 5.10635 12.0407 5.05805 12.0211 5.00457C12.0014 4.95109 11.9942 4.89383 12 4.83714C12.1112 3.78271 12.5853 2.79966 13.3411 2.05604C14.3723 1.02479 15.4973 0.795106 16.0936 0.750575C16.1493 0.745496 16.2053 0.752924 16.2578 0.772316C16.3102 0.791708 16.3576 0.822573 16.3966 0.862654C16.4355 0.902734 16.465 0.951017 16.4829 1.00397C16.5008 1.05692 16.5067 1.1132 16.5 1.1687C16.3823 2.20073 15.9183 3.16242 15.1837 3.89682Z'
        fill={contentColor}
      />
      <Path
        d='M10.125 16.5C10.7463 16.5 11.25 15.4926 11.25 14.25C11.25 13.0074 10.7463 12 10.125 12C9.50368 12 9 13.0074 9 14.25C9 15.4926 9.50368 16.5 10.125 16.5Z'
        fill={contentColor}
      />
      <Path
        d='M13.875 16.5C14.4963 16.5 15 15.4926 15 14.25C15 13.0074 14.4963 12 13.875 12C13.2537 12 12.75 13.0074 12.75 14.25C12.75 15.4926 13.2537 16.5 13.875 16.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
