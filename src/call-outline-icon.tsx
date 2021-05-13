import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CallOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CallOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CallOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.1408 17.5313C20.3964 16.7813 18.5936 15.6867 17.7189 15.2456C16.5798 14.6719 16.4861 14.625 15.5908 15.2902C14.9936 15.7341 14.5966 16.1306 13.8976 15.9816C13.1987 15.8325 11.68 14.992 10.3501 13.6664C9.0203 12.3408 8.13108 10.778 7.98155 10.0814C7.83202 9.38485 8.23515 8.9925 8.67483 8.39391C9.29452 7.55016 9.24765 7.40953 8.71796 6.27047C8.30499 5.38453 7.17858 3.59859 6.42577 2.85797C5.62046 2.0625 5.62046 2.20313 5.10155 2.41875C4.6791 2.5965 4.27382 2.81255 3.89077 3.06422C3.14077 3.5625 2.72452 3.97641 2.43343 4.59844C2.14233 5.22047 2.01155 6.67875 3.51483 9.40969C5.01812 12.1406 6.0728 13.537 8.25577 15.7139C10.4387 17.8908 12.1173 19.0613 14.5712 20.4375C17.6069 22.1377 18.7712 21.8063 19.3951 21.5156C20.0191 21.225 20.4348 20.8125 20.9341 20.0625C21.1864 19.6801 21.4029 19.2753 21.5809 18.8531C21.797 18.3361 21.9376 18.3361 21.1408 17.5313Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
    </Svg>
  )
}
