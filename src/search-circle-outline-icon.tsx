import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SearchCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function SearchCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SearchCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 3.75C10.3683 3.75 8.77325 4.23385 7.41655 5.14038C6.05984 6.0469 5.00242 7.33537 4.378 8.84286C3.75357 10.3504 3.5902 12.0092 3.90853 13.6095C4.22685 15.2098 5.01259 16.6798 6.16637 17.8336C7.32016 18.9874 8.79017 19.7732 10.3905 20.0915C11.9909 20.4098 13.6497 20.2464 15.1571 19.622C16.6646 18.9976 17.9531 17.9402 18.8596 16.5835C19.7662 15.2268 20.25 13.6317 20.25 12C20.25 9.81196 19.3808 7.71354 17.8336 6.16637C16.2865 4.61919 14.188 3.75 12 3.75Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M10.875 7.5C10.2075 7.5 9.55496 7.69794 8.99995 8.06879C8.44493 8.43964 8.01235 8.96674 7.75691 9.58344C7.50146 10.2001 7.43463 10.8787 7.56485 11.5334C7.69508 12.1881 8.01651 12.7895 8.48851 13.2615C8.96052 13.7335 9.56188 14.0549 10.2166 14.1852C10.8713 14.3154 11.5498 14.2485 12.1665 13.9931C12.7832 13.7376 13.3103 13.3051 13.6812 12.7501C14.052 12.195 14.25 11.5425 14.25 10.875C14.25 10.4318 14.1627 9.99292 13.9931 9.58344C13.8235 9.17397 13.5749 8.80191 13.2615 8.48851C12.9481 8.17512 12.576 7.92652 12.1665 7.75691C11.7571 7.5873 11.3182 7.5 10.875 7.5V7.5Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M13.2957 13.295L15.75 15.7494'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}
