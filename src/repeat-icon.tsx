import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface RepeatIconProps {
  color?: string
  size?: IconSize
}

export function RepeatIcon({ size = 'normal', color = COLOR.SECONDARY }: RepeatIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.4697 5.09467C14.7626 4.80178 15.2374 4.80178 15.5303 5.09467L17.7803 7.34467C18.0732 7.63756 18.0732 8.11244 17.7803 8.40533L15.5303 10.6553C15.2374 10.9482 14.7626 10.9482 14.4697 10.6553C14.1768 10.3624 14.1768 9.88756 14.4697 9.59467L16.1893 7.875L14.4697 6.15533C14.1768 5.86244 14.1768 5.38756 14.4697 5.09467Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.74776 7.125L6.75 7.125H16.5C16.9142 7.125 17.25 7.46079 17.25 7.875C17.25 8.28921 16.9142 8.625 16.5 8.625H6.75118C5.95605 8.62765 5.19422 8.94469 4.63196 9.50696C4.06969 10.0692 3.75265 10.831 3.75 11.6262V12.375C3.75 12.7892 3.41421 13.125 3 13.125C2.58579 13.125 2.25 12.7892 2.25 12.375V11.625L2.25 11.6228C2.25356 10.431 2.72858 9.28902 3.5713 8.4463C4.41402 7.60357 5.55598 7.12856 6.74776 7.125Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.53033 13.3447C9.82322 13.6376 9.82322 14.1124 9.53033 14.4053L7.81066 16.125L9.53033 17.8447C9.82322 18.1376 9.82322 18.6124 9.53033 18.9053C9.23744 19.1982 8.76256 19.1982 8.46967 18.9053L6.21967 16.6553C5.92678 16.3624 5.92678 15.8876 6.21967 15.5947L8.46967 13.3447C8.76256 13.0518 9.23744 13.0518 9.53033 13.3447Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21 10.875C21.4142 10.875 21.75 11.2108 21.75 11.625V12.375L21.75 12.3772C21.7464 13.569 21.2714 14.711 20.4287 15.5537C19.586 16.3964 18.444 16.8714 17.2522 16.875L17.25 16.875H7.5C7.08579 16.875 6.75 16.5392 6.75 16.125C6.75 15.7108 7.08579 15.375 7.5 15.375H17.2488C18.0439 15.3724 18.8058 15.0553 19.368 14.493C19.9303 13.9307 20.2474 13.1689 20.25 12.3737V11.625C20.25 11.2108 20.5858 10.875 21 10.875Z'
        fill={contentColor}
      />
    </Svg>
  )
}
