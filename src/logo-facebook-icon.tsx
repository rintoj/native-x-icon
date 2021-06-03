import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoFacebookIconProps {
  color?: string
  size?: IconSize
}

export function LogoFacebookIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoFacebookIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.5 12.0637C22.5 6.26522 17.7984 1.56366 12 1.56366C6.20156 1.56366 1.5 6.26522 1.5 12.0637C1.5 17.3043 5.33906 21.6482 10.3594 22.4366V15.0998H7.69266V12.0637H10.3594V9.75038C10.3594 7.11928 11.9273 5.66475 14.3255 5.66475C15.4744 5.66475 16.6763 5.87007 16.6763 5.87007V8.45428H15.3516C14.048 8.45428 13.6402 9.26335 13.6402 10.0949V12.0637H16.552L16.087 15.0998H13.6406V22.4376C18.6609 21.6496 22.5 17.3057 22.5 12.0637Z'
        fill={contentColor}
      />
    </Svg>
  )
}
