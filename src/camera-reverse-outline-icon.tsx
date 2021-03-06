import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CameraReverseOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CameraReverseOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CameraReverseOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.4316 6.96937L15.1838 4.99781C14.9208 4.69125 14.5603 4.5 14.1562 4.5H9.84375C9.43969 4.5 9.07922 4.69125 8.81625 4.99781L7.56844 6.96937C7.30547 7.27641 6.96656 7.5 6.5625 7.5H3.75C3.35218 7.5 2.97064 7.65804 2.68934 7.93934C2.40804 8.22064 2.25 8.60218 2.25 9V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V9C21.75 8.60218 21.592 8.22064 21.3107 7.93934C21.0294 7.65804 20.6478 7.5 20.25 7.5H17.4844C17.0789 7.5 16.6945 7.27641 16.4316 6.96937Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M5.8125 7.40625V6.375H4.6875V7.40625'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.7388 13.3698V12.7459C15.7384 12.0344 15.5357 11.3377 15.1543 10.7371C14.7728 10.1365 14.2284 9.65685 13.5845 9.35408C12.9406 9.05132 12.2239 8.93797 11.5181 9.02728C10.8122 9.11659 10.1463 9.40486 9.59812 9.85843M8.25 12.1305V12.7544C8.25052 13.4644 8.45259 14.1597 8.83272 14.7593C9.21285 15.359 9.75542 15.8385 10.3973 16.1419C11.0392 16.4454 11.7541 16.5603 12.4588 16.4735C13.1634 16.3866 13.829 16.1015 14.378 15.6513'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M9.1875 12.75L8.25 11.8125L7.3125 12.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M16.6875 12.75L15.75 13.6875L14.8125 12.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
