import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SnowOutlineIconProps {
  color?: string
  size?: IconSize
}

export function SnowOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SnowOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path d='M12 1.5V22.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M14.7056 3.75C13.889 4.24216 12.9533 4.50152 11.9999 4.5C11.0465 4.50152 10.1109 4.24216 9.29431 3.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M9.29431 20.2497C10.1115 19.7589 11.0467 19.4996 11.9999 19.4996C12.9531 19.4996 13.8884 19.7589 14.7056 20.2497'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21.0933 6.75L2.90674 17.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M20.4971 10.2188C19.6634 9.75637 18.9711 9.07584 18.4946 8.25009C18.018 7.42434 17.7752 6.48449 17.792 5.53125'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M3.50293 13.7812C4.33669 14.2436 5.02892 14.9242 5.50547 15.7499C5.98201 16.5757 6.22489 17.5155 6.20809 18.4688'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M2.90674 6.75L21.0933 17.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M3.50293 10.2188C4.33669 9.75637 5.02892 9.07584 5.50547 8.25009C5.98201 7.42434 6.22489 6.48449 6.20809 5.53125'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M20.4971 13.7812C19.6634 14.2436 18.9711 14.9242 18.4946 15.7499C18.018 16.5757 17.7752 17.5155 17.792 18.4688'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
