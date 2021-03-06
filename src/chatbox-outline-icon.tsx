import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ChatboxOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ChatboxOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ChatboxOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.125 3H4.875C4.17942 3.00198 3.51289 3.27918 3.02103 3.77103C2.52918 4.26289 2.25198 4.92942 2.25 5.625V14.625C2.25198 15.3206 2.52918 15.9871 3.02103 16.479C3.51289 16.9708 4.17942 17.248 4.875 17.25H6.75V21L11.1431 17.3372C11.2106 17.2808 11.2957 17.25 11.3836 17.25H19.125C19.8206 17.248 20.4871 16.9708 20.979 16.479C21.4708 15.9871 21.748 15.3206 21.75 14.625V5.625C21.748 4.92942 21.4708 4.26289 20.979 3.77103C20.4871 3.27918 19.8206 3.00198 19.125 3V3Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
    </Svg>
  )
}
