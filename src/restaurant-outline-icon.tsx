import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface RestaurantOutlineIconProps {
  color?: string
  size?: IconSize
}

export function RestaurantOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: RestaurantOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M2.6948 2.23755L19.965 19.5077C20.2927 19.8354 20.4767 20.2799 20.4767 20.7433C20.4767 21.2068 20.2927 21.6512 19.965 21.979V21.979C19.6372 22.3065 19.1927 22.4905 18.7293 22.4905C18.2659 22.4905 17.8215 22.3065 17.4937 21.979L13.275 17.6875C12.9989 17.4072 12.844 17.0296 12.8437 16.6361V16.3769C12.8437 16.1783 12.8043 15.9816 12.7277 15.7982C12.6511 15.6149 12.5388 15.4487 12.3975 15.3091L11.8528 14.8061C11.6679 14.6355 11.443 14.5142 11.1989 14.4532C10.9548 14.3923 10.6993 14.3937 10.4559 14.4574V14.4574C10.0721 14.5576 9.66872 14.5556 9.28587 14.4518C8.90302 14.3479 8.55398 14.1458 8.27339 13.8654L4.26886 9.86036C1.89324 7.48474 1.01902 3.89739 2.6948 2.23755Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M18.75 1.5L15.1289 5.12109C14.8503 5.39968 14.6292 5.73043 14.4784 6.09445C14.3276 6.45847 14.25 6.84863 14.25 7.24266V7.93922C14.25 8.03777 14.2306 8.13536 14.1929 8.22641C14.1552 8.31746 14.0999 8.40018 14.0302 8.46984L13.5 9'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15 10.5L15.5302 9.96984C15.5998 9.90013 15.6825 9.84484 15.7736 9.80711C15.8646 9.76939 15.9622 9.74998 16.0608 9.75H16.7573C17.1514 9.75 17.5415 9.67238 17.9056 9.52158C18.2696 9.37078 18.6003 9.14974 18.8789 8.87109L22.5 5.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M20.625 3.375L16.875 7.125'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M9.37497 17.25L4.70059 21.9506C4.34898 22.3021 3.87215 22.4996 3.37497 22.4996C2.87778 22.4996 2.40096 22.3021 2.04934 21.9506V21.9506C1.69783 21.599 1.50037 21.1222 1.50037 20.625C1.50037 20.1278 1.69783 19.651 2.04934 19.2994L5.99997 15.375'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
