import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoClosedCaptioningIconProps {
  color?: string
  size?: IconSize
}

export function LogoClosedCaptioningIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoClosedCaptioningIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M0 3.75V20.25H24V3.75H0ZM21.75 11.9897C21.75 13.1962 21.675 14.1141 21.5733 15.6094C21.4716 17.1047 20.6733 18.1566 18.8034 18.3216C16.9336 18.4866 14.3142 18.502 12 18.4969C9.70312 18.502 7.07156 18.4917 5.19656 18.3216C3.32156 18.1514 2.53406 17.1028 2.42672 15.6094C2.31938 14.1159 2.25 13.1962 2.25 11.9897C2.25 10.7831 2.25516 9.99937 2.42672 8.37C2.59828 6.74062 3.50484 5.83312 5.19656 5.66812C6.88828 5.50312 9.80344 5.50313 12 5.50313C14.1966 5.50313 17.1094 5.50312 18.8034 5.66812C20.4975 5.83312 21.4017 6.74625 21.5733 8.37C21.7448 9.99375 21.75 10.7883 21.75 11.9897Z'
        fill={contentColor}
      />
      <Path
        d='M17.2298 13.2585V13.2946C17.2298 14.135 16.7091 14.63 16.0134 14.63C15.3178 14.63 14.8491 14.0731 14.782 13.2946C14.782 13.2946 14.7206 12.8872 14.7206 12.0622C14.7166 11.6143 14.7405 11.1665 14.7923 10.7216C14.9161 9.84502 15.3441 9.38612 16.0392 9.38612C16.7344 9.38612 17.2809 9.98424 17.2809 10.8917V10.9175H19.605C19.605 9.7883 19.3214 8.77252 18.7495 8.13315C18.1777 7.49377 17.3325 7.17221 16.2094 7.17221C15.6854 7.16566 15.1636 7.24045 14.6625 7.39393C14.1952 7.54084 13.7755 7.80959 13.4466 8.17252C13.1077 8.54565 12.8438 9.04065 12.6562 9.66455C12.4688 10.2885 12.375 11.0708 12.375 12.021C12.375 12.9491 12.4523 13.7225 12.6019 14.3464C12.7514 14.9703 12.9769 15.4653 13.2769 15.8366C13.5663 16.2008 13.9581 16.4702 14.4019 16.61C14.855 16.7544 15.3862 16.8266 15.9956 16.8266C17.2833 16.8266 18.2109 16.4985 18.7673 15.8624C19.3237 15.2263 19.5938 14.3 19.5938 13.0831H17.2195C17.2298 13.0831 17.2298 13.2121 17.2298 13.2585Z'
        fill={contentColor}
      />
      <Path
        d='M9.24853 13.2585V13.2946C9.24853 14.135 8.72821 14.63 8.03259 14.63C7.33696 14.63 6.86821 14.0731 6.80118 13.2946C6.80118 13.2946 6.73978 12.8872 6.73978 12.0622C6.73575 11.6143 6.7597 11.1665 6.81149 10.7216C6.93524 9.84502 7.36321 9.38612 8.05837 9.38612C8.75353 9.38612 9.30009 9.98471 9.30009 10.8917V10.9175H11.6251C11.6251 9.7883 11.3438 8.77252 10.7696 8.13315C10.1954 7.49377 9.35165 7.17221 8.22853 7.17221C7.70454 7.16566 7.1827 7.24045 6.68165 7.39393C6.21437 7.54084 5.79467 7.80959 5.46571 8.17252C5.1254 8.54377 4.8629 9.03877 4.67212 9.66268C4.48134 10.2866 4.39087 11.0689 4.39087 12.0191C4.39087 12.9472 4.46821 13.7206 4.61774 14.3446C4.76728 14.9685 4.99274 15.4635 5.29274 15.8347C5.58221 16.199 5.974 16.4683 6.41774 16.6081C6.87118 16.7525 7.40243 16.8247 8.01149 16.8247C9.29962 16.8247 10.2273 16.4966 10.7837 15.8605C11.3401 15.2244 11.6185 14.2981 11.6185 13.0813H9.23821C9.24853 13.0831 9.24853 13.2121 9.24853 13.2585Z'
        fill={contentColor}
      />
    </Svg>
  )
}