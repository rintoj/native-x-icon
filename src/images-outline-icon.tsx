import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ImagesOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ImagesOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ImagesOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.25 5.25V4.5C20.2483 3.9038 20.0107 3.3325 19.5891 2.91092C19.1675 2.48934 18.5962 2.25173 18 2.25H3C2.4038 2.25173 1.8325 2.48934 1.41092 2.91092C0.98934 3.3325 0.751731 3.9038 0.75 4.5V16.5C0.751731 17.0962 0.98934 17.6675 1.41092 18.0891C1.8325 18.5107 2.4038 18.7483 3 18.75H3.75'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M21.0942 6H6.65578C5.46518 6 4.5 6.96518 4.5 8.15578V19.5942C4.5 20.7848 5.46518 21.75 6.65578 21.75H21.0942C22.2848 21.75 23.25 20.7848 23.25 19.5942V8.15578C23.25 6.96518 22.2848 6 21.0942 6Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M17.4806 11.7278C18.2771 11.7278 18.9229 11.0867 18.9229 10.2958C18.9229 9.50488 18.2771 8.86374 17.4806 8.86374C16.684 8.86374 16.0382 9.50488 16.0382 10.2958C16.0382 11.0867 16.684 11.7278 17.4806 11.7278Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M16.0383 17.4452L11.9531 13.3957C11.692 13.1377 11.3427 12.9883 10.9757 12.9778C10.6087 12.9673 10.2514 13.0964 9.97594 13.339L4.5 18.1704'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12.4327 21.7501L17.9916 16.2315C18.2474 15.9792 18.5876 15.8306 18.9465 15.8144C19.3054 15.7982 19.6576 15.9156 19.9351 16.1438L23.2501 18.8865'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
