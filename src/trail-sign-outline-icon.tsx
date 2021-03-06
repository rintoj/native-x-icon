import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TrailSignOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TrailSignOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TrailSignOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 18.75V21.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M12 9.75V12.75' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M12 2.25V3.75' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M19.5 9.75H4.81078C4.71223 9.75002 4.61464 9.73061 4.52359 9.69289C4.43254 9.65516 4.34982 9.59987 4.28016 9.53016L1.5 6.75L4.28016 3.96984C4.34982 3.90013 4.43254 3.84484 4.52359 3.80711C4.61464 3.76939 4.71223 3.74998 4.81078 3.75H19.5C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V9C20.25 9.19891 20.171 9.38968 20.0303 9.53033C19.8897 9.67098 19.6989 9.75 19.5 9.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M4.5 18.75H19.1892C19.2878 18.75 19.3854 18.7306 19.4764 18.6929C19.5675 18.6552 19.6502 18.5999 19.7198 18.5302L22.5 15.75L19.7198 12.9698C19.6502 12.9001 19.5675 12.8448 19.4764 12.8071C19.3854 12.7694 19.2878 12.75 19.1892 12.75H4.5C4.30109 12.75 4.11032 12.829 3.96967 12.9697C3.82902 13.1103 3.75 13.3011 3.75 13.5V18C3.75 18.1989 3.82902 18.3897 3.96967 18.5303C4.11032 18.671 4.30109 18.75 4.5 18.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
