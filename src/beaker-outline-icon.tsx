import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BeakerOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BeakerOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BeakerOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.8688 2.25234L18.6562 2.25H6C3.45469 2.25 3 3.92344 3 4.5C4.42031 4.69687 5.25 4.875 5.25 6.375V18.75C5.25 19.5456 5.56607 20.3087 6.12868 20.8713C6.69129 21.4339 7.45435 21.75 8.25 21.75H17.25C18.0456 21.75 18.8087 21.4339 19.3713 20.8713C19.9339 20.3087 20.25 19.5456 20.25 18.75V4.5C20.25 3.60938 20.7891 2.70234 20.8406 2.625C20.8969 2.53594 21 2.41875 21 2.36719C21 2.31562 20.9859 2.25234 20.8688 2.25234Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M5.25 8.25H20.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
