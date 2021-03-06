import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CodeDownloadIconProps {
  color?: string
  size?: IconSize
}

export function CodeDownloadIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CodeDownloadIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.24082 6.10192C8.59882 6.51106 8.55736 7.13295 8.14822 7.49095L2.99486 12.0001L8.14822 16.5093C8.55736 16.8673 8.59882 17.4892 8.24082 17.8984C7.88282 18.3075 7.26093 18.349 6.85178 17.991L0.851785 12.741C0.63816 12.554 0.515625 12.284 0.515625 12.0001C0.515625 11.7163 0.63816 11.4462 0.851785 11.2593L6.85178 6.00932C7.26093 5.65132 7.88282 5.69278 8.24082 6.10192Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.7592 6.10192C16.1172 5.69278 16.7391 5.65132 17.1482 6.00932L23.1482 11.2593C23.3618 11.4462 23.4843 11.7163 23.4843 12.0001C23.4843 12.284 23.3618 12.554 23.1482 12.741L17.1482 17.991C16.7391 18.349 16.1172 18.3075 15.7592 17.8984C15.4012 17.4892 15.4426 16.8673 15.8518 16.5093L21.0051 12.0001L15.8518 7.49095C15.4426 7.13295 15.4012 6.51106 15.7592 6.10192Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.3034 12.8091C8.68752 12.4244 9.31079 12.4239 9.69551 12.808L12 15.1089L14.3045 12.808C14.6892 12.4239 15.3125 12.4244 15.6966 12.8091C16.0807 13.1938 16.0802 13.8171 15.6955 14.2012L12.6955 17.1966C12.3112 17.5802 11.6888 17.5802 11.3045 17.1966L8.30449 14.2012C7.91976 13.8171 7.91928 13.1938 8.3034 12.8091Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 6.51562C12.5437 6.51562 12.9844 6.95634 12.9844 7.5V15.7514C12.9844 16.2951 12.5437 16.7358 12 16.7358C11.4563 16.7358 11.0156 16.2951 11.0156 15.7514V7.5C11.0156 6.95634 11.4563 6.51562 12 6.51562Z'
        fill={contentColor}
      />
    </Svg>
  )
}
