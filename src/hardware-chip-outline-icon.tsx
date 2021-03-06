import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HardwareChipOutlineIconProps {
  color?: string
  size?: IconSize
}

export function HardwareChipOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: HardwareChipOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 19.2426 4.75736 20.25 6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V6C20.25 4.75736 19.2426 3.75 18 3.75Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M16.5 6.75H7.5C7.08579 6.75 6.75 7.08579 6.75 7.5V16.5C6.75 16.9142 7.08579 17.25 7.5 17.25H16.5C16.9142 17.25 17.25 16.9142 17.25 16.5V7.5C17.25 7.08579 16.9142 6.75 16.5 6.75Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path d='M12 3.75V2.25' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M15.75 3.75V2.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8.25 3.75V2.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 21.75V20.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.75 21.75V20.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8.25 21.75V20.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M20.25 12H21.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M20.25 15.75H21.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M20.25 8.25H21.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M2.25 12H3.75' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M2.25 15.75H3.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M2.25 8.25H3.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
