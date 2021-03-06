import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LibraryOutlineIconProps {
  color?: string
  size?: IconSize
}

export function LibraryOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LibraryOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M3.75 4.5H2.25C1.83579 4.5 1.5 4.83579 1.5 5.25V21C1.5 21.4142 1.83579 21.75 2.25 21.75H3.75C4.16421 21.75 4.5 21.4142 4.5 21V5.25C4.5 4.83579 4.16421 4.5 3.75 4.5Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M5.25 10.5H11.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M5.25 18.75H11.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M10.5 7.5H6C5.58579 7.5 5.25 7.83579 5.25 8.25V21C5.25 21.4142 5.58579 21.75 6 21.75H10.5C10.9142 21.75 11.25 21.4142 11.25 21V8.25C11.25 7.83579 10.9142 7.5 10.5 7.5Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M15.75 2.25H12.75C12.3358 2.25 12 2.58579 12 3V21C12 21.4142 12.3358 21.75 12.75 21.75H15.75C16.1642 21.75 16.5 21.4142 16.5 21V3C16.5 2.58579 16.1642 2.25 15.75 2.25Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M19.8028 4.5053L17.9091 4.70452C17.3878 4.75936 17.01 5.24686 17.0686 5.78733L18.7055 20.8619C18.7645 21.4023 19.2385 21.7994 19.7597 21.745L21.6534 21.5458C22.1747 21.4909 22.5525 21.0034 22.4939 20.463L20.8594 5.39077C20.798 4.84796 20.3241 4.45046 19.8028 4.5053Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
    </Svg>
  )
}
