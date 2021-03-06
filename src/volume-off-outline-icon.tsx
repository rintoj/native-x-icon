import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface VolumeOffOutlineIconProps {
  color?: string
  size?: IconSize
}

export function VolumeOffOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: VolumeOffOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M11.1398 9.00055H7.875C7.77554 9.00055 7.68016 9.04006 7.60983 9.11039C7.53951 9.18071 7.5 9.2761 7.5 9.37555V14.6256C7.5 14.725 7.53951 14.8204 7.60983 14.8907C7.68016 14.961 7.77554 15.0006 7.875 15.0006H11.1398C11.3132 15.0006 11.4811 15.0608 11.6152 15.1707L15.9028 18.6863C15.9587 18.7275 16.025 18.7523 16.0941 18.758C16.1633 18.7637 16.2327 18.7501 16.2946 18.7187C16.3565 18.6873 16.4085 18.6394 16.4448 18.5802C16.481 18.521 16.5001 18.4529 16.5 18.3835V5.61758C16.5 5.54826 16.4807 5.4803 16.4444 5.42126C16.4081 5.36222 16.3561 5.3144 16.2942 5.28313C16.2323 5.25185 16.163 5.23834 16.0939 5.24409C16.0248 5.24984 15.9587 5.27463 15.9028 5.31571L11.6152 8.83133C11.481 8.94094 11.3131 9.00073 11.1398 9.00055Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
