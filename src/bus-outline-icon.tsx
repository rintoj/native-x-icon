import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BusOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BusOutlineIcon({ size = 'normal', color = COLOR.SECONDARY }: BusOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.75 5.25H5.25C4.42157 5.25 3.75 5.92157 3.75 6.75V12.75C3.75 13.5784 4.42157 14.25 5.25 14.25H18.75C19.5784 14.25 20.25 13.5784 20.25 12.75V6.75C20.25 5.92157 19.5784 5.25 18.75 5.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18.75 14.25H5.25C4.42157 14.25 3.75 14.9216 3.75 15.75V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25H18.75C19.5784 20.25 20.25 19.5784 20.25 18.75V15.75C20.25 14.9216 19.5784 14.25 18.75 14.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18.75 5.25H5.25C4.85252 5.24889 4.47163 5.09049 4.19057 4.80943C3.90951 4.52837 3.75111 4.14748 3.75 3.75V3.75C3.75111 3.35252 3.90951 2.97163 4.19057 2.69057C4.47163 2.40951 4.85252 2.25111 5.25 2.25H18.75C19.1475 2.25111 19.5284 2.40951 19.8094 2.69057C20.0905 2.97163 20.2489 3.35252 20.25 3.75V3.75C20.2489 4.14748 20.0905 4.52837 19.8094 4.80943C19.5284 5.09049 19.1475 5.24889 18.75 5.25V5.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6.75 20.25V21.2812C6.75 21.4056 6.70061 21.5248 6.61271 21.6127C6.5248 21.7006 6.40557 21.75 6.28125 21.75H4.96875C4.84443 21.75 4.7252 21.7006 4.63729 21.6127C4.54939 21.5248 4.5 21.4056 4.5 21.2812V20.25H6.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M19.5 20.25V21.2812C19.5 21.4056 19.4506 21.5248 19.3627 21.6127C19.2748 21.7006 19.1556 21.75 19.0312 21.75H17.7188C17.5944 21.75 17.4752 21.7006 17.3873 21.6127C17.2994 21.5248 17.25 21.4056 17.25 21.2812V20.25H19.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M17.25 18C17.6642 18 18 17.6642 18 17.25C18 16.8358 17.6642 16.5 17.25 16.5C16.8358 16.5 16.5 16.8358 16.5 17.25C16.5 17.6642 16.8358 18 17.25 18Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M6.75 18C7.16421 18 7.5 17.6642 7.5 17.25C7.5 16.8358 7.16421 16.5 6.75 16.5C6.33579 16.5 6 16.8358 6 17.25C6 17.6642 6.33579 18 6.75 18Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path d='M12 5.25V14.25' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M3.75 3.75V17.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M20.25 3.75V17.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
