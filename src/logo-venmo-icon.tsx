import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoVenmoIconProps {
  color?: string
  size?: IconSize
}

export function LogoVenmoIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoVenmoIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.8205 1.5H3.29437C2.33672 1.5 1.5 2.18906 1.5 3.13547V20.7C1.5 21.652 2.33672 22.5 3.29437 22.5H20.8153C21.7781 22.5 22.5 21.6469 22.5 20.7005V3.13547C22.5056 2.18906 21.7781 1.5 20.8205 1.5ZM13.0312 18.1406H8.17125L6.22266 6.48938L10.4766 6.08531L11.5078 14.3761C12.4702 12.8081 13.6584 10.3448 13.6584 8.66344C13.6584 7.74375 13.5009 7.11656 13.2548 6.60094L17.1281 5.81719C17.5763 6.55687 17.7778 7.31719 17.7778 8.28141C17.7773 11.3517 15.1566 15.3403 13.0312 18.1406Z'
        fill={contentColor}
      />
    </Svg>
  )
}
