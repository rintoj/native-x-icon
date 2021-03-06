import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PintOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PintOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PintOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M6.20763 7.59375C5.91513 6 5.99717 5.45859 6.06373 4.38797L6.20014 2.20312C6.21205 2.01293 6.29591 1.8344 6.43469 1.70381C6.57347 1.57321 6.75676 1.50034 6.94732 1.5H17.0522C17.2427 1.50034 17.426 1.57321 17.5648 1.70381C17.7036 1.8344 17.7874 2.01293 17.7994 2.20312L17.9358 4.38797C18.0028 5.45953 18.0853 6 17.7923 7.59656C17.5144 9.11016 15.7434 13.8436 15.7434 18.7678V22.125C15.7434 22.2245 15.7039 22.3198 15.6336 22.3902C15.5633 22.4605 15.4679 22.5 15.3684 22.5H8.6306C8.53115 22.5 8.43577 22.4605 8.36544 22.3902C8.29511 22.3198 8.2556 22.2245 8.2556 22.125V18.7673C8.25607 14.4328 6.49967 9.19078 6.20763 7.59375Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6.33801 4.5H17.6621'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
