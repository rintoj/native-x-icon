import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LayersOutlineIconProps {
  color?: string
  size?: IconSize
}

export function LayersOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LayersOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.3812 6.45234L13.38 3.26016C12.621 2.91328 11.3789 2.91328 10.62 3.26016L3.62339 6.45234C2.79839 6.82734 2.79839 7.44094 3.62339 7.81594L10.5609 10.98C11.3526 11.3409 12.6557 11.3409 13.4475 10.98L20.385 7.81594C21.2062 7.44094 21.2062 6.82687 20.3812 6.45234Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.49995 14.4617L3.62339 16.2013C2.79839 16.5763 2.79839 17.1903 3.62339 17.5653L10.5609 20.7294C11.3526 21.0898 12.6557 21.0898 13.4475 20.7294L20.3849 17.5653C21.2099 17.1903 21.2099 16.5763 20.3849 16.2013L16.6378 14.398'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.5 9.58455L3.61875 11.3264C2.79375 11.7014 2.79375 12.3155 3.61875 12.6905L10.5562 15.8541C11.348 16.215 12.6511 16.215 13.4428 15.8541L20.3803 12.6905C21.21 12.3155 21.21 11.7014 20.385 11.3264L16.5 9.58455'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
