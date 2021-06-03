import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface StarHalfIconProps {
  color?: string
  size?: IconSize
}

export function StarHalfIcon({ size = 'normal', color = COLOR.SECONDARY }: StarHalfIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.0001 1.5C12.325 1.5 12.6129 1.70919 12.7133 2.01819L14.9824 9H22.5001C22.8287 9 23.1191 9.21402 23.2164 9.52798C23.3137 9.84193 23.1953 10.1827 22.9242 10.3685L16.8296 14.5477L19.1794 21.5102C19.2838 21.8193 19.1762 22.1605 18.9135 22.354C18.6507 22.5474 18.293 22.5488 18.0287 22.3573L12.0001 17.9887L5.97139 22.3573C5.70715 22.5488 5.34944 22.5474 5.08666 22.354C4.82388 22.1605 4.71634 21.8193 4.82069 21.5102L7.17052 14.5477L1.07591 10.3685C0.80483 10.1827 0.68637 9.84193 0.783673 9.52798C0.880976 9.21402 1.17137 9 1.50006 9H9.01769L11.2868 2.01819C11.3872 1.70919 11.6752 1.5 12.0001 1.5ZM12.0001 4.67651L10.2758 9.98181C10.1754 10.2908 9.88745 10.5 9.56256 10.5H3.92L8.4867 13.6315C8.76349 13.8213 8.8805 14.1718 8.77317 14.4898L6.99293 19.7646L11.56 16.4552C11.8225 16.2649 12.1776 16.2649 12.4401 16.4552L17.0072 19.7646L15.2269 14.4898C15.1196 14.1718 15.2366 13.8213 15.5134 13.6315L20.0801 10.5H14.4376C14.1127 10.5 13.8247 10.2908 13.7243 9.98181L12.0001 4.67651Z'
        fill={contentColor}
      />
      <Path
        d='M12 2.25V17.0625L5.53125 21.75L8.0625 14.25L1.5 9.75H9.5625L12 2.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
