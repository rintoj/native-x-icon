import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CaretBackCircleIconProps {
  color?: string
  size?: IconSize
}

export function CaretBackCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CaretBackCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12C21.75 6.61547 17.3845 2.25 12 2.25C6.61547 2.25 2.25 6.61547 2.25 12ZM14.0625 8.52469V15.4753C14.0624 15.6177 14.0217 15.7572 13.9453 15.8774C13.8688 15.9975 13.7597 16.0934 13.6307 16.1539C13.5017 16.2143 13.3582 16.2368 13.2169 16.2186C13.0757 16.2005 12.9425 16.1425 12.833 16.0514L8.65687 12.5766C8.57227 12.5062 8.5042 12.418 8.45748 12.3184C8.41076 12.2188 8.38654 12.1101 8.38654 12C8.38654 11.8899 8.41076 11.7812 8.45748 11.6816C8.5042 11.582 8.57227 11.4938 8.65687 11.4234L12.833 7.94859C12.9425 7.85753 13.0757 7.79952 13.2169 7.78138C13.3582 7.76323 13.5017 7.78569 13.6307 7.84612C13.7597 7.90655 13.8688 8.00246 13.9453 8.12263C14.0217 8.2428 14.0624 8.38225 14.0625 8.52469Z'
        fill={contentColor}
      />
    </Svg>
  )
}
