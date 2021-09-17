import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GifOutlineIconProps {
  color?: string
  size?: IconSize
}

export function GifOutlineIcon({ size = 'normal', color = COLOR.SECONDARY }: GifOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.8138 10.4812V8.78125H14.9021V15.1812H16.7998V13.1812H19.0324V11.4812H16.7998V10.4812H19.8138V10.4812ZM11.6649 8.78125H13.5626V15.1812H11.6649V8.78125ZM7.64631 10.3812C8.09282 10.3812 8.65096 10.5812 8.98585 10.8812L10.3254 9.88125C9.65561 9.18125 8.65096 8.78125 7.64631 8.78125C5.63701 8.78125 4.07422 10.1812 4.07422 11.9812C4.07422 13.7812 5.63701 15.1812 7.64631 15.1812C8.76259 15.1812 9.65561 14.7813 10.3254 14.0813V11.5813H7.1998V12.7812H8.53933V13.3812C8.31608 13.4812 7.9812 13.5813 7.64631 13.5813C6.64166 13.5813 5.86027 12.8812 5.86027 11.9812C5.86027 11.1812 6.64166 10.3812 7.64631 10.3812V10.3812Z'
        fill={contentColor}
      />
      <Path
        d='M21.4884 2H2.51163C1.12744 2 0 3.007 0 4.247V19.754C0 20.992 1.12744 22 2.51163 22H21.4884C22.8726 22 24 20.992 24 19.754V4.247C24 3.007 22.8726 2 21.4884 2V2ZM22.3256 19.754C22.3256 20.164 21.9505 20.5 21.4884 20.5H2.51163C2.04949 20.5 1.67442 20.164 1.67442 19.754V4.247C1.67442 3.835 2.04949 3.5 2.51163 3.5H21.4884C21.9505 3.5 22.3256 3.835 22.3256 4.247V19.754Z'
        fill={contentColor}
      />
    </Svg>
  )
}
