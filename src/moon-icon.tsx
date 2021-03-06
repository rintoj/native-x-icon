import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MoonIconProps {
  color?: string
  size?: IconSize
}

export function MoonIcon({ size = 'normal', color = COLOR.SECONDARY }: MoonIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.375 22.4995C9.49077 22.4995 6.72467 21.3538 4.68521 19.3143C2.64576 17.2748 1.5 14.5087 1.5 11.6245C1.5 7.21826 4.03125 3.26763 7.95047 1.56185C8.0886 1.50165 8.24165 1.48445 8.3897 1.51249C8.53774 1.54053 8.6739 1.61252 8.78045 1.71906C8.88699 1.8256 8.95897 1.96177 8.98701 2.10981C9.01506 2.25785 8.99786 2.41091 8.93766 2.54904C8.48766 3.58216 8.25 4.90544 8.25 6.37451C8.25 11.5439 12.4556 15.7495 17.625 15.7495C19.0941 15.7495 20.4173 15.5118 21.4505 15.0618C21.5886 15.0016 21.7417 14.9845 21.8897 15.0125C22.0377 15.0405 22.1739 15.1125 22.2804 15.2191C22.387 15.3256 22.459 15.4618 22.487 15.6098C22.5151 15.7579 22.4979 15.9109 22.4377 16.049C20.7319 19.9683 16.7813 22.4995 12.375 22.4995Z'
        fill={contentColor}
      />
    </Svg>
  )
}
