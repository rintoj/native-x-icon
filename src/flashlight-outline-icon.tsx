import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FlashlightOutlineIconProps {
  color?: string
  size?: IconSize
}

export function FlashlightOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: FlashlightOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.4049 7.63457L16.3649 2.59551C15.7485 1.97957 15.0206 2.25942 14.4046 2.87676L13.8445 3.43926C12.6196 4.66411 12.5498 6.17582 12.4654 7.34442C12.4237 7.91817 12.007 8.63582 11.5978 9.04504L2.74588 17.8913C1.97947 18.6568 2.15103 19.7391 2.92072 20.5088L3.49119 21.0793C4.25806 21.8457 5.33947 22.0243 6.10963 21.2546L14.961 12.4046C15.3707 11.9949 16.086 11.5819 16.6621 11.5364C17.8279 11.4493 19.4099 11.3091 20.5649 10.1541L21.1246 9.59442C21.741 8.97848 22.0209 8.25051 21.4049 7.63457Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
      <Path
        d='M10.5319 14.4034C11.0497 14.4034 11.4694 13.9837 11.4694 13.4659C11.4694 12.9482 11.0497 12.5284 10.5319 12.5284C10.0142 12.5284 9.59442 12.9482 9.59442 13.4659C9.59442 13.9837 10.0142 14.4034 10.5319 14.4034Z'
        fill={contentColor}
      />
      <Path
        d='M13.5469 3.79688L20.2031 10.4531'
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
    </Svg>
  )
}
