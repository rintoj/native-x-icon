import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HeartDislikeCircleIconProps {
  color?: string
  size?: IconSize
}

export function HeartDislikeCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: HeartDislikeCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM13.0922 16.2745C12.8855 16.4245 12.6628 16.5816 12.4214 16.7433C12.2972 16.8284 12.1501 16.8739 11.9995 16.8739C11.849 16.8739 11.7019 16.8284 11.5777 16.7433C9.73547 15.4927 8.93766 14.6339 8.49797 14.0991C7.56047 12.9567 7.11141 11.7834 7.12453 10.5131C7.12453 10.5033 7.12453 10.493 7.12453 10.4831C7.12559 10.4466 7.13731 10.4111 7.15828 10.3811C7.17924 10.3511 7.20851 10.3279 7.24249 10.3144C7.27648 10.3008 7.31368 10.2975 7.34953 10.3048C7.38537 10.3122 7.41829 10.3298 7.44422 10.3556L13.1138 15.99C13.133 16.0091 13.1479 16.0322 13.1574 16.0576C13.1668 16.083 13.1707 16.1102 13.1686 16.1372C13.1666 16.1643 13.1587 16.1906 13.1455 16.2143C13.1323 16.238 13.1141 16.2585 13.0922 16.2745ZM16.2797 17.0302C16.139 17.1707 15.9484 17.2497 15.7495 17.2497C15.5507 17.2497 15.36 17.1707 15.2194 17.0302L6.96937 8.78016C6.83466 8.63836 6.76067 8.44955 6.76317 8.25398C6.76567 8.0584 6.84448 7.87155 6.98278 7.73325C7.12108 7.59495 7.30794 7.51614 7.50351 7.51364C7.69908 7.51114 7.88789 7.58513 8.02969 7.71984L16.2797 15.9698C16.4203 16.1104 16.4993 16.3011 16.4994 16.4999C16.4995 16.6987 16.4206 16.8895 16.2802 17.0302H16.2797ZM15.6188 13.9542C15.6028 13.9758 15.5823 13.9937 15.5587 14.0065C15.5351 14.0194 15.509 14.0269 15.4822 14.0286C15.4554 14.0302 15.4285 14.026 15.4035 14.0161C15.3785 14.0063 15.356 13.9911 15.3375 13.9716L9.525 8.19609C9.49851 8.17001 9.48037 8.13663 9.47289 8.10021C9.46542 8.06379 9.46894 8.02597 9.483 7.99156C9.49707 7.95714 9.52105 7.92768 9.5519 7.90693C9.58275 7.88618 9.61907 7.87506 9.65625 7.875H9.72891C10.6852 7.875 11.3695 8.37375 11.7966 8.83219C11.8226 8.86027 11.8541 8.88268 11.8892 8.89801C11.9243 8.91333 11.9622 8.92124 12.0005 8.92124C12.0388 8.92124 12.0766 8.91333 12.1117 8.89801C12.1468 8.88268 12.1784 8.86027 12.2044 8.83219C12.6314 8.37375 13.3158 7.875 14.272 7.875C15.6928 7.875 16.8605 9.05953 16.875 10.5155C16.8872 11.7309 16.4756 12.8578 15.6188 13.9542Z'
        fill={contentColor}
      />
    </Svg>
  )
}