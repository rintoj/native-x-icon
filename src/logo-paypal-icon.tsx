import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoPaypalIconProps {
  color?: string
  size?: IconSize
}

export function LogoPaypalIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoPaypalIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.913 6.9754C19.8928 7.10478 19.8694 7.23697 19.8431 7.3729C18.9445 11.9667 15.87 13.551 11.9428 13.551H9.94358C9.71228 13.5505 9.48841 13.6327 9.31243 13.7828C9.13644 13.9329 9.01997 14.141 8.98405 14.3695L7.9603 20.8307L7.67061 22.6621C7.66021 22.7283 7.66296 22.7958 7.6787 22.8609C7.69445 22.926 7.72289 22.9874 7.76238 23.0414C7.80188 23.0955 7.85165 23.1413 7.90886 23.1761C7.96607 23.2109 8.02958 23.2341 8.09577 23.2443C8.12213 23.2485 8.14877 23.2505 8.17545 23.2504H11.7215C11.9244 23.251 12.1207 23.1793 12.2754 23.0481C12.43 22.9169 12.5328 22.7348 12.5653 22.5346L12.6 22.3551L13.2675 18.1363L13.3101 17.9048C13.3421 17.7042 13.4447 17.5217 13.5995 17.3902C13.7542 17.2587 13.9508 17.1868 14.1539 17.1876H14.684C18.12 17.1876 20.8092 15.7992 21.5953 11.782C21.9234 10.1038 21.7537 8.70275 20.8847 7.71697C20.6084 7.4129 20.2791 7.16163 19.913 6.9754Z'
        fill={contentColor}
      />
      <Path
        d='M18.0713 2.39479C17.0551 1.24307 15.2209 0.749942 12.8734 0.749942H6.05868C5.82689 0.749391 5.60252 0.831638 5.42599 0.981864C5.24947 1.13209 5.1324 1.34042 5.09587 1.56932L2.25759 19.4756C2.24565 19.5513 2.24879 19.6287 2.26683 19.7032C2.28486 19.7778 2.31744 19.848 2.36269 19.91C2.40794 19.9719 2.46497 20.0243 2.53051 20.0641C2.59605 20.104 2.66881 20.1305 2.74462 20.1421C2.7747 20.1468 2.80511 20.1492 2.83556 20.1492H7.04305L8.09962 13.4793L8.0668 13.6884C8.10272 13.4599 8.2192 13.2518 8.39518 13.1017C8.57116 12.9516 8.79504 12.8694 9.02634 12.8699H11.0256C14.9523 12.8699 18.0268 11.2828 18.9259 6.69182C18.9526 6.55588 18.9751 6.42369 18.9957 6.29432C19.2629 4.5965 18.9934 3.44104 18.0713 2.39479Z'
        fill={contentColor}
      />
    </Svg>
  )
}
