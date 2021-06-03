import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface DocumentAttachOutlineIconProps {
  color?: string
  size?: IconSize
}

export function DocumentAttachOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: DocumentAttachOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M9.75 3H12.8789C13.2766 3.00006 13.658 3.15804 13.9392 3.43922L20.5608 10.0608C20.842 10.342 20.9999 10.7234 21 11.1211V20.25C21 20.8467 20.7629 21.419 20.341 21.841C19.919 22.2629 19.3467 22.5 18.75 22.5H9C8.40326 22.5 7.83097 22.2629 7.40901 21.841C6.98705 21.419 6.75 20.8467 6.75 20.25V14.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M13.5 3.375V9C13.5 9.39782 13.658 9.77936 13.9393 10.0607C14.2206 10.342 14.6022 10.5 15 10.5H20.625'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.5 3.75V10.875C7.50195 11.0233 7.47419 11.1704 7.41834 11.3078C7.3625 11.4452 7.27971 11.57 7.17485 11.6748C7.06999 11.7797 6.94519 11.8625 6.80782 11.9183C6.67045 11.9742 6.52328 12.002 6.375 12C5.8125 12 5.25 11.5734 5.25 10.875V4.125C5.25 2.69109 6.02672 1.5 7.5 1.5C8.97328 1.5 9.75 2.6625 9.75 4.09594V10.5998C9.75 12.6155 8.44594 14.25 6.375 14.25C4.30406 14.25 3 12.6159 3 10.5998V6.75'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}
