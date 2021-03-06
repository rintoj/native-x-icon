import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BeakerIconProps {
  color?: string
  size?: IconSize
}

export function BeakerIcon({ size = 'normal', color = COLOR.SECONDARY }: BeakerIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.8125 1.5H6C5.09156 1.5 3.84844 1.70344 2.99484 2.66109C2.44547 3.2775 2.25 4.01531 2.25 4.5C2.24998 4.68106 2.31546 4.85602 2.43435 4.99258C2.55325 5.12914 2.71753 5.21807 2.89687 5.24297C4.29844 5.4375 4.5 5.52141 4.5 6.375V18.75C4.50087 19.7443 4.89624 20.6976 5.59931 21.4007C6.30238 22.1038 7.2557 22.4991 8.25 22.5H17.25C18.2441 22.4986 19.1972 22.1031 19.9001 21.4001C20.6031 20.6972 20.9986 19.7441 21 18.75V4.5C21 3.91172 21.3497 3.22266 21.4688 3.03L21.4734 3.02344C21.4837 3.00703 21.4969 2.98969 21.51 2.97188C21.6038 2.84109 21.7486 2.64375 21.7486 2.36484C21.75 1.86516 21.323 1.5 20.8125 1.5ZM3.94266 3.89438C4.18828 3.47859 4.7475 3.00375 6.01875 3.00375H19.8202C19.6547 3.41578 19.5 3.95016 19.5 4.5V7.5H6V6.375C6 4.62563 4.99922 4.11844 3.94266 3.89438Z'
        fill={contentColor}
      />
    </Svg>
  )
}
