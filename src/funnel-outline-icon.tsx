import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FunnelOutlineIconProps {
  color?: string
  size?: IconSize
}

export function FunnelOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: FunnelOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M1.65937 4.08375L9.56484 13.2919C9.68305 13.4276 9.74873 13.6012 9.75 13.7813V19.3744C9.74923 19.4527 9.77325 19.5293 9.81863 19.5932C9.864 19.6571 9.92841 19.7051 10.0027 19.7302L13.7597 20.9803C13.8158 20.9991 13.8757 21.0042 13.9342 20.9953C13.9927 20.9863 14.0483 20.9635 14.0962 20.9287C14.1442 20.894 14.1831 20.8483 14.2099 20.7955C14.2366 20.7427 14.2504 20.6842 14.25 20.625V13.7813C14.2519 13.6009 14.3184 13.4273 14.4375 13.2919L22.3406 4.08375C22.4224 3.98856 22.4751 3.87193 22.4926 3.74769C22.51 3.62345 22.4916 3.4968 22.4393 3.38275C22.387 3.2687 22.3031 3.17203 22.1975 3.10419C22.092 3.03636 21.9692 3.0002 21.8437 3H2.15859C2.03293 2.99975 1.90983 3.03558 1.80394 3.10324C1.69804 3.1709 1.6138 3.26755 1.56122 3.38168C1.50865 3.49582 1.48995 3.62266 1.50734 3.74711C1.52474 3.87157 1.57751 3.98841 1.65937 4.08375Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
