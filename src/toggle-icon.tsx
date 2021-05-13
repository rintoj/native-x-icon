import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ToggleIconProps {
  color?: string
  size?: IconSize
}

export function ToggleIcon({ size = 'normal', color = COLOR.SECONDARY }: ToggleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.25 5.25H6.75C3.02812 5.25 0 8.27812 0 12C0 15.7219 3.02812 18.75 6.75 18.75H17.25C20.9719 18.75 24 15.7219 24 12C24 8.27812 20.9719 5.25 17.25 5.25ZM17.25 17.25C16.2116 17.25 15.1966 16.9421 14.3333 16.3652C13.4699 15.7883 12.797 14.9684 12.3996 14.0091C12.0023 13.0498 11.8983 11.9942 12.1009 10.9758C12.3034 9.95738 12.8035 9.02192 13.5377 8.28769C14.2719 7.55346 15.2074 7.05345 16.2258 6.85088C17.2442 6.64831 18.2998 6.75227 19.2591 7.14963C20.2184 7.54699 21.0383 8.2199 21.6152 9.08326C22.1921 9.94661 22.5 10.9616 22.5 12C22.4985 13.3919 21.9449 14.7264 20.9607 15.7107C19.9764 16.6949 18.6419 17.2485 17.25 17.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
