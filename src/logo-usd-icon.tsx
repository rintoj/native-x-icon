import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoUsdIconProps {
  color?: string
  size?: IconSize
}

export function LogoUsdIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoUsdIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M11.25 22.5V20.7928C7.52484 20.5781 5.26172 18.6591 5.25 15.75H8.625C8.70797 16.9847 9.74344 17.9273 11.25 18.0938V13.5L9.99516 13.1719C7.13578 12.5072 5.60578 10.8567 5.60578 8.38688C5.60578 5.47547 7.69125 3.56625 11.25 3.28125V1.5H12.75V3.28125C16.3777 3.57656 18.3281 5.51906 18.375 8.25H15C14.9644 7.12219 14.258 6.21609 12.75 6.09375V10.4062L14.1947 10.7475C17.2317 11.4122 18.75 12.9844 18.75 15.5625C18.75 18.5784 16.6997 20.5256 12.75 20.7806V22.5H11.25ZM11.25 10.125V6.09375C9.95672 6.165 9.03422 6.95953 9.03422 8.08734C9.03422 9.13266 9.8025 9.81609 11.25 10.125ZM12.75 13.7812V18.0938C14.5383 18.0216 15.3928 17.2069 15.3928 15.9483C15.3928 14.7961 14.5383 14.0203 12.75 13.7812Z'
        fill={contentColor}
      />
    </Svg>
  )
}
