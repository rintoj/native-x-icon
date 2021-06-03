import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MicOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MicOutlineIcon({ size = 'normal', color = COLOR.SECONDARY }: MicOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path d='M9 21H15' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M18 9.75V11.25C18 14.55 15.3 17.25 12 17.25C8.7 17.25 6 14.55 6 11.25V9.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M12 17.25V21' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M12.0002 3.00016C11.6056 2.99817 11.2146 3.07441 10.8498 3.22447C10.4849 3.37453 10.1534 3.59544 9.87441 3.87441C9.59544 4.15338 9.37453 4.48489 9.22447 4.84976C9.07441 5.21464 8.99817 5.60564 9.00016 6.00016V11.2033C9.00016 12.8533 10.3595 14.2502 12.0002 14.2502C13.6408 14.2502 15.0002 12.8908 15.0002 11.2033V6.00016C15.0002 4.31266 13.6877 3.00016 12.0002 3.00016Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
