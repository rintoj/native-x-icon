import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ChevronBackCircleIconProps {
  color?: string
  size?: IconSize
}

export function ChevronBackCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ChevronBackCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2.25C6.61547 2.25 2.25 6.61547 2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12C21.75 6.61547 17.3845 2.25 12 2.25ZM13.6552 15.9698C13.7277 16.0388 13.7858 16.1216 13.8258 16.2133C13.8659 16.305 13.8872 16.4039 13.8885 16.504C13.8898 16.6041 13.871 16.7034 13.8333 16.7961C13.7956 16.8889 13.7397 16.9731 13.6689 17.0439C13.5981 17.1147 13.5139 17.1706 13.4211 17.2083C13.3284 17.246 13.2291 17.2648 13.129 17.2635C13.0289 17.2622 12.93 17.2409 12.8383 17.2008C12.7466 17.1608 12.6638 17.1027 12.5948 17.0302L8.09484 12.5302C7.9543 12.3895 7.87535 12.1988 7.87535 12C7.87535 11.8012 7.9543 11.6105 8.09484 11.4698L12.5948 6.96984C12.7366 6.83513 12.9255 6.76114 13.121 6.76364C13.3166 6.76614 13.5035 6.84495 13.6418 6.98325C13.7801 7.12155 13.8589 7.3084 13.8614 7.50398C13.8639 7.69955 13.7899 7.88836 13.6552 8.03016L9.68578 12L13.6552 15.9698Z'
        fill={contentColor}
      />
    </Svg>
  )
}
