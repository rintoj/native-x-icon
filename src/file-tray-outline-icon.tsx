import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FileTrayOutlineIconProps {
  color?: string
  size?: IconSize
}

export function FileTrayOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: FileTrayOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18 3.75H6C4.78125 3.75 3.98438 4.40625 3.75 5.625L2.25 12.75V18C2.25173 18.5962 2.48934 19.1675 2.91092 19.5891C3.3325 20.0107 3.9038 20.2483 4.5 20.25H19.5C20.0962 20.2483 20.6675 20.0107 21.0891 19.5891C21.5107 19.1675 21.7483 18.5962 21.75 18V12.75L20.25 5.625C20.0156 4.35938 19.1719 3.75 18 3.75Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path d='M2.25 12.75H9' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M15 12.75H21.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M9 12.75C9 13.5456 9.31607 14.3087 9.87868 14.8713C10.4413 15.4339 11.2044 15.75 12 15.75C12.7956 15.75 13.5587 15.4339 14.1213 14.8713C14.6839 14.3087 15 13.5456 15 12.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
