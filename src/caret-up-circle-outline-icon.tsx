import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CaretUpCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CaretUpCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CaretUpCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.0514 12.8331L12.5766 8.65706C12.5062 8.57245 12.4181 8.50438 12.3184 8.45766C12.2188 8.41094 12.1101 8.38672 12 8.38672C11.89 8.38672 11.7813 8.41094 11.6816 8.45766C11.582 8.50438 11.4938 8.57245 11.4234 8.65706L7.9486 12.8331C7.85753 12.9427 7.79953 13.0758 7.78138 13.2171C7.76323 13.3584 7.78569 13.5019 7.84612 13.6309C7.90655 13.7599 8.00246 13.869 8.12263 13.9454C8.2428 14.0219 8.38226 14.0626 8.52469 14.0627H15.4753C15.6178 14.0626 15.7572 14.0219 15.8774 13.9454C15.9976 13.869 16.0935 13.7599 16.1539 13.6309C16.2143 13.5019 16.2368 13.3584 16.2186 13.2171C16.2005 13.0758 16.1425 12.9427 16.0514 12.8331Z'
        fill={contentColor}
      />
      <Path
        d='M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
    </Svg>
  )
}
