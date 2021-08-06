import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ShareSocialOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ShareSocialOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ShareSocialOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M6 14.25C7.24264 14.25 8.25 13.2426 8.25 12C8.25 10.7574 7.24264 9.75 6 9.75C4.75736 9.75 3.75 10.7574 3.75 12C3.75 13.2426 4.75736 14.25 6 14.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18 7.5C19.2426 7.5 20.25 6.49264 20.25 5.25C20.25 4.00736 19.2426 3 18 3C16.7574 3 15.75 4.00736 15.75 5.25C15.75 6.49264 16.7574 7.5 18 7.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18 21C19.2426 21 20.25 19.9926 20.25 18.75C20.25 17.5074 19.2426 16.5 18 16.5C16.7574 16.5 15.75 17.5074 15.75 18.75C15.75 19.9926 16.7574 21 18 21Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.96082 13.1036L16.0393 17.6477'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M16.0393 6.35364L7.96082 10.8977'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}