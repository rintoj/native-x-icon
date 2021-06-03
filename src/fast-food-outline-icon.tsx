import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FastFoodOutlineIconProps {
  color?: string
  size?: IconSize
}

export function FastFoodOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: FastFoodOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.0938 19.5C15.0938 21.157 14.1258 22.5 12.4688 22.5H6.28125C4.62422 22.5 3.65625 21.157 3.65625 19.5'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M15.75 15.75C16.5783 15.75 17.25 16.5895 17.25 17.625C17.25 18.6605 16.5783 19.5 15.75 19.5H3C2.17172 19.5 1.5 18.6605 1.5 17.625C1.5 16.5895 2.17172 15.75 3 15.75'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M16.125 15.75H8.40516C8.30583 15.75 8.21058 15.7895 8.14031 15.8597L6.88266 17.1173C6.86524 17.1348 6.84456 17.1486 6.8218 17.158C6.79904 17.1675 6.77464 17.1723 6.75 17.1723C6.72536 17.1723 6.70096 17.1675 6.6782 17.158C6.65544 17.1486 6.63476 17.1348 6.61734 17.1173L5.35969 15.8597C5.28942 15.7895 5.19417 15.75 5.09484 15.75H2.625C2.32663 15.75 2.04048 15.6315 1.8295 15.4205C1.61853 15.2095 1.5 14.9234 1.5 14.625V14.625C1.5 14.3266 1.61853 14.0405 1.8295 13.8295C2.04048 13.6185 2.32663 13.5 2.625 13.5H16.125C16.4234 13.5 16.7095 13.6185 16.9205 13.8295C17.1315 14.0405 17.25 14.3266 17.25 14.625C17.25 14.9234 17.1315 15.2095 16.9205 15.4205C16.7095 15.6315 16.4234 15.75 16.125 15.75Z'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M3 12.9375V12.9272C3 10.3491 5.10938 9 7.6875 9H11.0625C13.6406 9 15.75 10.3594 15.75 12.9375V12.9272'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M11.2969 5.25L11.6456 8.24859'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M12 22.5H18.5302C18.9086 22.5 19.273 22.3569 19.5504 22.0995C19.8278 21.8421 19.9977 21.4894 20.0259 21.112L21.7031 5.25'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M17.25 5.25L18 2.25L20.2031 1.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M10.5 5.25H22.5' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
    </Svg>
  )
}
