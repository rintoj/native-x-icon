import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ChevronUpCircleIconProps {
  color?: string
  size?: IconSize
}

export function ChevronUpCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ChevronUpCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2.25C6.61547 2.25 2.25 6.61547 2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12C21.75 6.61547 17.3845 2.25 12 2.25ZM17.0302 14.4052C16.8895 14.5457 16.6988 14.6247 16.5 14.6247C16.3012 14.6247 16.1105 14.5457 15.9698 14.4052L12 10.4358L8.03016 14.4052C7.88836 14.5399 7.69955 14.6139 7.50398 14.6114C7.3084 14.6089 7.12155 14.5301 6.98325 14.3918C6.84495 14.2535 6.76614 14.0666 6.76364 13.871C6.76114 13.6755 6.83513 13.4866 6.96984 13.3448L11.4698 8.84484C11.6105 8.7043 11.8012 8.62535 12 8.62535C12.1988 8.62535 12.3895 8.7043 12.5302 8.84484L17.0302 13.3448C17.1707 13.4855 17.2497 13.6762 17.2497 13.875C17.2497 14.0738 17.1707 14.2645 17.0302 14.4052Z'
        fill={contentColor}
      />
    </Svg>
  )
}
