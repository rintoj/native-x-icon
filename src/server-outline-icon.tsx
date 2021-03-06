import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ServerOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ServerOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ServerOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 9.75C16.9706 9.75 21 8.07107 21 6C21 3.92893 16.9706 2.25 12 2.25C7.02944 2.25 3 3.92893 3 6C3 8.07107 7.02944 9.75 12 9.75Z'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M21 10.0312C21 12.1022 16.9688 13.7812 12 13.7812C7.03125 13.7812 3 12.1022 3 10.0312'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M21 14.0625C21 16.1334 16.9688 17.8125 12 17.8125C7.03125 17.8125 3 16.1334 3 14.0625'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M3 5.96411V18.0354C3 20.0866 7.03125 21.7497 12 21.7497C16.9688 21.7497 21 20.0866 21 18.0354V5.96411'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}
