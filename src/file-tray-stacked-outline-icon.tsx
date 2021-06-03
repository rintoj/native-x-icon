import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FileTrayStackedOutlineIconProps {
  color?: string
  size?: IconSize
}

export function FileTrayStackedOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: FileTrayStackedOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M2.25 15.75V20.25C2.25173 20.8462 2.48934 21.4175 2.91092 21.8391C3.3325 22.2607 3.9038 22.4983 4.5 22.5H19.5C20.0962 22.4983 20.6675 22.2607 21.0891 21.8391C21.5107 21.4175 21.7483 20.8462 21.75 20.25V15.75'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path d='M2.25 15.75H9' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M15 15.75H21.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M9 15.75C9 16.5456 9.31607 17.3087 9.87868 17.8713C10.4413 18.4339 11.2044 18.75 12 18.75C12.7956 18.75 13.5587 18.4339 14.1213 17.8713C14.6839 17.3087 15 16.5456 15 15.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18 1.5H6C4.78125 1.5 3.98438 2.15625 3.75 3.375L2.25 9V13.5C2.25173 14.0962 2.48934 14.6675 2.91092 15.0891C3.3325 15.5107 3.9038 15.7483 4.5 15.75H19.5C20.0962 15.7483 20.6675 15.5107 21.0891 15.0891C21.5107 14.6675 21.7483 14.0962 21.75 13.5V9L20.25 3.375C20.0156 2.10938 19.1719 1.5 18 1.5Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path d='M2.25 9H9' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M15 9H21.75' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M9 9C9 9.79565 9.31607 10.5587 9.87868 11.1213C10.4413 11.6839 11.2044 12 12 12C12.7956 12 13.5587 11.6839 14.1213 11.1213C14.6839 10.5587 15 9.79565 15 9'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
