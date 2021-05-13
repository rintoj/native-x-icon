import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface VideocamOffOutlineIconProps {
  color?: string
  size?: IconSize
}

export function VideocamOffOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: VideocamOffOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.5683 14.4732L21.4453 17.2022C21.5595 17.253 21.6846 17.2744 21.8091 17.2646C21.9337 17.2547 22.0539 17.2139 22.1586 17.1458C22.2634 17.0777 22.3495 16.9845 22.4092 16.8747C22.4688 16.7649 22.5 16.6419 22.5 16.5169V7.48131C22.5 7.35635 22.4688 7.23336 22.4092 7.12354C22.3495 7.01371 22.2634 6.92051 22.1586 6.85243C22.0539 6.78434 21.9337 6.74351 21.8091 6.73366C21.6846 6.7238 21.5595 6.74523 21.4453 6.796L17.5683 9.52506C17.47 9.59427 17.3897 9.68609 17.3343 9.7928C17.279 9.8995 17.25 10.018 17.25 10.1382V13.8601C17.25 13.9803 17.279 14.0987 17.3343 14.2054C17.3897 14.3121 17.47 14.404 17.5683 14.4732Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M2.35266 6.58887C2.08558 6.81717 1.87109 7.10058 1.72391 7.41963C1.57673 7.73867 1.50034 8.08579 1.5 8.43715V15.5621C1.50186 16.208 1.75926 16.827 2.21598 17.2837C2.67269 17.7404 3.29161 17.9978 3.9375 17.9996H12.5625C12.919 18 13.2711 17.9216 13.5938 17.77'
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <Path
        d='M9.75 6H12.585C13.2249 6.00198 13.838 6.25705 14.2905 6.70952C14.743 7.16199 14.998 7.77511 15 8.415V11.625'
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <Path
        d='M19.5 19.5L3.75 3.75'
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
    </Svg>
  )
}
