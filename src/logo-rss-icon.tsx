import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoRssIconProps {
  color?: string
  size?: IconSize
}

export function LogoRssIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoRssIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M5.08876 16.0685C4.52999 16.0705 3.98434 16.238 3.52067 16.5498C3.05699 16.8617 2.69606 17.3038 2.48343 17.8206C2.27079 18.3373 2.21598 18.9054 2.3259 19.4533C2.43581 20.0012 2.70554 20.5042 3.10105 20.8989C3.49655 21.2936 4.00011 21.5623 4.54818 21.6712C5.09625 21.78 5.66428 21.7241 6.18059 21.5104C6.6969 21.2967 7.13836 20.9349 7.44926 20.4707C7.76016 20.0064 7.92658 19.4604 7.92751 18.9016C7.92515 18.15 7.62514 17.4299 7.09312 16.8989C6.5611 16.3679 5.8404 16.0693 5.08876 16.0685Z'
        fill={contentColor}
      />
      <Path
        d='M2.25 8.75024V12.8073C4.6875 12.8073 7.02844 13.5287 8.75016 15.2499C10.4719 16.9712 11.1877 19.3074 11.1877 21.7501H15.2498C15.2498 14.6457 9.35953 8.75024 2.25 8.75024Z'
        fill={contentColor}
      />
      <Path
        d='M2.25 2.25V6.3075C10.9336 6.3075 17.6822 13.0612 17.6822 21.75H21.75C21.75 10.9997 13.0158 2.25 2.25 2.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
