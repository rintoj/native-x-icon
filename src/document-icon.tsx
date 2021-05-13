import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface DocumentIconProps {
  color?: string
  size?: IconSize
}

export function DocumentIcon({ size = 'normal', color = COLOR.SECONDARY }: DocumentIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.0625 10.5H13.5C12.9033 10.5 12.331 10.2629 11.909 9.84099C11.4871 9.41903 11.25 8.84674 11.25 8.25V1.6875C11.25 1.63777 11.2302 1.59008 11.1951 1.55492C11.1599 1.51975 11.1122 1.5 11.0625 1.5H6.75C5.95435 1.5 5.19129 1.81607 4.62868 2.37868C4.06607 2.94129 3.75 3.70435 3.75 4.5V19.5C3.75 20.2956 4.06607 21.0587 4.62868 21.6213C5.19129 22.1839 5.95435 22.5 6.75 22.5H17.25C18.0456 22.5 18.8087 22.1839 19.3713 21.6213C19.9339 21.0587 20.25 20.2956 20.25 19.5V10.6875C20.25 10.6378 20.2302 10.5901 20.1951 10.5549C20.1599 10.5198 20.1122 10.5 20.0625 10.5Z'
        fill={contentColor}
      />
      <Path
        d='M19.6509 8.84026L12.9098 2.09916C12.8967 2.08613 12.8801 2.07726 12.8619 2.07368C12.8438 2.07009 12.825 2.07195 12.8079 2.07901C12.7908 2.08608 12.7762 2.09803 12.7659 2.11338C12.7556 2.12872 12.7501 2.14677 12.75 2.16526V8.2501C12.75 8.44901 12.829 8.63978 12.9697 8.78043C13.1103 8.92108 13.3011 9.0001 13.5 9.0001H19.5848C19.6033 9.00002 19.6214 8.99448 19.6367 8.98417C19.6521 8.97387 19.664 8.95925 19.6711 8.94217C19.6781 8.92509 19.68 8.9063 19.6764 8.88817C19.6728 8.87003 19.664 8.85336 19.6509 8.84026Z'
        fill={contentColor}
      />
    </Svg>
  )
}
