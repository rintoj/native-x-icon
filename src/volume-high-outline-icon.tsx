import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface VolumeHighOutlineIconProps {
  color?: string
  size?: IconSize
}

export function VolumeHighOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: VolumeHighOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M5.90625 9.00078H2.625C2.52554 9.00078 2.43016 9.04029 2.35984 9.11062C2.28951 9.18094 2.25 9.27633 2.25 9.37578V14.6258C2.25 14.7252 2.28951 14.8206 2.35984 14.8909C2.43016 14.9613 2.52554 15.0008 2.625 15.0008H5.88984C6.06271 14.9994 6.2307 15.0581 6.36516 15.1667L10.6528 18.6772C10.7086 18.7182 10.7747 18.743 10.8438 18.7488C10.9128 18.7546 10.9821 18.7411 11.044 18.7099C11.1058 18.6787 11.1578 18.6309 11.1942 18.5719C11.2306 18.513 11.2499 18.4451 11.25 18.3758V5.62578C11.2499 5.5565 11.2306 5.4886 11.1942 5.42963C11.1578 5.37065 11.1058 5.32291 11.044 5.29169C10.9821 5.26047 10.9128 5.247 10.8438 5.25277C10.7747 5.25854 10.7086 5.28332 10.6528 5.32438L6.36516 8.83485C6.2369 8.94317 6.07412 9.00203 5.90625 9.00078Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15 15C15.4566 14.0916 15.75 13.0856 15.75 12C15.75 10.8994 15.4688 9.91781 15 9'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M17.25 17.25C18.1631 15.66 18.75 14.2472 18.75 12C18.75 9.75281 18.1875 8.35594 17.25 6.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M19.5 19.5C20.9062 17.3438 21.75 15.2142 21.75 12C21.75 8.78578 20.9062 6.70312 19.5 4.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
