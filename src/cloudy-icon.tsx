import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CloudyIconProps {
  color?: string
  size?: IconSize
}

export function CloudyIcon({ size = 'normal', color = COLOR.SECONDARY }: CloudyIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.625 20.2498H5.4375C3.92016 20.2498 2.61422 19.8481 1.65984 19.0887C0.57375 18.2239 0 16.94 0 15.3748C0 12.6762 1.96875 11.1289 4.10437 10.6522C4.24485 10.6202 4.37314 10.5484 4.47389 10.4454C4.57464 10.3424 4.64359 10.2125 4.6725 10.0714C5.0325 8.35202 5.81859 6.87686 6.97781 5.7589C8.32705 4.4618 10.1284 3.74118 12 3.74983C13.6641 3.74983 15.1987 4.2978 16.4381 5.33421C17.2853 6.04879 17.9593 6.94634 18.4092 7.95921C18.4576 8.06793 18.5312 8.16357 18.6239 8.23823C18.7165 8.3129 18.8257 8.36443 18.9422 8.38858C20.2078 8.65155 21.3361 9.20093 22.185 9.9753C23.3723 11.0567 24 12.5351 24 14.2498C24 15.9373 23.3259 17.4786 22.102 18.59C20.9231 19.6606 19.3331 20.2498 17.625 20.2498Z'
        fill={contentColor}
      />
    </Svg>
  )
}
