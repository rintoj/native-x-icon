import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface UnlinkOutlineIconProps {
  color?: string
  size?: IconSize
}

export function UnlinkOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: UnlinkOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M9.75 16.5H6.75C5.55653 16.5 4.41193 16.0259 3.56802 15.182C2.72411 14.3381 2.25 13.1935 2.25 12C2.25 10.8065 2.72411 9.66193 3.56802 8.81802C4.41193 7.97411 5.55653 7.5 6.75 7.5H9.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M14.25 7.5H17.25C18.4435 7.5 19.5881 7.97411 20.432 8.81802C21.2759 9.66193 21.75 10.8065 21.75 12C21.75 13.1935 21.2759 14.3381 20.432 15.182C19.5881 16.0259 18.4435 16.5 17.25 16.5H14.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
