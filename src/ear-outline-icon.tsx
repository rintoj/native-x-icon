import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface EarOutlineIconProps {
  color?: string
  size?: IconSize
}

export function EarOutlineIcon({ size = 'normal', color = COLOR.SECONDARY }: EarOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.7369 15.5044C17.8936 14.0391 19.5 11.7816 19.5 9C19.5 7.01088 18.7098 5.10322 17.3033 3.6967C15.8968 2.29018 13.9891 1.5 12 1.5C10.0109 1.5 8.10322 2.29018 6.6967 3.6967C5.29018 5.10322 4.5 7.01088 4.5 9V18.683C4.5 20.7577 6.17531 22.5 8.25 22.5C10.3247 22.5 11.3827 21.2841 11.873 20.625C12.5653 19.6964 13.8281 16.8019 15.7369 15.5044Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.5 14.25V8.625C7.5 6.35625 9.525 4.5 12 4.5C14.475 4.5 16.5 6.35625 16.5 8.625'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.5 11.2031C8.67188 10.3594 11.2416 10.5 11.2416 10.5C12.4603 10.5 13.1714 11.8791 12.4603 12.8719C12.4603 12.8719 10.7325 14.8594 10.4981 15.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}