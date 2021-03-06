import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface EyedropOutlineIconProps {
  color?: string
  size?: IconSize
}

export function EyedropOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: EyedropOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.3052 9.57312L3.28125 18.5952C2.69813 19.1792 2.25 21.7503 2.25 21.7503C2.25 21.7503 4.79906 21.3242 5.40516 20.7191L14.4281 11.6961'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M17.6113 10.6336L13.3657 6.38795C12.7794 5.80161 11.8288 5.80154 11.2426 6.38778C10.6563 6.97402 10.6564 7.92459 11.2428 8.51092L15.4884 12.7565C16.0747 13.3429 17.0253 13.3429 17.6115 12.7567C18.1978 12.1705 18.1977 11.2199 17.6113 10.6336Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M13.5894 6.60956C13.5894 6.60956 14.5536 7.01128 15.334 6.23081L17.8967 2.92003C18.7639 2.01019 20.2058 2.04394 21.0814 2.92003C21.957 3.79566 21.9879 5.208 21.0814 6.10425L17.7683 8.66691C17.0347 9.4005 17.3895 10.4116 17.3895 10.4116'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M5.40505 20.7184C5.40505 20.7184 4.1638 21.5312 3.3163 20.6842C2.4688 19.8371 3.28114 18.5945 3.28114 18.5945'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
