import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CloudyNightOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CloudyNightOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CloudyNightOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.202 12.75C20.4403 12.75 22.41 11.4483 23.25 9.51938C22.5839 9.80906 21.8015 9.92297 21.029 9.92297C19.5831 9.92297 18.1963 9.34856 17.1739 8.32611C16.1514 7.30365 15.577 5.91691 15.577 4.47094C15.577 3.69844 15.6909 2.91609 15.9806 2.25C14.0517 3.09 12.75 5.05969 12.75 7.29797C12.7496 7.74321 12.8037 8.18683 12.9112 8.61891'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M4.24734 14.3836C4.40401 14.3593 4.54902 14.2862 4.66172 14.1747C4.77442 14.0631 4.84905 13.9189 4.875 13.7625C5.44172 10.3205 7.95141 8.25 10.875 8.25C13.5905 8.25 15.4041 10.0195 16.1344 11.8941C16.1813 12.0142 16.2587 12.1201 16.359 12.2012C16.4593 12.2823 16.579 12.3359 16.7062 12.3567C19.05 12.7387 21 14.3039 21 17.025C21 19.8094 18.7219 21.75 15.9375 21.75H4.96875C2.64844 21.75 0.75 20.5922 0.75 18.0375C0.75 15.7655 2.56266 14.6522 4.24734 14.3836Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
    </Svg>
  )
}
