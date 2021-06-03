import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HeadsetOutlineIconProps {
  color?: string
  size?: IconSize
}

export function HeadsetOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: HeadsetOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M3.89062 18C3.28125 16.4531 2.25 13.6233 2.25 12C2.25 6.615 6.99984 2.25 12 2.25C17.0002 2.25 21.75 6.615 21.75 12C21.75 13.6233 20.6719 16.5469 20.1094 18'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M5.08076 12.6623L4.43904 13.0373C3.02201 13.867 2.9531 16.4315 4.2806 18.7654C5.6081 21.0993 7.83701 22.319 9.25404 21.4898L9.89576 21.1148C10.0661 21.0134 10.1899 20.8492 10.2405 20.6575C10.2912 20.4659 10.2647 20.262 10.1667 20.0896L6.09373 12.9375C6.04571 12.8524 5.9813 12.7778 5.90422 12.7179C5.82714 12.6579 5.73894 12.6139 5.64472 12.5883C5.55049 12.5627 5.45213 12.5561 5.35532 12.5688C5.25851 12.5815 5.16519 12.6133 5.08076 12.6623V12.6623Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M18.9191 12.6623L19.5608 13.0373C20.9778 13.8665 21.0486 16.4311 19.7192 18.765C18.3899 21.0989 16.1628 22.3186 14.7458 21.4893L14.1041 21.1143C13.9338 21.0129 13.81 20.8487 13.7593 20.6571C13.7087 20.4654 13.7352 20.2615 13.8331 20.0892L17.9061 12.9375C17.9541 12.8524 18.0185 12.7778 18.0956 12.7179C18.1727 12.6579 18.2609 12.6139 18.3551 12.5883C18.4493 12.5627 18.5477 12.5561 18.6445 12.5688C18.7413 12.5815 18.8346 12.6133 18.9191 12.6623V12.6623Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
    </Svg>
  )
}
