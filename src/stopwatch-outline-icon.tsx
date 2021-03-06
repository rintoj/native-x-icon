import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface StopwatchOutlineIconProps {
  color?: string
  size?: IconSize
}

export function StopwatchOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: StopwatchOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 10.875V7.125'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 4.125V3.375'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6.1875 6.1875L5.625 5.625'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 14.25C12.8284 14.25 13.5 13.5784 13.5 12.75C13.5 11.9216 12.8284 11.25 12 11.25C11.1716 11.25 10.5 11.9216 10.5 12.75C10.5 13.5784 11.1716 14.25 12 14.25Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M12 4.5C10.3683 4.5 8.77325 4.98385 7.41655 5.89038C6.05984 6.7969 5.00242 8.08537 4.378 9.59286C3.75357 11.1004 3.5902 12.7592 3.90853 14.3595C4.22685 15.9598 5.01259 17.4298 6.16637 18.5836C7.32016 19.7374 8.79017 20.5232 10.3905 20.8415C11.9909 21.1598 13.6497 20.9964 15.1571 20.372C16.6646 19.7476 17.9531 18.6902 18.8596 17.3335C19.7662 15.9768 20.25 14.3817 20.25 12.75C20.25 10.562 19.3808 8.46354 17.8336 6.91637C16.2865 5.36919 14.188 4.5 12 4.5Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
    </Svg>
  )
}
