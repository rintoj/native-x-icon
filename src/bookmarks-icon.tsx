import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BookmarksIconProps {
  color?: string
  size?: IconSize
}

export function BookmarksIcon({ size = 'normal', color = COLOR.SECONDARY }: BookmarksIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <G clip-path='url(#clip0)'>
        <Path
          d='M18.75 0H8.25C7.58488 0.00054868 6.93873 0.221737 6.4128 0.628907C5.88687 1.03608 5.51089 1.60622 5.34375 2.25H16.0312C16.9512 2.25 17.8335 2.61546 18.484 3.26597C19.1345 3.91649 19.5 4.79878 19.5 5.71875V20.0105L20.5312 20.8355C20.6591 20.9378 20.8169 20.9955 20.9806 20.9997C21.1443 21.004 21.3049 20.9545 21.4378 20.8589C21.536 20.7864 21.6156 20.6915 21.6699 20.5821C21.7242 20.4727 21.7516 20.352 21.75 20.2298V3C21.75 2.20435 21.4339 1.44129 20.8713 0.87868C20.3087 0.316071 19.5456 0 18.75 0V0Z'
          fill={contentColor}
        />
        <Path
          d='M15.0001 3.75H5.25009C4.45444 3.75 3.69138 4.06607 3.12877 4.62868C2.56616 5.19129 2.25009 5.95435 2.25009 6.75V23.2322C2.24824 23.3538 2.27533 23.474 2.32912 23.5831C2.38291 23.6922 2.46187 23.7868 2.55946 23.8594C2.69505 23.9578 2.8597 24.0081 3.02715 24.002C3.19461 23.996 3.35522 23.9341 3.48337 23.8261L10.1251 18.2306L16.7668 23.8237C16.8941 23.931 17.0535 23.9929 17.2198 23.9996C17.3862 24.0063 17.55 23.9575 17.6856 23.8608C17.7844 23.7884 17.8645 23.6935 17.9192 23.5839C17.9739 23.4743 18.0016 23.3533 18.0001 23.2308V6.75C18.0001 5.95435 17.684 5.19129 17.1214 4.62868C16.5588 4.06607 15.7957 3.75 15.0001 3.75Z'
          fill={contentColor}
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
