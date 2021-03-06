import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MapOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MapOutlineIcon({ size = 'normal', color = COLOR.SECONDARY }: MapOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M14.6845 5.84234L9.31547 2.40734C9.1019 2.30066 8.86595 2.24649 8.62723 2.24934C8.38852 2.2522 8.15393 2.31199 7.94297 2.42375L2.64891 5.97593C2.52846 6.03974 2.42769 6.13516 2.3574 6.25194C2.28712 6.36872 2.24999 6.50245 2.25 6.63875V20.5044C2.24999 20.6337 2.28343 20.7609 2.34707 20.8735C2.41071 20.9861 2.50239 21.0803 2.6132 21.147C2.72402 21.2137 2.8502 21.2506 2.97949 21.2542C3.10879 21.2577 3.2368 21.2277 3.35109 21.1672L7.93641 18.177C8.14909 18.0644 8.38576 18.0045 8.62644 18.0025C8.86712 18.0006 9.10473 18.0566 9.31922 18.1658L14.5627 21.5877C14.7753 21.696 15.0107 21.752 15.2493 21.7511C15.4879 21.7502 15.7229 21.6924 15.9347 21.5825L21.3455 18.0228C21.4674 17.9595 21.5696 17.864 21.6409 17.7466C21.7123 17.6293 21.75 17.4945 21.75 17.3572V3.49531C21.75 3.36597 21.7166 3.23882 21.6529 3.12622C21.5893 3.01361 21.4976 2.91938 21.3868 2.85268C21.276 2.78597 21.1498 2.74906 21.0205 2.74552C20.8912 2.74199 20.7632 2.77195 20.6489 2.8325L16.0552 5.82593C15.8444 5.93738 15.6102 5.997 15.3718 5.99985C15.1335 6.00271 14.8979 5.94871 14.6845 5.84234Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.375 6V21.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M8.625 2.25V18' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
