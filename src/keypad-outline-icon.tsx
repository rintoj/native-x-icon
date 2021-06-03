import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface KeypadOutlineIconProps {
  color?: string
  size?: IconSize
}

export function KeypadOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: KeypadOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 22.5C12.8284 22.5 13.5 21.8284 13.5 21C13.5 20.1716 12.8284 19.5 12 19.5C11.1716 19.5 10.5 20.1716 10.5 21C10.5 21.8284 11.1716 22.5 12 22.5Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M12 16.5C12.8284 16.5 13.5 15.8284 13.5 15C13.5 14.1716 12.8284 13.5 12 13.5C11.1716 13.5 10.5 14.1716 10.5 15C10.5 15.8284 11.1716 16.5 12 16.5Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M13.5 9C13.5 9.29667 13.412 9.58668 13.2472 9.83336C13.0824 10.08 12.8481 10.2723 12.574 10.3858C12.2999 10.4994 11.9983 10.5291 11.7074 10.4712C11.4164 10.4133 11.1491 10.2704 10.9393 10.0607C10.7296 9.85088 10.5867 9.58361 10.5288 9.29264C10.4709 9.00166 10.5006 8.70006 10.6142 8.42598C10.7277 8.15189 10.92 7.91762 11.1666 7.7528C11.4133 7.58797 11.7033 7.5 12 7.5C12.3978 7.5 12.7794 7.65804 13.0607 7.93934C13.342 8.22064 13.5 8.60218 13.5 9Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M12 4.5C12.8284 4.5 13.5 3.82843 13.5 3C13.5 2.17157 12.8284 1.5 12 1.5C11.1716 1.5 10.5 2.17157 10.5 3C10.5 3.82843 11.1716 4.5 12 4.5Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M18 16.5C18.8284 16.5 19.5 15.8284 19.5 15C19.5 14.1716 18.8284 13.5 18 13.5C17.1716 13.5 16.5 14.1716 16.5 15C16.5 15.8284 17.1716 16.5 18 16.5Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M18 10.5C18.8284 10.5 19.5 9.82843 19.5 9C19.5 8.17157 18.8284 7.5 18 7.5C17.1716 7.5 16.5 8.17157 16.5 9C16.5 9.82843 17.1716 10.5 18 10.5Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M18 4.5C18.8284 4.5 19.5 3.82843 19.5 3C19.5 2.17157 18.8284 1.5 18 1.5C17.1716 1.5 16.5 2.17157 16.5 3C16.5 3.82843 17.1716 4.5 18 4.5Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M6 16.5C6.82843 16.5 7.5 15.8284 7.5 15C7.5 14.1716 6.82843 13.5 6 13.5C5.17157 13.5 4.5 14.1716 4.5 15C4.5 15.8284 5.17157 16.5 6 16.5Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M6 10.5C6.82843 10.5 7.5 9.82843 7.5 9C7.5 8.17157 6.82843 7.5 6 7.5C5.17157 7.5 4.5 8.17157 4.5 9C4.5 9.82843 5.17157 10.5 6 10.5Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M6 4.5C6.82843 4.5 7.5 3.82843 7.5 3C7.5 2.17157 6.82843 1.5 6 1.5C5.17157 1.5 4.5 2.17157 4.5 3C4.5 3.82843 5.17157 4.5 6 4.5Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
    </Svg>
  )
}
