import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface UmbrellaOutlineIconProps {
  color?: string
  size?: IconSize
}

export function UmbrellaOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: UmbrellaOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 12.75V20.25C12 20.6478 11.842 21.0294 11.5607 21.3107C11.2794 21.592 10.8978 21.75 10.5 21.75C10.1022 21.75 9.72064 21.592 9.43934 21.3107C9.15804 21.0294 9 20.6478 9 20.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21.75 12.75C21.75 7.365 17.385 3 12 3C6.615 3 2.25 7.365 2.25 12.75C2.54547 12.4545 2.89624 12.2201 3.2823 12.0602C3.66836 11.9003 4.08213 11.818 4.5 11.818C4.91787 11.818 5.33164 11.9003 5.7177 12.0602C6.10376 12.2201 6.45453 12.4545 6.75 12.75C7.37455 12.1256 8.20336 11.7473 9.0843 11.6847C9.96524 11.6221 10.8392 11.8794 11.5458 12.4092L12 12.75L12.4542 12.4092C13.1608 11.8794 14.0348 11.6221 14.9157 11.6847C15.7966 11.7473 16.6254 12.1256 17.25 12.75V12.75C17.5455 12.4545 17.8962 12.2201 18.2823 12.0602C18.6684 11.9003 19.0821 11.818 19.5 11.818C19.9179 11.818 20.3316 11.9003 20.7177 12.0602C21.1038 12.2201 21.4545 12.4545 21.75 12.75V12.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M12 3V2.25' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
