import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BugOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BugOutlineIcon({ size = 'normal', color = COLOR.SECONDARY }: BugOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.3438 17.7188C18.698 18.8213 19.5 19.8783 19.5 21.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6.65625 17.7188C5.30203 18.8213 4.5 19.8778 4.5 21.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18 9.75C19.3542 8.6475 19.5 7.12172 19.5 5.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6 9.65625C4.64578 8.55375 4.5 7.12219 4.5 5.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21.75 13.5062H18'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6 13.5062H2.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M12 9V21' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M12 20.9999C8.7 20.9999 6 18.2999 6 14.9999V10.4966C6 7.44643 8.7 5.99658 12 5.99658C15.3 5.99658 18 7.19658 18 10.4966V14.9999C18 18.2999 15.3 20.9999 12 20.9999Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8.41078 6.7275C8.31697 6.49224 8.26264 6.24311 8.25 5.99016C8.2526 4.999 8.64748 4.04919 9.34834 3.34834C10.0492 2.64748 10.999 2.2526 11.9902 2.25H12.0098C13.001 2.2526 13.9508 2.64748 14.6517 3.34834C15.3525 4.04919 15.7474 4.999 15.75 5.99016C15.7409 6.22044 15.6914 6.44734 15.6038 6.66047'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
