import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface EllipsisVerticalCircleIconProps {
  color?: string
  size?: IconSize
}

export function EllipsisVerticalCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: EllipsisVerticalCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 13.2188C12.6731 13.2188 13.2188 12.6731 13.2188 12C13.2188 11.3269 12.6731 10.7812 12 10.7812C11.3269 10.7812 10.7812 11.3269 10.7812 12C10.7812 12.6731 11.3269 13.2188 12 13.2188Z'
        fill={contentColor}
      />
      <Path
        d='M12 17.4375C12.6731 17.4375 13.2188 16.8918 13.2188 16.2188C13.2188 15.5457 12.6731 15 12 15C11.3269 15 10.7812 15.5457 10.7812 16.2188C10.7812 16.8918 11.3269 17.4375 12 17.4375Z'
        fill={contentColor}
      />
      <Path
        d='M12 9C12.6731 9 13.2188 8.45435 13.2188 7.78125C13.2188 7.10815 12.6731 6.5625 12 6.5625C11.3269 6.5625 10.7812 7.10815 10.7812 7.78125C10.7812 8.45435 11.3269 9 12 9Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.25 12C2.25 6.61704 6.61704 2.25 12 2.25C17.383 2.25 21.75 6.61704 21.75 12C21.75 17.383 17.383 21.75 12 21.75C6.61704 21.75 2.25 17.383 2.25 12ZM12 3.75C7.44546 3.75 3.75 7.44546 3.75 12C3.75 16.5545 7.44546 20.25 12 20.25C16.5545 20.25 20.25 16.5545 20.25 12C20.25 7.44546 16.5545 3.75 12 3.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
