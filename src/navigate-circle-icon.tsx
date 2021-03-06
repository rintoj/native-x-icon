import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface NavigateCircleIconProps {
  color?: string
  size?: IconSize
}

export function NavigateCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: NavigateCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.136 2.25017C6.65255 2.17611 2.17599 6.65267 2.25005 12.1361C2.32318 17.395 6.60521 21.677 11.8641 21.7502C17.3485 21.8252 21.8241 17.3486 21.7491 11.8652C21.6769 6.60533 17.3949 2.3233 12.136 2.25017ZM16.4532 8.21455L12.5982 16.9577C12.3736 17.4485 11.6241 17.2858 11.6241 16.7439V12.5627C11.6241 12.5129 11.6044 12.4653 11.5692 12.4301C11.534 12.3949 11.4863 12.3752 11.4366 12.3752H7.2563C6.7163 12.3752 6.55318 11.6313 7.04208 11.4063L15.7857 7.54705C15.8791 7.50391 15.9835 7.49046 16.0848 7.50852C16.1861 7.52657 16.2794 7.57527 16.3522 7.64803C16.425 7.72079 16.4737 7.81412 16.4917 7.91542C16.5098 8.01672 16.4963 8.12113 16.4532 8.21455Z'
        fill={contentColor}
      />
    </Svg>
  )
}
