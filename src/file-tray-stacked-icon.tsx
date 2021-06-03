import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FileTrayStackedIconProps {
  color?: string
  size?: IconSize
}

export function FileTrayStackedIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: FileTrayStackedIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.75 16.5H15C14.8011 16.5 14.6103 16.579 14.4697 16.7197C14.329 16.8603 14.25 17.0511 14.25 17.25C14.25 17.8467 14.0129 18.419 13.591 18.841C13.169 19.2629 12.5967 19.5 12 19.5C11.4033 19.5 10.831 19.2629 10.409 18.841C9.98705 18.419 9.75 17.8467 9.75 17.25C9.75 17.0511 9.67098 16.8603 9.53033 16.7197C9.38968 16.579 9.19891 16.5 9 16.5H2.25C2.05109 16.5 1.86032 16.579 1.71967 16.7197C1.57902 16.8603 1.5 17.0511 1.5 17.25V20.25C1.50087 21.0454 1.81722 21.8079 2.37964 22.3704C2.94206 22.9328 3.70462 23.2491 4.5 23.25H19.5C20.2954 23.2491 21.0579 22.9328 21.6204 22.3704C22.1828 21.8079 22.4991 21.0454 22.5 20.25V17.25C22.5 17.0511 22.421 16.8603 22.2803 16.7197C22.1397 16.579 21.9489 16.5 21.75 16.5Z'
        fill={contentColor}
      />
      <Path
        d='M22.4747 8.80688L20.9817 3.20859C20.6845 1.66828 19.5722 0.75 18 0.75H6C5.2125 0.75 4.54688 0.969844 4.02656 1.40344C3.50625 1.83703 3.17156 2.4375 3.01875 3.20625L1.52531 8.80688C1.50846 8.86987 1.49995 8.93479 1.5 9V11.25C1.5 12.9042 2.84578 15 4.5 15H19.5C21.1542 15 22.5 12.9042 22.5 11.25V9C22.5 8.93479 22.4915 8.86987 22.4747 8.80688ZM20.6517 8.25H15C14.8022 8.249 14.6122 8.32654 14.4715 8.46559C14.3309 8.60463 14.2512 8.79381 14.25 8.99156C14.25 9.5883 14.0129 10.1606 13.591 10.5826C13.169 11.0045 12.5967 11.2416 12 11.2416C11.4033 11.2416 10.831 11.0045 10.409 10.5826C9.98705 10.1606 9.75 9.5883 9.75 8.99156C9.74876 8.79381 9.66908 8.60463 9.52845 8.46559C9.38782 8.32654 9.19776 8.249 9 8.25H3.34828C3.3339 8.24999 3.31971 8.24667 3.30681 8.2403C3.29391 8.23393 3.28266 8.22467 3.27391 8.21325C3.26516 8.20183 3.25916 8.18855 3.25637 8.17444C3.25358 8.16033 3.25407 8.14576 3.25781 8.13188L4.48641 3.51562C4.65281 2.65266 5.13375 2.25 6 2.25H18C18.8714 2.25 19.3519 2.64984 19.5117 3.50859L20.7422 8.13188C20.7459 8.14576 20.7464 8.16033 20.7436 8.17444C20.7408 8.18855 20.7348 8.20183 20.7261 8.21325C20.7173 8.22467 20.7061 8.23393 20.6932 8.2403C20.6803 8.24667 20.6661 8.24999 20.6517 8.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}