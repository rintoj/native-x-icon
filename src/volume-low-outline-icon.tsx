import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface VolumeLowOutlineIconProps {
  color?: string
  size?: IconSize
}

export function VolumeLowOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: VolumeLowOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M8.88985 9.00055H5.625C5.52554 9.00055 5.43016 9.04006 5.35984 9.11039C5.28951 9.18071 5.25 9.2761 5.25 9.37555V14.6256C5.25 14.725 5.28951 14.8204 5.35984 14.8907C5.43016 14.961 5.52554 15.0006 5.625 15.0006H8.88985C9.06319 15.0006 9.23115 15.0608 9.36516 15.1707L13.6528 18.6863C13.7087 18.7275 13.775 18.7523 13.8441 18.758C13.9133 18.7637 13.9827 18.7501 14.0446 18.7187C14.1065 18.6873 14.1585 18.6394 14.1948 18.5802C14.231 18.521 14.2501 18.4529 14.25 18.3835V5.61758C14.25 5.54826 14.2307 5.4803 14.1944 5.42126C14.1581 5.36222 14.1061 5.3144 14.0442 5.28313C13.9823 5.25185 13.913 5.23834 13.8439 5.24409C13.7748 5.24984 13.7087 5.27463 13.6528 5.31571L9.36516 8.83133C9.23102 8.94094 9.06307 9.00073 8.88985 9.00055Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18 15C18.4566 14.0902 18.75 13.087 18.75 12C18.75 10.898 18.4688 9.91875 18 9'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
