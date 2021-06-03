import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HandLeftOutlineIconProps {
  color?: string
  size?: IconSize
}

export function HandLeftOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: HandLeftOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M3.75 15V6.75C3.75 6.35218 3.90804 5.97064 4.18934 5.68934C4.47064 5.40804 4.85218 5.25 5.25 5.25V5.25C5.64782 5.25 6.02936 5.40804 6.31066 5.68934C6.59196 5.97064 6.75 6.35218 6.75 6.75V12'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6.75 12V3.75C6.75 3.35218 6.90804 2.97064 7.18934 2.68934C7.47064 2.40804 7.85218 2.25 8.25 2.25C8.64782 2.25 9.02936 2.40804 9.31066 2.68934C9.59196 2.97064 9.75 3.35218 9.75 3.75V11.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12.75 11.2969V4.5C12.75 4.10218 12.908 3.72064 13.1893 3.43934C13.4706 3.15804 13.8522 3 14.25 3V3C14.6478 3 15.0294 3.15804 15.3107 3.43934C15.592 3.72064 15.75 4.10218 15.75 4.5V15'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M9.75 11.25V2.25C9.75 1.85218 9.90804 1.47064 10.1893 1.18934C10.4706 0.908035 10.8522 0.75 11.25 0.75C11.6478 0.75 12.0294 0.908035 12.3107 1.18934C12.592 1.47064 12.75 1.85218 12.75 2.25V11.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M3.75 14.9995C3.75 20.5027 6.75 23.2495 10.875 23.2495C15 23.2495 16.6739 21.3933 17.625 19.1245L20.0958 12.3745C20.408 11.5284 20.2664 10.7438 19.5394 10.3308C18.8119 9.91734 17.8561 10.1302 17.4623 10.8783L15.75 14.9995'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
