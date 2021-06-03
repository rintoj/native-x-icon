import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FlashIconProps {
  color?: string
  size?: IconSize
}

export function FlashIcon({ size = 'normal', color = COLOR.SECONDARY }: FlashIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M9.1322 23.2496C9.00654 23.2497 8.88238 23.2223 8.76844 23.1693C8.65451 23.1163 8.55356 23.039 8.4727 22.9428C8.39184 22.8466 8.33302 22.7339 8.30038 22.6125C8.26774 22.4912 8.26206 22.3641 8.28376 22.2404V22.2352L9.60142 14.9996H4.50001C4.35841 14.9996 4.21971 14.9595 4.09995 14.8839C3.98018 14.8084 3.88425 14.7005 3.82325 14.5727C3.76225 14.4449 3.73867 14.3024 3.75524 14.1618C3.77181 14.0212 3.82786 13.8881 3.91689 13.778L14.1905 1.0777C14.3074 0.929262 14.4698 0.823207 14.6527 0.775756C14.8356 0.728305 15.029 0.742071 15.2034 0.814948C15.3777 0.887826 15.5234 1.0158 15.6181 1.17931C15.7129 1.34282 15.7515 1.53285 15.728 1.72036C15.728 1.73442 15.7242 1.74802 15.7219 1.76208L14.3995 8.99958H19.5C19.6416 8.99959 19.7803 9.03969 19.9001 9.11524C20.0198 9.19079 20.1158 9.2987 20.1768 9.42648C20.2378 9.55427 20.2613 9.69672 20.2448 9.83734C20.2282 9.97797 20.1722 10.111 20.0831 10.2211L9.80814 22.9215C9.7274 23.0235 9.62469 23.1059 9.50766 23.1628C9.39063 23.2196 9.26229 23.2492 9.1322 23.2496Z'
        fill={contentColor}
      />
    </Svg>
  )
}