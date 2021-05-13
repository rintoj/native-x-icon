import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BookOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BookOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BookOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 7.49988C12.75 4.53926 15.5827 3.02754 21.75 2.99988C21.8486 2.99951 21.9463 3.01866 22.0375 3.05622C22.1286 3.09378 22.2114 3.14901 22.2812 3.21872C22.3509 3.28844 22.4061 3.37127 22.4437 3.46243C22.4812 3.55359 22.5004 3.65129 22.5 3.74988V17.2499C22.5 17.4488 22.421 17.6396 22.2803 17.7802C22.1397 17.9209 21.9489 17.9999 21.75 17.9999C15.75 17.9999 13.432 19.2097 12 20.9999C10.5764 19.2186 8.25001 17.9999 2.25001 17.9999C1.78688 17.9999 1.50001 17.6225 1.50001 17.1594V3.74988C1.49963 3.65129 1.51878 3.55359 1.55634 3.46243C1.5939 3.37127 1.64913 3.28844 1.71885 3.21872C1.78856 3.14901 1.87139 3.09378 1.96255 3.05622C2.05372 3.01866 2.15141 2.99951 2.25001 2.99988C8.41735 3.02754 11.25 4.53926 12 7.49988Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path d='M12 7.5V21' stroke={contentColor} stroke-linecap='round' stroke-linejoin='round' />
    </Svg>
  )
}
