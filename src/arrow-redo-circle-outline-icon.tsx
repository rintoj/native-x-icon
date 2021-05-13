import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ArrowRedoCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ArrowRedoCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ArrowRedoCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.5112 15.3629V13.6135C9.83601 13.6135 8.54975 14.2449 7.42147 15.4266C7.16835 15.6915 6.71834 15.4885 6.75163 15.1252C7.00709 12.2448 8.35194 9.63664 12.5112 9.63664V7.88726C12.5119 7.81157 12.5346 7.73773 12.5766 7.67473C12.6186 7.61174 12.6779 7.56232 12.7475 7.5325C12.8171 7.50269 12.8938 7.49376 12.9684 7.50681C13.043 7.51986 13.1121 7.55433 13.1674 7.60601L17.1288 11.3438C17.167 11.3798 17.1974 11.4231 17.2182 11.4713C17.239 11.5194 17.2497 11.5713 17.2497 11.6237C17.2497 11.6761 17.239 11.728 17.2182 11.7761C17.1974 11.8242 17.167 11.8676 17.1288 11.9035L13.1716 15.6427C13.1166 15.6957 13.0472 15.7314 12.9721 15.7453C12.8969 15.7592 12.8194 15.7507 12.749 15.7209C12.6787 15.6911 12.6186 15.6412 12.5763 15.5776C12.534 15.514 12.5114 15.4393 12.5112 15.3629Z'
        fill={contentColor}
      />
      <Path
        d='M3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
    </Svg>
  )
}
