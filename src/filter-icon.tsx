import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FilterIconProps {
  color?: string
  size?: IconSize
}

export function FilterIcon({ size = 'normal', color = COLOR.SECONDARY }: FilterIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.125 7.875H1.875C1.57663 7.875 1.29048 7.75647 1.0795 7.5455C0.868526 7.33452 0.75 7.04837 0.75 6.75C0.75 6.45163 0.868526 6.16548 1.0795 5.9545C1.29048 5.74353 1.57663 5.625 1.875 5.625H22.125C22.4234 5.625 22.7095 5.74353 22.9205 5.9545C23.1315 6.16548 23.25 6.45163 23.25 6.75C23.25 7.04837 23.1315 7.33452 22.9205 7.5455C22.7095 7.75647 22.4234 7.875 22.125 7.875Z'
        fill={contentColor}
      />
      <Path
        d='M18.375 13.125H5.625C5.32663 13.125 5.04048 13.0065 4.8295 12.7955C4.61853 12.5845 4.5 12.2984 4.5 12C4.5 11.7016 4.61853 11.4155 4.8295 11.2045C5.04048 10.9935 5.32663 10.875 5.625 10.875H18.375C18.6734 10.875 18.9595 10.9935 19.1705 11.2045C19.3815 11.4155 19.5 11.7016 19.5 12C19.5 12.2984 19.3815 12.5845 19.1705 12.7955C18.9595 13.0065 18.6734 13.125 18.375 13.125Z'
        fill={contentColor}
      />
      <Path
        d='M13.875 18.375H10.125C9.82663 18.375 9.54048 18.2565 9.3295 18.0455C9.11853 17.8345 9 17.5484 9 17.25C9 16.9516 9.11853 16.6655 9.3295 16.4545C9.54048 16.2435 9.82663 16.125 10.125 16.125H13.875C14.1734 16.125 14.4595 16.2435 14.6705 16.4545C14.8815 16.6655 15 16.9516 15 17.25C15 17.5484 14.8815 17.8345 14.6705 18.0455C14.4595 18.2565 14.1734 18.375 13.875 18.375Z'
        fill={contentColor}
      />
    </Svg>
  )
}
