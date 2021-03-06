import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoTableauIconProps {
  color?: string
  size?: IconSize
}

export function LogoTableauIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoTableauIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M11.376 15.9522H12.6239V12.5491H15.7645V11.3388H12.6239V7.93567H11.376V11.3388H8.27527V12.5491H11.376V15.9522Z'
        fill={contentColor}
      />
      <Path
        d='M5.59031 20.867H6.64921V17.8417H9.44765V16.8962H6.64921V13.8334H5.59031V16.8962H2.79187V17.8417H5.59031V20.867Z'
        fill={contentColor}
      />
      <Path
        d='M17.3506 9.93837H18.4095V6.91493H21.2454V6.00697H18.4095V2.94415H17.3506V6.00697H14.5521V6.91493H17.3506V9.93837Z'
        fill={contentColor}
      />
      <Path
        d='M11.5651 23.2499H12.4726V21.0937H14.4015V20.3005H12.4726V18.1443H11.5651V20.3005H9.67468V21.0937H11.5651V23.2499Z'
        fill={contentColor}
      />
      <Path
        d='M5.62828 9.93837H6.61265V6.87697H9.44906V6.00697H6.60937V2.94415H5.62499V6.00697H2.79187V6.87697H5.62828V9.93837Z'
        fill={contentColor}
      />
      <Path
        d='M20.4243 14.4767H21.3318V12.3589H23.2499V11.5273H21.3318V9.40948H20.4243V11.5273H18.5338V12.3589H20.4243V14.4767Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.3506 20.867H18.4095V17.8417H21.2454V16.8962H18.4095V13.8334H17.3506V16.8962H14.5521V17.8417H17.3506V20.867Z'
        fill={contentColor}
      />
      <Path
        d='M14.3906 3.4725V2.82984H12.4997V0.75H11.8191V2.82984H9.92859V3.4725H11.8191V5.55234H12.4997V3.4725H14.3906ZM2.63016 14.3255H3.31078V12.2456H5.20312V11.603H3.31078V9.5625H2.63016V11.6044H0.75V12.285L2.63016 12.2812V14.3255Z'
        fill={contentColor}
      />
    </Svg>
  )
}
