import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ArrowDownIconProps {
  color?: string
  size?: IconSize
}

export function ArrowDownIcon({ size = 'normal', color = COLOR.SECONDARY }: ArrowDownIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M4.4545 11.767C4.89384 11.3277 5.60616 11.3277 6.0455 11.767L12 17.7215L17.9545 11.767C18.3938 11.3277 19.1062 11.3277 19.5455 11.767C19.9848 12.2063 19.9848 12.9187 19.5455 13.358L12.7955 20.108C12.3562 20.5473 11.6438 20.5473 11.2045 20.108L4.4545 13.358C4.01517 12.9187 4.01517 12.2063 4.4545 11.767Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M12 3.5625C12.6213 3.5625 13.125 4.06618 13.125 4.6875V18.375C13.125 18.9963 12.6213 19.5 12 19.5C11.3787 19.5 10.875 18.9963 10.875 18.375V4.6875C10.875 4.06618 11.3787 3.5625 12 3.5625Z'
        fill={contentColor}
      />
    </Svg>
  )
}
