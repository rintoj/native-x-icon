import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface InformationIconProps {
  color?: string
  size?: IconSize
}

export function InformationIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: InformationIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.25 10.3125C8.25 9.79473 8.66973 9.375 9.1875 9.375H12.1875C12.7053 9.375 13.125 9.79473 13.125 10.3125V18.375C13.125 18.8928 12.7053 19.3125 12.1875 19.3125C11.6697 19.3125 11.25 18.8928 11.25 18.375V11.25H9.1875C8.66973 11.25 8.25 10.8303 8.25 10.3125Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.82812 18.5625C7.82812 18.0447 8.24786 17.625 8.76562 17.625H15.2344C15.7521 17.625 16.1719 18.0447 16.1719 18.5625C16.1719 19.0803 15.7521 19.5 15.2344 19.5H8.76562C8.24786 19.5 7.82812 19.0803 7.82812 18.5625Z'
        fill={contentColor}
      />
      <Path
        d='M12 7.49999C11.7033 7.49999 11.4133 7.41201 11.1666 7.24719C10.92 7.08237 10.7277 6.8481 10.6142 6.57401C10.5006 6.29992 10.4709 5.99832 10.5288 5.70735C10.5867 5.41638 10.7296 5.1491 10.9393 4.93933C11.1491 4.72955 11.4164 4.58669 11.7074 4.52881C11.9983 4.47093 12.2999 4.50063 12.574 4.61417C12.8481 4.7277 13.0824 4.91996 13.2472 5.16663C13.412 5.4133 13.5 5.70331 13.5 5.99999C13.5 6.39781 13.342 6.77934 13.0607 7.06065C12.7794 7.34195 12.3978 7.49999 12 7.49999Z'
        fill={contentColor}
      />
    </Svg>
  )
}
