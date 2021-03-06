import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface AmericanFootballOutlineIconProps {
  color?: string
  size?: IconSize
}

export function AmericanFootballOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: AmericanFootballOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <G clipPath='url(#clip0)'>
        <Path
          d='M17.7488 17.7488C22.6469 12.8507 24.0437 6.30622 20.8688 3.13125C17.6938 -0.0437089 11.1493 1.35316 6.25123 6.25125C1.35313 11.1493 -0.0437373 17.6939 3.13123 20.8688C6.30619 24.0438 12.8507 22.6469 17.7488 17.7488Z'
          stroke={contentColor}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M15.6582 8.34192L8.34192 15.6582'
          stroke={contentColor}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M13.0451 13.0454L10.9545 10.9547'
          stroke={contentColor}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M15.1356 10.9547L13.0455 8.86455'
          stroke={contentColor}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M21.4068 9.90943L14.0905 2.59318'
          stroke={contentColor}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M9.90933 21.4069L2.59308 14.0907'
          stroke={contentColor}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M10.9546 15.1354L8.86444 13.0453'
          stroke={contentColor}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </G>
      <Defs>
        <ClipPath id='clip0'>
          <Rect width='24' height='24' fill={contentColor} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
