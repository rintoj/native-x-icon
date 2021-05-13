import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PinOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PinOutlineIcon({ size = 'normal', color = COLOR.SECONDARY }: PinOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 7.5C13.6569 7.5 15 6.15685 15 4.5C15 2.84315 13.6569 1.5 12 1.5C10.3431 1.5 9 2.84315 9 4.5C9 6.15685 10.3431 7.5 12 7.5Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12.75 7.6875C12.75 7.57561 12.7056 7.46831 12.6264 7.38919C12.5473 7.31007 12.44 7.26562 12.3281 7.26562H11.6719C11.56 7.26562 11.4527 7.31007 11.3736 7.38919C11.2944 7.46831 11.25 7.57561 11.25 7.6875V21.4481C11.2501 21.6474 11.2898 21.8446 11.3667 22.0284L11.8387 23.1534C11.8546 23.1824 11.8779 23.2065 11.9063 23.2234C11.9346 23.2402 11.967 23.2491 12 23.2491C12.033 23.2491 12.0654 23.2402 12.0937 23.2234C12.1221 23.2065 12.1454 23.1824 12.1613 23.1534L12.6333 22.0284C12.7102 21.8446 12.7499 21.6474 12.75 21.4481V7.6875Z'
        fill={contentColor}
      />
      <Path
        d='M13.125 4.5C13.7463 4.5 14.25 3.99632 14.25 3.375C14.25 2.75368 13.7463 2.25 13.125 2.25C12.5037 2.25 12 2.75368 12 3.375C12 3.99632 12.5037 4.5 13.125 4.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
