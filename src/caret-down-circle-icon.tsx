import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CaretDownCircleIconProps {
  color?: string
  size?: IconSize
}

export function CaretDownCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CaretDownCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.75 12C21.75 6.61547 17.3845 2.25 12 2.25C6.61547 2.25 2.25 6.61547 2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12ZM16.0514 11.167L12.5766 15.3431C12.5062 15.4277 12.418 15.4958 12.3184 15.5425C12.2188 15.5892 12.1101 15.6135 12 15.6135C11.8899 15.6135 11.7812 15.5892 11.6816 15.5425C11.582 15.4958 11.4938 15.4277 11.4234 15.3431L7.94859 11.167C7.85753 11.0575 7.79952 10.9243 7.78138 10.7831C7.76323 10.6418 7.78569 10.4983 7.84612 10.3693C7.90655 10.2403 8.00246 10.1312 8.12263 10.0547C8.2428 9.97828 8.38225 9.93761 8.52469 9.9375H15.4753C15.6177 9.93761 15.7572 9.97828 15.8774 10.0547C15.9975 10.1312 16.0934 10.2403 16.1539 10.3693C16.2143 10.4983 16.2368 10.6418 16.2186 10.7831C16.2005 10.9243 16.1425 11.0575 16.0514 11.167Z'
        fill={contentColor}
      />
    </Svg>
  )
}
