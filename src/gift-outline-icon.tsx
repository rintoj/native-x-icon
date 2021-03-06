import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GiftOutlineIconProps {
  color?: string
  size?: IconSize
}

export function GiftOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: GiftOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 4.875V7.49999H14.625C15.1442 7.49999 15.6517 7.34604 16.0834 7.0576C16.515 6.76916 16.8515 6.3592 17.0502 5.87954C17.2489 5.39988 17.3008 4.87209 17.1996 4.36289C17.0983 3.85369 16.8483 3.38596 16.4812 3.01885C16.114 2.65173 15.6463 2.40173 15.1371 2.30044C14.6279 2.19915 14.1001 2.25114 13.6205 2.44982C13.1408 2.6485 12.7308 2.98495 12.4424 3.41663C12.154 3.84831 12 4.35582 12 4.875V4.875Z'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M12 4.875C12 5.59968 12 7.49999 12 7.49999H9.37497C8.8558 7.49999 8.34828 7.34604 7.9166 7.0576C7.48492 6.76916 7.14847 6.3592 6.94979 5.87954C6.75111 5.39988 6.69912 4.87209 6.80041 4.36289C6.9017 3.85369 7.1517 3.38596 7.51882 3.01885C7.88593 2.65173 8.35366 2.40173 8.86286 2.30044C9.37206 2.19915 9.89986 2.25114 10.3795 2.44982C10.8592 2.6485 11.2691 2.98495 11.5576 3.41663C11.846 3.84831 12 4.35582 12 4.875V4.875Z'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M19.5 7.5H4.5C3.67157 7.5 3 8.17157 3 9V11.25C3 12.0784 3.67157 12.75 4.5 12.75H19.5C20.3284 12.75 21 12.0784 21 11.25V9C21 8.17157 20.3284 7.5 19.5 7.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M19.5 12.75V19.5C19.5 20.0967 19.2629 20.669 18.841 21.091C18.419 21.5129 17.8467 21.75 17.25 21.75H6.75C6.15326 21.75 5.58097 21.5129 5.15901 21.091C4.73705 20.669 4.5 20.0967 4.5 19.5V12.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M12 7.5V21.75' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
