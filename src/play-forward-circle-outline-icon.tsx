import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlayForwardCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PlayForwardCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PlayForwardCircleOutlineIconProps) {
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
        d='M18.5049 11.5641L13.14 8.32318C13.0631 8.27711 12.9753 8.25233 12.8857 8.25137C12.7961 8.25042 12.7078 8.27332 12.6299 8.31774C12.5521 8.36216 12.4874 8.42649 12.4426 8.50414C12.3978 8.58178 12.3745 8.66995 12.375 8.75959V11.259L7.51501 8.32318C7.43811 8.27711 7.35034 8.25233 7.2607 8.25137C7.17107 8.25042 7.08279 8.27332 7.00493 8.31774C6.92706 8.36216 6.86242 8.42649 6.81762 8.50414C6.77282 8.58178 6.74949 8.66995 6.75001 8.75959V15.2405C6.74949 15.3302 6.77282 15.4183 6.81762 15.496C6.86242 15.5736 6.92706 15.638 7.00493 15.6824C7.08279 15.7268 7.17107 15.7497 7.2607 15.7488C7.35034 15.7478 7.43811 15.723 7.51501 15.6769L12.375 12.7412V15.2405C12.3745 15.3302 12.3978 15.4183 12.4426 15.496C12.4874 15.5736 12.5521 15.638 12.6299 15.6824C12.7078 15.7268 12.7961 15.7497 12.8857 15.7488C12.9753 15.7478 13.0631 15.723 13.14 15.6769L18.5049 12.436C18.5796 12.3904 18.6414 12.3264 18.6843 12.2501C18.7272 12.1737 18.7497 12.0876 18.7497 12.0001C18.7497 11.9125 18.7272 11.8264 18.6843 11.7501C18.6414 11.6737 18.5796 11.6097 18.5049 11.5641Z'
        fill={contentColor}
      />
    </Svg>
  )
}
