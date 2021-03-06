import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface WaterOutlineIconProps {
  color?: string
  size?: IconSize
}

export function WaterOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: WaterOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.75 14.9991C18.75 19.1415 16.1423 21.7491 12 21.7491C7.85766 21.7491 5.25 19.1415 5.25 14.9991C5.25 10.554 10.0889 4.55303 11.573 2.81725C11.6258 2.75558 11.6913 2.70607 11.7651 2.67213C11.8388 2.63818 11.919 2.62061 12.0002 2.62061C12.0814 2.62061 12.1617 2.63818 12.2354 2.67213C12.3092 2.70607 12.3747 2.75558 12.4275 2.81725C13.9111 4.55303 18.75 10.554 18.75 14.9991Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M16.125 15.375C16.125 16.2701 15.7694 17.1285 15.1365 17.7615C14.5035 18.3944 13.6451 18.75 12.75 18.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
