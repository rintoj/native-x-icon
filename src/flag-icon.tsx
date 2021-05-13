import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FlagIconProps {
  color?: string
  size?: IconSize
}

export function FlagIcon({ size = 'normal', color = COLOR.SECONDARY }: FlagIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M3.75 22.5C3.55109 22.5 3.36032 22.421 3.21967 22.2803C3.07902 22.1397 3 21.9489 3 21.75V3.19359C3.00005 2.99709 3.05158 2.80402 3.14945 2.63362C3.24731 2.46321 3.38811 2.32142 3.55781 2.22234C4.125 1.89281 5.26781 1.5 7.5 1.5C9.24422 1.5 11.1952 2.18953 12.9164 2.7975C14.3025 3.28734 15.6117 3.75 16.5 3.75C17.6435 3.74649 18.7748 3.51544 19.8281 3.07031C19.9564 3.01617 20.0961 2.99461 20.2347 3.00755C20.3733 3.02049 20.5066 3.06753 20.6226 3.14448C20.7386 3.22143 20.8338 3.32589 20.8997 3.44856C20.9655 3.57122 21 3.70828 21 3.8475V14.13C20.9998 14.3123 20.9465 14.4905 20.8466 14.6429C20.7467 14.7954 20.6045 14.9154 20.4375 14.9883C20.0292 15.1669 18.5386 15.75 16.5 15.75C15.3684 15.75 13.9509 15.4153 12.4505 15.0605C10.7639 14.662 9.02016 14.25 7.5 14.25C5.77172 14.25 4.88719 14.5116 4.5 14.677V21.75C4.5 21.9489 4.42098 22.1397 4.28033 22.2803C4.13968 22.421 3.94891 22.5 3.75 22.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
