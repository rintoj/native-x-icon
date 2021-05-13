import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SaveOutlineIconProps {
  color?: string
  size?: IconSize
}

export function SaveOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SaveOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.8561 2.68922C17.7168 2.54994 17.5514 2.43946 17.3694 2.3641C17.1874 2.28874 16.9923 2.24997 16.7953 2.25H4.41656C4.13203 2.24994 3.85027 2.30594 3.58738 2.41479C3.32449 2.52365 3.08563 2.68324 2.88443 2.88443C2.68324 3.08563 2.52365 3.32449 2.41479 3.58738C2.30594 3.85027 2.24994 4.13203 2.25 4.41656V19.5834C2.24994 19.868 2.30594 20.1497 2.41479 20.4126C2.52365 20.6755 2.68324 20.9144 2.88443 21.1156C3.08563 21.3168 3.32449 21.4763 3.58738 21.5852C3.85027 21.6941 4.13203 21.7501 4.41656 21.75H19.5834C20.1575 21.7483 20.7076 21.5195 21.1135 21.1135C21.5195 20.7076 21.7483 20.1575 21.75 19.5834V7.20469C21.75 7.00769 21.7113 6.81262 21.6359 6.63061C21.5605 6.4486 21.4501 6.28322 21.3108 6.14391L17.8561 2.68922ZM12 19.5C11.4067 19.5 10.8266 19.3241 10.3333 18.9944C9.83994 18.6648 9.45542 18.1962 9.22836 17.648C9.0013 17.0999 8.94189 16.4967 9.05764 15.9147C9.1734 15.3328 9.45912 14.7982 9.87868 14.3787C10.2982 13.9591 10.8328 13.6734 11.4147 13.5576C11.9967 13.4419 12.5999 13.5013 13.148 13.7284C13.6962 13.9554 14.1648 14.3399 14.4944 14.8333C14.8241 15.3266 15 15.9067 15 16.5C15.0005 16.8941 14.9232 17.2844 14.7726 17.6486C14.6221 18.0128 14.4011 18.3437 14.1224 18.6224C13.8437 18.9011 13.5128 19.1221 13.1486 19.2726C12.7844 19.4232 12.3941 19.5005 12 19.5V19.5ZM14.25 9H5.25C5.05109 9 4.86032 8.92098 4.71967 8.78033C4.57902 8.63968 4.5 8.44891 4.5 8.25V5.25C4.5 5.05109 4.57902 4.86032 4.71967 4.71967C4.86032 4.57902 5.05109 4.5 5.25 4.5H14.25C14.4489 4.5 14.6397 4.57902 14.7803 4.71967C14.921 4.86032 15 5.05109 15 5.25V8.25C15 8.44891 14.921 8.63968 14.7803 8.78033C14.6397 8.92098 14.4489 9 14.25 9Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
