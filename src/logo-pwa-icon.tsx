import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoPwaIconProps {
  color?: string
  size?: IconSize
}

export function LogoPwaIcon({ size = 'normal', color = COLOR.SECONDARY }: LogoPwaIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.5016 16.5L19.1447 7.5H16.7297L14.2379 13.3158L12.4655 7.5H10.6088L8.70661 13.3158L7.36458 10.6659L6.15051 14.3906L7.38332 16.5H9.75989L11.4793 11.2842L13.1199 16.5H15.5016Z'
        fill={contentColor}
      />
      <Path
        d='M2.28703 13.4105H3.77063C4.17597 13.4162 4.58015 13.3655 4.97156 13.26L5.355 12.0792L6.4275 8.77969C6.34476 8.64944 6.25064 8.52677 6.14625 8.41312C5.59687 7.80437 4.79172 7.5 3.73078 7.5H0V16.5H2.28703V13.4105ZM4.25109 9.57047C4.46641 9.78672 4.57391 10.0761 4.57359 10.4386C4.57328 10.8011 4.47953 11.0906 4.29234 11.3072C4.08484 11.5453 3.70297 11.6642 3.14672 11.6639H2.28703V9.24609H3.15047C3.66891 9.24609 4.03578 9.35422 4.25109 9.57047ZM17.6648 14.888L18.3581 13.1419H20.3592L19.4095 10.493L20.5973 7.5L24 16.5H21.4908L20.9095 14.888H17.6648Z'
        fill={contentColor}
      />
    </Svg>
  )
}
