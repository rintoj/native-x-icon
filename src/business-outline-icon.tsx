import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BusinessOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BusinessOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BusinessOutlineIconProps) {
  const { getColor } = useTheme()
  const fillColor = getColor?.(color)
  const iconSize = getIconSize(size)

  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M8.25 19.5v3M3.75 1.5h9a1.5 1.5 0 011.5 1.5v19.313a.188.188 0 01-.188.187H2.25V3a1.5 1.5 0 011.5-1.5v0zM15 9h5.25a1.5 1.5 0 011.5 1.5v12h-7.5V9.75A.75.75 0 0115 9z'
        stroke={fillColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M4.597 20.244a.75.75 0 11-.194-1.487.75.75 0 01.194 1.487zM4.597 16.494a.75.75 0 11-.194-1.487.75.75 0 01.194 1.487zM4.597 12.744a.75.75 0 11-.194-1.487.75.75 0 01.194 1.487zM4.597 8.994a.75.75 0 11-.194-1.487.75.75 0 01.194 1.487zM4.597 5.244a.75.75 0 11-.194-1.487.75.75 0 01.194 1.487zM8.347 16.494a.75.75 0 11-.194-1.487.75.75 0 01.194 1.487zM8.347 12.744a.75.75 0 11-.194-1.487.75.75 0 01.194 1.487zM8.347 8.994a.75.75 0 11-.194-1.487.75.75 0 01.194 1.487zM8.347 5.244a.75.75 0 11-.194-1.487.75.75 0 01.194 1.487zM12.098 20.244a.75.75 0 11-.195-1.487.75.75 0 01.194 1.487zM12.098 16.494a.75.75 0 11-.195-1.487.75.75 0 01.194 1.487zM12.098 12.744a.75.75 0 11-.195-1.487.75.75 0 01.194 1.487zM12.531 8.78a.75.75 0 00-.002-1.06.75.75 0 00-1.06-.002.75.75 0 00.002 1.06.75.75 0 001.06.003zM12.098 5.244a.75.75 0 11-.195-1.488.75.75 0 01.194 1.488zM18.75 18.75a.75.75 0 100 1.5.75.75 0 000-1.5zM18.75 15a.75.75 0 100 1.5.75.75 0 000-1.5zM18.75 11.25a.75.75 0 100 1.5.75.75 0 000-1.5zM15.75 18.75a.75.75 0 100 1.5.75.75 0 000-1.5zM15.75 15a.75.75 0 100 1.5.75.75 0 000-1.5zM15.75 11.25a.75.75 0 100 1.5.75.75 0 000-1.5z'
        fill={fillColor}
      />
    </Svg>
  )
}
