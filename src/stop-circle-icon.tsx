import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface StopCircleIconProps {
  color?: string
  size?: IconSize
}

export function StopCircleIcon({ size = 'normal', color = COLOR.SECONDARY }: StopCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM15.75 14.55C15.7498 14.8682 15.6232 15.1733 15.3983 15.3983C15.1733 15.6232 14.8682 15.7498 14.55 15.75H9.45C9.13182 15.7498 8.82674 15.6232 8.60175 15.3983C8.37676 15.1733 8.25025 14.8682 8.25 14.55V9.45C8.25025 9.13182 8.37676 8.82674 8.60175 8.60175C8.82674 8.37676 9.13182 8.25025 9.45 8.25H14.55C14.8682 8.25025 15.1733 8.37676 15.3983 8.60175C15.6232 8.82674 15.7498 9.13182 15.75 9.45V14.55Z'
        fill={contentColor}
      />
    </Svg>
  )
}
