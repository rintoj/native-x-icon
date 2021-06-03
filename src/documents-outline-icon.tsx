import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface DocumentsOutlineIconProps {
  color?: string
  size?: IconSize
}

export function DocumentsOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: DocumentsOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.75 12.3811V20.4375C15.75 21.5766 14.857 22.5 13.7367 22.5H5.01562C3.89297 22.5 3 21.5766 3 20.4375V8.0625C3.0032 7.51648 3.22152 6.99373 3.60763 6.60763C3.99373 6.22152 4.51648 6.0032 5.0625 6H9.47437C9.62708 6.00023 9.77822 6.03086 9.91898 6.09009C10.0597 6.14932 10.1873 6.23597 10.2942 6.345L15.4106 11.5481C15.6283 11.7707 15.7501 12.0697 15.75 12.3811V12.3811Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M9.375 6V11.0625C9.37914 11.4093 9.51875 11.7408 9.764 11.986C10.0092 12.2313 10.3407 12.3709 10.6875 12.375H15.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8.25 6V3.5625C8.2532 3.01648 8.47152 2.49373 8.85763 2.10763C9.24373 1.72152 9.76648 1.5032 10.3125 1.5H14.7188C14.8723 1.50021 15.0243 1.53081 15.166 1.59002C15.3076 1.64923 15.4362 1.73589 15.5442 1.845L20.6606 7.04813C20.8782 7.26835 21.0001 7.56545 21 7.875V15.9375C21 17.0766 20.107 18 18.9867 18H16.125'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M14.625 1.5V6.5625C14.6291 6.90931 14.7687 7.24075 15.014 7.486C15.2592 7.73125 15.5907 7.87086 15.9375 7.875H21'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
