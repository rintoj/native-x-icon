import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TvIconProps {
  color?: string
  size?: IconSize
}

export function TvIcon({ size = 'normal', color = COLOR.SECONDARY }: TvIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.9934 18H3.00656C2.40831 17.9993 1.83478 17.7613 1.41175 17.3382C0.988728 16.9152 0.750744 16.3417 0.75 15.7434V6.00656C0.750744 5.40831 0.988728 4.83478 1.41175 4.41175C1.83478 3.98873 2.40831 3.75074 3.00656 3.75H20.9934C21.5917 3.75074 22.1652 3.98873 22.5882 4.41175C23.0113 4.83478 23.2493 5.40831 23.25 6.00656V15.7434C23.2493 16.3417 23.0113 16.9152 22.5882 17.3382C22.1652 17.7613 21.5917 17.9993 20.9934 18Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.25 19.5C5.25 19.0858 5.58579 18.75 6 18.75H18C18.4142 18.75 18.75 19.0858 18.75 19.5C18.75 19.9142 18.4142 20.25 18 20.25H6C5.58579 20.25 5.25 19.9142 5.25 19.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
