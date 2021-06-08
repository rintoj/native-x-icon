import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlayForwardIconProps {
  color?: string
  size?: IconSize
}

export function PlayForwardIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PlayForwardIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.5604 10.7561L13.7071 5.45927C13.4881 5.326 13.2373 5.254 12.981 5.25079C12.7246 5.24757 12.4721 5.31326 12.2498 5.44099C12.0086 5.58144 11.8089 5.78323 11.6709 6.02585C11.5329 6.26848 11.4616 6.54329 11.4642 6.8224V10.5279L2.99292 5.45786C2.7739 5.3246 2.52311 5.2526 2.26675 5.24938C2.01039 5.24616 1.75787 5.31185 1.53558 5.43958C1.29438 5.58004 1.09464 5.78182 0.956659 6.02445C0.818676 6.26707 0.747359 6.54189 0.749951 6.82099V17.1804C0.747276 17.4595 0.818554 17.7345 0.956541 17.9772C1.09453 18.2199 1.29431 18.4217 1.53558 18.5622C1.75787 18.69 2.01039 18.7557 2.26675 18.7524C2.52311 18.7492 2.7739 18.6772 2.99292 18.544L11.4642 13.4716V17.1785C11.4612 17.458 11.5323 17.7333 11.6703 17.9764C11.8083 18.2194 12.0082 18.4216 12.2498 18.5622C12.4721 18.69 12.7246 18.7557 12.981 18.7524C13.2373 18.7492 13.4881 18.6772 13.7071 18.544L22.5604 13.2471C22.7709 13.1152 22.9444 12.9321 23.0647 12.7148C23.185 12.4975 23.2481 12.2532 23.2481 12.0049C23.2481 11.7565 23.185 11.5123 23.0647 11.295C22.9444 11.0777 22.7709 10.8945 22.5604 10.7627V10.7561Z'
        fill={contentColor}
      />
    </Svg>
  )
}