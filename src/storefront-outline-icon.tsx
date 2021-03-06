import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface StorefrontOutlineIconProps {
  color?: string
  size?: IconSize
}

export function StorefrontOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: StorefrontOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path d='M21 21V11.25' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M3 11.25V21' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M17.9283 2.25H6.07169C5.05029 2.25 4.12779 2.8125 3.73123 3.67781L1.70154 8.10938C1.0181 9.60047 2.15294 11.2898 3.91357 11.3438C3.94482 11.3438 3.97607 11.3438 4.00732 11.3438C5.47919 11.3438 6.67216 10.1634 6.67216 8.89547C6.67216 10.1611 7.8656 11.3438 9.33748 11.3438C10.8094 11.3438 12 10.2478 12 8.89547C12 10.1611 13.1929 11.3438 14.6648 11.3438C16.1367 11.3438 17.3301 10.2478 17.3301 8.89547C17.3301 10.2478 18.5231 11.3438 19.995 11.3438C20.0262 11.3438 20.0567 11.3438 20.0864 11.3438C21.847 11.2889 22.9819 9.59953 22.2984 8.10938L20.2687 3.67781C19.8722 2.8125 18.9497 2.25 17.9283 2.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M1.5 21.75H22.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6.375 13.5H10.125C10.4234 13.5 10.7095 13.6185 10.9205 13.8295C11.1315 14.0405 11.25 14.3266 11.25 14.625V18.75H5.25V14.625C5.25 14.3266 5.36853 14.0405 5.5795 13.8295C5.79048 13.6185 6.07663 13.5 6.375 13.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M13.5 21.75V14.625C13.5 14.3266 13.6185 14.0405 13.8295 13.8295C14.0405 13.6185 14.3266 13.5 14.625 13.5H17.625C17.9234 13.5 18.2095 13.6185 18.4205 13.8295C18.6315 14.0405 18.75 14.3266 18.75 14.625V21.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
