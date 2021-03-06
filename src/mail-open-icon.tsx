import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MailOpenIconProps {
  color?: string
  size?: IconSize
}

export function MailOpenIcon({ size = 'normal', color = COLOR.SECONDARY }: MailOpenIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.0314 7.23973L12.8484 3.19676C12.5844 3.06723 12.2941 2.99988 12 2.99988C11.7059 2.99988 11.4156 3.06723 11.1516 3.19676L2.9686 7.23973C2.52797 7.45351 2.15649 7.78711 1.89675 8.20231C1.637 8.6175 1.4995 9.09748 1.5 9.58723V18.2408C1.5 19.6883 2.69156 20.8658 4.15641 20.8658H19.8436C21.3084 20.8658 22.5 19.6883 22.5 18.2408V9.58723C22.5005 9.09748 22.363 8.6175 22.1033 8.20231C21.8435 7.78711 21.472 7.45351 21.0314 7.23973ZM11.8303 4.53832C11.8831 4.51242 11.9412 4.49895 12 4.49895C12.0588 4.49895 12.1169 4.51242 12.1697 4.53832L20.1094 8.45988L12.0469 12.4443C11.9941 12.4702 11.936 12.4836 11.8772 12.4836C11.8184 12.4836 11.7603 12.4702 11.7075 12.4443L3.76641 8.52223L11.8303 4.53832Z'
        fill={contentColor}
      />
    </Svg>
  )
}
