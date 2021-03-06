import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TrophyOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TrophyOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TrophyOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M8.25 21.75H15.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 21.75V15.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18 10.5C18 8.12625 17.9963 4.18922 17.9944 3C17.9944 2.80109 17.9154 2.61032 17.7747 2.46967C17.6341 2.32902 17.4433 2.25 17.2444 2.25L6.75426 2.26219C6.55576 2.26219 6.36534 2.34088 6.22476 2.48103C6.08417 2.62117 6.00488 2.81134 6.00426 3.00984C6.00426 4.44328 5.99817 9.06469 5.99817 10.5C5.99817 13.5131 9.88879 15.75 11.9982 15.75C14.1075 15.75 18 13.5131 18 10.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6 4.5H2.25V5.25C2.25 7.83844 3.82266 10.5 6 10.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18 4.5H21.75V5.25C21.75 7.83844 20.1773 10.5 18 10.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
