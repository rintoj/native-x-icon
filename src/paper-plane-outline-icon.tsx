import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PaperPlaneOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PaperPlaneOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PaperPlaneOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M2.49006 9.37188L21.2401 2.27548C21.3077 2.24961 21.3814 2.24387 21.4522 2.25897C21.523 2.27407 21.588 2.30936 21.6392 2.36057C21.6904 2.41178 21.7257 2.47672 21.7408 2.54754C21.7559 2.61837 21.7502 2.69206 21.7243 2.7597L14.6279 21.5097C14.5997 21.5809 14.5503 21.6418 14.4865 21.6841C14.4226 21.7264 14.3473 21.7481 14.2708 21.7464C14.1942 21.7447 14.12 21.7195 14.0581 21.6744C13.9963 21.6292 13.9497 21.5662 13.9248 21.4938L10.7654 13.7083C10.7285 13.598 10.6666 13.4977 10.5843 13.4155C10.5021 13.3332 10.4018 13.2712 10.2915 13.2344L2.506 10.0778C2.43266 10.0534 2.36865 10.0069 2.32273 9.94477C2.27681 9.88259 2.25123 9.80774 2.24949 9.73046C2.24774 9.65319 2.26992 9.57726 2.31298 9.51307C2.35605 9.44888 2.4179 9.39957 2.49006 9.37188V9.37188Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21.5625 2.4375L10.6406 13.3594'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
