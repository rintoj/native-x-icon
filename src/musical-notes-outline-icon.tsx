import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MusicalNotesOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MusicalNotesOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: MusicalNotesOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M9 10.2191V9.93789C9 9.24226 9.46875 8.67226 10.1363 8.50398L18.3202 6.31586C18.4589 6.27875 18.6042 6.27398 18.745 6.30194C18.8859 6.3299 19.0184 6.38983 19.1324 6.4771C19.2464 6.56438 19.3388 6.67668 19.4026 6.80534C19.4663 6.93399 19.4996 7.07557 19.5 7.21914V8.25039'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M19.5 13.8723V17.6223C19.5 18.2744 19.0814 18.8219 18.4688 19.0286L17.4375 19.4036C16.2234 19.8123 15 18.9152 15 17.6223C14.9972 17.2903 15.1002 16.9659 15.294 16.6962C15.4878 16.4265 15.7625 16.2255 16.0781 16.1223L18.4688 15.2716C19.0814 15.0653 19.5 14.5244 19.5 13.8723ZM19.5 13.8723V2.71891C19.4997 2.64714 19.4829 2.57641 19.4509 2.51217C19.4189 2.44792 19.3726 2.39188 19.3155 2.34835C19.2585 2.30483 19.1922 2.27499 19.1217 2.26114C19.0513 2.24728 18.9787 2.24978 18.9094 2.26844L9.5625 4.78141C9.39948 4.82745 9.25611 4.92581 9.15447 5.06133C9.05283 5.19685 8.99856 5.36202 9 5.53141V16.1252C9 16.7772 8.58141 17.3252 7.96875 17.5314L5.53125 18.3752C4.88062 18.5945 4.5 19.1823 4.5 19.8752C4.5 21.168 5.74313 22.0572 6.9375 21.6564L7.96875 21.2814C8.58141 21.0752 9 20.5277 9 19.8752V16.1252'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
