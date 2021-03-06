import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface AtOutlineIconProps {
  color?: string
  size?: IconSize
}

export function AtOutlineIcon({ size = 'normal', color = COLOR.SECONDARY }: AtOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.0001 11.9189C14.7891 14.3095 13.1195 15.6689 11.2243 15.6689C9.32915 15.6689 8.06774 13.9898 8.25009 11.9189C8.43243 9.84794 9.99009 8.16888 11.8852 8.16888C13.7804 8.16888 15.182 9.85638 15.0001 11.9189Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M14.9893 19.4892C13.6506 20.0517 12.7731 20.1689 11.2731 20.1689C6.71683 20.1689 3.35121 16.4751 3.75011 11.9189C4.14902 7.36263 8.1709 3.66888 12.7271 3.66888C17.8595 3.66888 20.6809 7.03123 20.2843 11.5312C19.9886 14.8908 17.8417 15.8587 16.7176 15.6595C15.6601 15.472 14.7873 14.5148 14.9486 12.6829L15.3461 8.17123'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
