import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoYoutubeIconProps {
  color?: string
  size?: IconSize
}

export function LogoYoutubeIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoYoutubeIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <G clipPath='url(#clip0)'>
        <Path
          d='M23.8425 6.97453C23.8425 4.86516 22.291 3.16828 20.3738 3.16828C17.7769 3.04687 15.1285 3 12.4219 3H11.5782C8.87817 3 6.22504 3.04687 3.62817 3.16875C1.71567 3.16875 0.164103 4.875 0.164103 6.98437C0.0469159 8.65266 -0.00277159 10.3214 4.091e-05 11.9902C-0.00464659 13.6589 0.0484784 15.3292 0.159416 17.0011C0.159416 19.1105 1.71098 20.8214 3.62348 20.8214C6.3516 20.948 9.15004 21.0042 11.9954 20.9995C14.8454 21.0089 17.636 20.9495 20.3672 20.8214C22.2844 20.8214 23.836 19.1105 23.836 17.0011C23.9485 15.3277 24 13.6589 23.9954 11.9855C24.006 10.3167 23.955 8.64641 23.8425 6.97453ZM9.70317 16.5886V7.37766L16.5 11.9808L9.70317 16.5886Z'
          fill={contentColor}
        />
      </G>
      <Defs>
        <ClipPath id='clip0'>
          <Rect width='24' height='24' fill={contentColor} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
