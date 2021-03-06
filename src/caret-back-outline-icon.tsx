import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CaretBackOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CaretBackOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CaretBackOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.0911 4.59354L7.44481 11.1457C7.32162 11.2513 7.22274 11.3824 7.15495 11.5298C7.08716 11.6772 7.05206 11.8375 7.05206 11.9998C7.05206 12.162 7.08716 12.3224 7.15495 12.4698C7.22274 12.6172 7.32162 12.7482 7.44481 12.8539L15.0911 19.406C15.8209 20.0314 16.9483 19.5129 16.9483 18.552V5.44573C16.9483 4.48479 15.8209 3.96635 15.0911 4.59354Z'
        fill={contentColor}
      />
    </Svg>
  )
}
