import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoLinkedinIconProps {
  color?: string
  size?: IconSize
}

export function LogoLinkedinIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoLinkedinIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.8205 1.5H3.29437C2.33672 1.5 1.5 2.18906 1.5 3.13547V20.7005C1.5 21.652 2.33672 22.5 3.29437 22.5H20.8153C21.7781 22.5 22.5 21.6464 22.5 20.7005V3.13547C22.5056 2.18906 21.7781 1.5 20.8205 1.5ZM8.00953 19.0045H5.00109V9.65063H8.00953V19.0045ZM6.60938 8.22844H6.58781C5.625 8.22844 5.00156 7.51172 5.00156 6.61453C5.00156 5.70094 5.64141 5.00109 6.62578 5.00109C7.61016 5.00109 8.2125 5.69578 8.23406 6.61453C8.23359 7.51172 7.61016 8.22844 6.60938 8.22844ZM19.0045 19.0045H15.9961V13.89C15.9961 12.6647 15.5583 11.8275 14.4698 11.8275C13.6383 11.8275 13.1461 12.39 12.9272 12.938C12.8452 13.1348 12.8231 13.403 12.8231 13.6767V19.0045H9.81469V9.65063H12.8231V10.9523C13.2609 10.3289 13.9448 9.43172 15.5363 9.43172C17.5111 9.43172 19.005 10.7334 19.005 13.5398L19.0045 19.0045Z'
        fill={contentColor}
      />
    </Svg>
  )
}
