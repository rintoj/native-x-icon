import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LaptopIconProps {
  color?: string
  size?: IconSize
}

export function LaptopIcon({ size = 'normal', color = COLOR.SECONDARY }: LaptopIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <G clipPath='url(#clip0)'>
        <Path
          d='M23.25 18.75H21.9216C22.2943 18.3368 22.5005 17.7999 22.5 17.2434V6.00656C22.4993 5.40831 22.2613 4.83478 21.8382 4.41175C21.4152 3.98873 20.8417 3.75074 20.2434 3.75H3.75656C3.15831 3.75074 2.58478 3.98873 2.16175 4.41175C1.73873 4.83478 1.50074 5.40831 1.5 6.00656V17.2434C1.49953 17.7999 1.70566 18.3368 2.07844 18.75H0.75C0.551088 18.75 0.360322 18.829 0.21967 18.9697C0.0790176 19.1103 0 19.3011 0 19.5C0 19.6989 0.0790176 19.8897 0.21967 20.0303C0.360322 20.171 0.551088 20.25 0.75 20.25H23.25C23.4489 20.25 23.6397 20.171 23.7803 20.0303C23.921 19.8897 24 19.6989 24 19.5C24 19.3011 23.921 19.1103 23.7803 18.9697C23.6397 18.829 23.4489 18.75 23.25 18.75Z'
          fill={contentColor}
        />
      </G>
      <Defs>
        <ClipPath id='clip0'>
          <Rect width='24' height='24' fill={contentColor} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
