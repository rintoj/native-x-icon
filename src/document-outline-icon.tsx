import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface DocumentOutlineIconProps {
  color?: string
  size?: IconSize
}

export function DocumentOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: DocumentOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.5 10.3711V19.5C19.5 20.0967 19.2629 20.669 18.841 21.091C18.419 21.5129 17.8467 21.75 17.25 21.75H6.75C6.15326 21.75 5.58097 21.5129 5.15901 21.091C4.73705 20.669 4.5 20.0967 4.5 19.5V4.5C4.5 3.90326 4.73705 3.33097 5.15901 2.90901C5.58097 2.48705 6.15326 2.25 6.75 2.25H11.3789C11.7766 2.25006 12.158 2.40804 12.4392 2.68922L19.0608 9.31078C19.342 9.59202 19.4999 9.97341 19.5 10.3711Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M12 2.625V8.25C12 8.64782 12.158 9.02936 12.4393 9.31066C12.7206 9.59196 13.1022 9.75 13.5 9.75H19.125'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
