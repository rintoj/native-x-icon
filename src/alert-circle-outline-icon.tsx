import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface AlertCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function AlertCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: AlertCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M11.7309 7.78364L11.9999 13.5001L12.2685 7.78364C12.2702 7.74709 12.2644 7.7106 12.2515 7.67637C12.2385 7.64215 12.2188 7.61092 12.1934 7.5846C12.168 7.55828 12.1375 7.53741 12.1037 7.52327C12.07 7.50914 12.0337 7.50203 11.9971 7.50239V7.50239C11.961 7.50273 11.9253 7.51035 11.8921 7.52479C11.859 7.53924 11.8291 7.56021 11.8043 7.58646C11.7794 7.61271 11.7601 7.6437 11.7475 7.67758C11.7349 7.71146 11.7292 7.74753 11.7309 7.78364V7.78364Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 17.2458C11.8146 17.2458 11.6333 17.1908 11.4792 17.0878C11.325 16.9848 11.2048 16.8384 11.1339 16.6671C11.0629 16.4958 11.0443 16.3073 11.0805 16.1254C11.1167 15.9436 11.206 15.7765 11.3371 15.6454C11.4682 15.5143 11.6352 15.425 11.8171 15.3889C11.999 15.3527 12.1875 15.3712 12.3588 15.4422C12.5301 15.5132 12.6765 15.6333 12.7795 15.7875C12.8825 15.9417 12.9375 16.1229 12.9375 16.3083C12.9375 16.557 12.8387 16.7954 12.6629 16.9712C12.4871 17.1471 12.2486 17.2458 12 17.2458Z'
        fill={contentColor}
      />
    </Svg>
  )
}
