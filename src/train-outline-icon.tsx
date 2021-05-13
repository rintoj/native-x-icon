import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TrainOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TrainOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TrainOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.125 2.25H15C15 2.05109 14.921 1.86032 14.7803 1.71967C14.6397 1.57902 14.4489 1.5 14.25 1.5H9.75C9.55109 1.5 9.36032 1.57902 9.21967 1.71967C9.07902 1.86032 9 2.05109 9 2.25H7.875C7.17942 2.25198 6.51289 2.52918 6.02103 3.02103C5.52918 3.51289 5.25198 4.17942 5.25 4.875V16.4531C5.25 18.1078 12 19.5 12 19.5C12 19.5 18.75 18.1078 18.75 16.4531V4.875C18.75 4.17881 18.4734 3.51113 17.9812 3.01884C17.4889 2.52656 16.8212 2.25 16.125 2.25V2.25ZM12 16.5C11.555 16.5 11.12 16.368 10.75 16.1208C10.38 15.8736 10.0916 15.5222 9.92127 15.111C9.75097 14.6999 9.70642 14.2475 9.79323 13.811C9.88005 13.3746 10.0943 12.9737 10.409 12.659C10.7237 12.3443 11.1246 12.13 11.561 12.0432C11.9975 11.9564 12.4499 12.001 12.861 12.1713C13.2722 12.3416 13.6236 12.63 13.8708 13C14.118 13.37 14.25 13.805 14.25 14.25C14.25 14.8467 14.0129 15.419 13.591 15.841C13.169 16.2629 12.5967 16.5 12 16.5ZM16.5 9C16.5 9.19891 16.421 9.38968 16.2803 9.53033C16.1397 9.67098 15.9489 9.75 15.75 9.75H8.25C8.05109 9.75 7.86032 9.67098 7.71967 9.53033C7.57902 9.38968 7.5 9.19891 7.5 9V6C7.5 5.80109 7.57902 5.61032 7.71967 5.46967C7.86032 5.32902 8.05109 5.25 8.25 5.25H15.75C15.9489 5.25 16.1397 5.32902 16.2803 5.46967C16.421 5.61032 16.5 5.80109 16.5 6V9Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M6.75 21.75H17.25'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M15.75 20.25L18 22.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M8.25 20.25L6 22.5'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
