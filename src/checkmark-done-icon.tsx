import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CheckmarkDoneIconProps {
  color?: string
  size?: IconSize
}

export function CheckmarkDoneIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CheckmarkDoneIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.2439 5.43533C22.5556 5.7081 22.5872 6.18192 22.3144 6.49364L11.8144 18.4936C11.6777 18.6499 11.4824 18.7424 11.275 18.7494C11.0675 18.7563 10.8664 18.6769 10.7197 18.5301L6.21967 14.0301C5.92678 13.7372 5.92678 13.2623 6.21967 12.9694C6.51256 12.6765 6.98744 12.6765 7.28033 12.9694L11.2135 16.9026L21.1856 5.50589C21.4583 5.19416 21.9322 5.16257 22.2439 5.43533Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.71967 12.9697C2.01256 12.6768 2.48744 12.6768 2.78033 12.9697L7.28033 17.4697C7.57322 17.7626 7.57322 18.2374 7.28033 18.5303C6.98744 18.8232 6.51256 18.8232 6.21967 18.5303L1.71967 14.0303C1.42678 13.7374 1.42678 13.2626 1.71967 12.9697Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.7429 5.43444C18.0551 5.70663 18.0875 6.1804 17.8153 6.49262L11.4403 13.8051C11.1681 14.1173 10.6944 14.1498 10.3822 13.8776C10.0699 13.6054 10.0375 13.1316 10.3097 12.8194L16.6847 5.50692C16.9569 5.19469 17.4306 5.16224 17.7429 5.43444Z'
        fill={contentColor}
      />
    </Svg>
  )
}
