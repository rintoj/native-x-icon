import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ArrowUpIconProps {
  color?: string
  size?: IconSize
}

export function ArrowUpIcon({ size = 'normal', color = COLOR.SECONDARY }: ArrowUpIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.2045 3.892C11.6438 3.45267 12.3562 3.45267 12.7955 3.892L19.5455 10.642C19.9848 11.0813 19.9848 11.7937 19.5455 12.233C19.1062 12.6723 18.3938 12.6723 17.9545 12.233L12 6.27849L6.0455 12.233C5.60616 12.6723 4.89384 12.6723 4.4545 12.233C4.01517 11.7937 4.01517 11.0813 4.4545 10.642L11.2045 3.892Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 4.5C12.6213 4.5 13.125 5.00368 13.125 5.625V19.3125C13.125 19.9338 12.6213 20.4375 12 20.4375C11.3787 20.4375 10.875 19.9338 10.875 19.3125V5.625C10.875 5.00368 11.3787 4.5 12 4.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
