import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MicIconProps {
  color?: string
  size?: IconSize
}

export function MicIcon({ size = 'normal', color = COLOR.SECONDARY }: MicIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8.25 21C8.25 20.5858 8.58579 20.25 9 20.25H15C15.4142 20.25 15.75 20.5858 15.75 21C15.75 21.4142 15.4142 21.75 15 21.75H9C8.58579 21.75 8.25 21.4142 8.25 21Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M6 9C6.41421 9 6.75 9.33579 6.75 9.75V11.25C6.75 14.1358 9.11421 16.5 12 16.5C14.8858 16.5 17.25 14.1358 17.25 11.25V9.75C17.25 9.33579 17.5858 9 18 9C18.4142 9 18.75 9.33579 18.75 9.75V11.25C18.75 14.9642 15.7142 18 12 18C8.28579 18 5.25 14.9642 5.25 11.25V9.75C5.25 9.33579 5.58579 9 6 9Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M12 16.5C12.4142 16.5 12.75 16.8358 12.75 17.25V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V17.25C11.25 16.8358 11.5858 16.5 12 16.5Z'
        fill={contentColor}
      />
      <Path
        d='M11.9999 14.9994C11.5049 14.9983 11.0152 14.8977 10.5599 14.7036C10.1045 14.5095 9.69278 14.226 9.34912 13.8697C8.64561 13.1602 8.25058 12.2017 8.24991 11.2025V5.99942C8.24798 5.50642 8.34367 5.01792 8.53144 4.56208C8.71922 4.10625 8.99537 3.69209 9.34397 3.34348C9.69257 2.99488 10.1067 2.71873 10.5626 2.53096C11.0184 2.34318 11.5069 2.2475 11.9999 2.24942C14.1027 2.24942 15.7499 3.89661 15.7499 5.99942V11.2025C15.7499 13.296 14.0676 14.9994 11.9999 14.9994Z'
        fill={contentColor}
      />
    </Svg>
  )
}
