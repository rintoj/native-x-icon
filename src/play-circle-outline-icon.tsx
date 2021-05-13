import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlayCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PlayCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PlayCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
      <Path
        d='M10.14 15.6769L15.5049 12.436C15.5796 12.3904 15.6414 12.3264 15.6843 12.2501C15.7272 12.1737 15.7497 12.0876 15.7497 12.0001C15.7497 11.9125 15.7272 11.8264 15.6843 11.7501C15.6414 11.6737 15.5796 11.6097 15.5049 11.5641L10.14 8.32318C10.0631 8.27711 9.97534 8.25233 9.8857 8.25137C9.79607 8.25042 9.70779 8.27332 9.62993 8.31774C9.55206 8.36216 9.48742 8.42649 9.44262 8.50414C9.39782 8.58178 9.37449 8.66995 9.37501 8.75959V15.2405C9.37449 15.3302 9.39782 15.4183 9.44262 15.496C9.48742 15.5736 9.55206 15.638 9.62993 15.6824C9.70779 15.7268 9.79607 15.7497 9.8857 15.7488C9.97534 15.7478 10.0631 15.723 10.14 15.6769Z'
        fill={contentColor}
      />
    </Svg>
  )
}
