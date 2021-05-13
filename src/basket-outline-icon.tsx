import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BasketOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BasketOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BasketOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M3.20625 9C2.95417 8.99974 2.71222 9.09912 2.5331 9.27649C2.35398 9.45385 2.25222 9.69481 2.25 9.94688C2.24897 10.0342 2.26163 10.1212 2.2875 10.2047L4.71093 18.75C4.82326 19.1492 5.0633 19.5005 5.39432 19.7503C5.72534 20 6.12909 20.1344 6.54375 20.1328H17.4562C17.8717 20.1332 18.276 19.9985 18.6083 19.7491C18.9406 19.4997 19.1828 19.149 19.2984 18.75L21.7219 10.2047L21.75 9.94688C21.7478 9.69481 21.646 9.45385 21.4669 9.27649C21.2878 9.09912 21.0458 8.99974 20.7937 9H3.20625ZM12.2681 16.5033C11.8785 16.5013 11.4982 16.384 11.1752 16.1662C10.8522 15.9483 10.601 15.6396 10.4532 15.2791C10.3055 14.9186 10.2678 14.5224 10.345 14.1405C10.4222 13.7586 10.6108 13.4082 10.887 13.1334C11.1632 12.8586 11.5146 12.6717 11.8968 12.5964C12.2791 12.5211 12.6751 12.5607 13.0349 12.7103C13.3947 12.8598 13.7021 13.1126 13.9183 13.4367C14.1346 13.7608 14.25 14.1416 14.25 14.5313C14.2475 15.0552 14.0376 15.5569 13.6662 15.9264C13.2948 16.296 12.7921 16.5034 12.2681 16.5033V16.5033Z'
        stroke={contentColor}
        stroke-linejoin='round'
      />
      <Path d='M7.5 9L12 3L16.5 9' stroke={contentColor} stroke-linejoin='round' />
    </Svg>
  )
}
