import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface RadioOutlineIconProps {
  color?: string
  size?: IconSize
}

export function RadioOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: RadioOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 13.5013C12.8284 13.5013 13.5 12.8298 13.5 12.0013C13.5 11.1729 12.8284 10.5013 12 10.5013C11.1716 10.5013 10.5 11.1729 10.5 12.0013C10.5 12.8298 11.1716 13.5013 12 13.5013Z'
        fill={contentColor}
      />
      <Path
        d='M8.63672 9.01172C7.90501 9.83534 7.50085 10.8988 7.50085 12.0005C7.50085 13.1022 7.90501 14.1656 8.63672 14.9892'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.3641 14.9892C16.0959 14.1656 16.5 13.1022 16.5 12.0005C16.5 10.8988 16.0959 9.83534 15.3641 9.01172'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6.24751 6.62317C4.88406 8.08185 4.12561 10.004 4.12561 12.0007C4.12561 13.9974 4.88406 15.9195 6.24751 17.3782'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M17.7526 17.3782C19.116 15.9195 19.8745 13.9974 19.8745 12.0007C19.8745 10.004 19.116 8.08185 17.7526 6.62317'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M20.3906 19.5C22.2322 17.4358 23.2499 14.7663 23.2499 12C23.2499 9.23374 22.2322 6.56418 20.3906 4.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M3.60932 4.5C1.76775 6.56418 0.75 9.23374 0.75 12C0.75 14.7663 1.76775 17.4358 3.60932 19.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
