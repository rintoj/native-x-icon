import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoGooglePlaystoreIconProps {
  color?: string
  size?: IconSize
}

export function LogoGooglePlaystoreIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoGooglePlaystoreIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M2.25 2.78816V21.21C2.25012 21.25 2.26204 21.289 2.28427 21.3223C2.30649 21.3555 2.33803 21.3814 2.37492 21.3968C2.41182 21.4121 2.45243 21.4163 2.49166 21.4087C2.5309 21.401 2.56701 21.382 2.59547 21.3539L12.1875 11.9996L2.59547 2.64425C2.56701 2.61619 2.5309 2.59716 2.49166 2.58954C2.45243 2.58192 2.41182 2.58605 2.37492 2.60142C2.33803 2.61679 2.30649 2.64271 2.28427 2.67593C2.26204 2.70915 2.25012 2.74819 2.25 2.78816Z'
        fill={contentColor}
      />
      <Path
        d='M16.2092 8.15621L4.18204 1.52996L4.17454 1.52574C3.96735 1.41324 3.77047 1.69355 3.94016 1.85668L13.3681 10.8717L16.2092 8.15621Z'
        fill={contentColor}
      />
      <Path
        d='M3.9412 22.1434C3.77057 22.3066 3.96745 22.5869 4.17557 22.4744L4.18307 22.4702L16.2093 15.8439L13.3682 13.1275L3.9412 22.1434Z'
        fill={contentColor}
      />
      <Path
        d='M21.0648 10.8281L17.7062 8.97839L14.5482 11.9999L17.7062 15.0201L21.0648 13.1718C21.9784 12.667 21.9784 11.3329 21.0648 10.8281Z'
        fill={contentColor}
      />
    </Svg>
  )
}
