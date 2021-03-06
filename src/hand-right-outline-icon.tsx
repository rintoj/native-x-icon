import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HandRightOutlineIconProps {
  color?: string
  size?: IconSize
}

export function HandRightOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: HandRightOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.25 15V6.75C20.25 6.35218 20.092 5.97064 19.8107 5.68934C19.5294 5.40804 19.1478 5.25 18.75 5.25V5.25C18.3522 5.25 17.9706 5.40804 17.6893 5.68934C17.408 5.97064 17.25 6.35218 17.25 6.75V12'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M17.25 12V3.75C17.25 3.35218 17.092 2.97064 16.8107 2.68934C16.5294 2.40804 16.1478 2.25 15.75 2.25C15.3522 2.25 14.9706 2.40804 14.6893 2.68934C14.408 2.97064 14.25 3.35218 14.25 3.75V11.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M11.25 11.2969V4.5C11.25 4.10218 11.092 3.72064 10.8107 3.43934C10.5294 3.15804 10.1478 3 9.75 3V3C9.35218 3 8.97064 3.15804 8.68934 3.43934C8.40804 3.72064 8.25 4.10218 8.25 4.5V15'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M14.25 11.25V2.25C14.25 1.85218 14.092 1.47064 13.8107 1.18934C13.5294 0.908035 13.1478 0.75 12.75 0.75C12.3522 0.75 11.9706 0.908035 11.6893 1.18934C11.408 1.47064 11.25 1.85218 11.25 2.25V11.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M20.2499 14.9995C20.2499 20.5027 17.2499 23.2495 13.1249 23.2495C8.99994 23.2495 7.32604 21.3933 6.37494 19.1245L3.90603 12.3745C3.59385 11.5284 3.73541 10.7438 4.46244 10.3308C5.18994 9.91734 6.14572 10.1302 6.53947 10.8783L8.24994 14.9995'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
