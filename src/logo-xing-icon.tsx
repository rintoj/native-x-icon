import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoXingIconProps {
  color?: string
  size?: IconSize
}

export function LogoXingIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoXingIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M14.7093 14.2453L21.9843 1.5H17.1093L9.81551 14.2406C9.80638 14.2519 9.80139 14.266 9.80139 14.2805C9.80139 14.295 9.80638 14.309 9.81551 14.3203L14.4514 22.4672C14.4702 22.5 14.4889 22.5 14.5264 22.5H19.3593L14.7046 14.3109C14.7008 14.3003 14.6992 14.2889 14.7 14.2776C14.7008 14.2663 14.704 14.2553 14.7093 14.2453Z'
        fill={contentColor}
      />
      <Path
        d='M10.4016 10.1352L7.64062 5.29766C7.63144 5.2814 7.61762 5.26825 7.60091 5.2599C7.58421 5.25155 7.56539 5.24837 7.54688 5.25079H3.04688L5.80781 10.1445C5.81393 10.156 5.8156 10.1694 5.8125 10.182L2.01562 16.5008H6.55313C6.5685 16.5027 6.58409 16.4997 6.5976 16.4921C6.6111 16.4845 6.62181 16.4728 6.62812 16.4586L10.4016 10.1914C10.4062 10.173 10.4062 10.1536 10.4016 10.1352Z'
        fill={contentColor}
      />
    </Svg>
  )
}
