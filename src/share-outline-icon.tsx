import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ShareOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ShareOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ShareOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.75 9H17.625C18.1223 9 18.5992 9.19754 18.9508 9.54917C19.3025 9.90081 19.5 10.3777 19.5 10.875V19.875C19.5 20.3723 19.3025 20.8492 18.9508 21.2008C18.5992 21.5525 18.1223 21.75 17.625 21.75H6.375C5.87772 21.75 5.40081 21.5525 5.04917 21.2008C4.69754 20.8492 4.5 20.3723 4.5 19.875V10.875C4.5 10.3777 4.69754 9.90081 5.04917 9.54917C5.40081 9.19754 5.87772 9 6.375 9H8.25'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M15.75 6L12 2.25L8.25 6'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12 15.0469V2.25'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
