import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface AttachOutlineIconProps {
  color?: string
  size?: IconSize
}

export function AttachOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: AttachOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M10.1288 9.00011V15.7431C10.1366 16.2362 10.3379 16.7064 10.6893 17.0523C11.0408 17.3983 11.5142 17.5922 12.0073 17.5922C12.5004 17.5922 12.9738 17.3983 13.3252 17.0523C13.6767 16.7064 13.878 16.2362 13.8858 15.7431L13.8919 6.9048C13.897 6.48336 13.8184 6.06509 13.6607 5.67426C13.5029 5.28342 13.2692 4.92777 12.973 4.62795C12.6768 4.32812 12.324 4.09007 11.9351 3.9276C11.5462 3.76513 11.1289 3.68147 10.7074 3.68147C10.286 3.68147 9.86869 3.76513 9.4798 3.9276C9.0909 4.09007 8.73812 4.32812 8.44191 4.62795C8.1457 4.92777 7.91195 5.28342 7.75421 5.67426C7.59647 6.06509 7.51788 6.48336 7.52299 6.9048V15.8026C7.5144 16.3959 7.62385 16.985 7.84496 17.5357C8.06608 18.0863 8.39445 18.5875 8.81099 19.0101C9.22753 19.4328 9.72392 19.7683 10.2713 19.9974C10.8187 20.2265 11.4062 20.3444 11.9996 20.3444C12.5929 20.3444 13.1804 20.2265 13.7278 19.9974C14.2752 19.7683 14.7716 19.4328 15.1881 19.0101C15.6047 18.5875 15.933 18.0863 16.1541 17.5357C16.3753 16.985 16.4847 16.3959 16.4761 15.8026V7.48792'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}
