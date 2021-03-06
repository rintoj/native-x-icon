import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PartlySunnyOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PartlySunnyOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PartlySunnyOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M4.24734 14.3836C4.40401 14.3593 4.54902 14.2862 4.66172 14.1747C4.77442 14.0631 4.84905 13.9189 4.875 13.7625C5.44172 10.3205 7.95141 8.25 10.875 8.25C13.5905 8.25 15.4041 10.0195 16.1344 11.8941C16.1813 12.0142 16.2587 12.1201 16.359 12.2012C16.4593 12.2823 16.579 12.3359 16.7062 12.3567C19.05 12.7387 21 14.3039 21 17.025C21 19.8094 18.7219 21.75 15.9375 21.75H4.96875C2.64844 21.75 0.75 20.5922 0.75 18.0375C0.75 15.7655 2.56266 14.6522 4.24734 14.3836Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M18.0375 12.7217C18.496 12.3681 18.8663 11.9132 19.1196 11.3925C19.3728 10.8718 19.5021 10.2996 19.4972 9.72058C19.4923 9.1416 19.3534 8.57162 19.0914 8.0553C18.8294 7.53898 18.4514 7.09034 17.987 6.74453C17.5226 6.39873 16.9844 6.16516 16.4147 6.06212C15.8449 5.95908 15.2591 5.98937 14.703 6.15062C14.1469 6.31187 13.6357 6.59969 13.2094 6.99154C12.7832 7.38339 12.4535 7.86862 12.2461 8.40922'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21.75 9.75H23.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.75 2.25V3.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M10.4464 4.44623L11.5072 5.50701'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21.0535 4.44623L19.9927 5.50701'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
