import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ChevronForwardCircleIconProps {
  color?: string
  size?: IconSize
}

export function ChevronForwardCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ChevronForwardCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12C21.75 6.61547 17.3845 2.25 12 2.25C6.61547 2.25 2.25 6.61547 2.25 12ZM14.3142 12L10.3448 8.03016C10.2101 7.88836 10.1361 7.69955 10.1386 7.50398C10.1411 7.3084 10.2199 7.12155 10.3582 6.98325C10.4965 6.84495 10.6834 6.76614 10.879 6.76364C11.0745 6.76114 11.2634 6.83513 11.4052 6.96984L15.9052 11.4698C16.0457 11.6105 16.1247 11.8012 16.1247 12C16.1247 12.1988 16.0457 12.3895 15.9052 12.5302L11.4052 17.0302C11.2634 17.1649 11.0745 17.2389 10.879 17.2364C10.6834 17.2339 10.4965 17.1551 10.3582 17.0168C10.2199 16.8785 10.1411 16.6916 10.1386 16.496C10.1361 16.3005 10.2101 16.1116 10.3448 15.9698L14.3142 12Z'
        fill={contentColor}
      />
    </Svg>
  )
}
