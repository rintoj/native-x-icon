import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GitCommitIconProps {
  color?: string
  size?: IconSize
}

export function GitCommitIcon({ size = 'normal', color = COLOR.SECONDARY }: GitCommitIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 10.5003H17.8125C17.4804 9.21178 16.7294 8.07019 15.6777 7.2551C14.6259 6.44001 13.333 5.99768 12.0023 5.99768C10.6717 5.99768 9.37881 6.44001 8.32703 7.2551C7.27525 8.07019 6.52426 9.21178 6.19219 10.5003H3C2.60218 10.5003 2.22064 10.6584 1.93934 10.9397C1.65804 11.221 1.5 11.6025 1.5 12.0003C1.5 12.3981 1.65804 12.7797 1.93934 13.061C2.22064 13.3423 2.60218 13.5003 3 13.5003H6.18984C6.52111 14.7899 7.2719 15.9327 8.324 16.7487C9.3761 17.5647 10.6697 18.0075 12.0012 18.0075C13.3326 18.0075 14.6262 17.5647 15.6783 16.7487C16.7304 15.9327 17.4812 14.7899 17.8125 13.5003H21C21.3978 13.5003 21.7794 13.3423 22.0607 13.061C22.342 12.7797 22.5 12.3981 22.5 12.0003C22.5 11.6025 22.342 11.221 22.0607 10.9397C21.7794 10.6584 21.3978 10.5003 21 10.5003ZM12 15.0003C11.4067 15.0003 10.8266 14.8244 10.3333 14.4947C9.83994 14.1651 9.45542 13.6965 9.22836 13.1484C9.0013 12.6002 8.94189 11.997 9.05764 11.4151C9.1734 10.8331 9.45912 10.2986 9.87868 9.879C10.2982 9.45944 10.8328 9.17372 11.4147 9.05797C11.9967 8.94221 12.5999 9.00162 13.1481 9.22868C13.6962 9.45575 14.1648 9.84026 14.4944 10.3336C14.8241 10.827 15 11.407 15 12.0003C14.9991 12.7957 14.6828 13.5583 14.1204 14.1207C13.5579 14.6831 12.7954 14.9995 12 15.0003Z'
        fill={contentColor}
      />
    </Svg>
  )
}
