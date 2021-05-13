import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BookIconProps {
  color?: string
  size?: IconSize
}

export function BookIcon({ size = 'normal', color = COLOR.SECONDARY }: BookIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M9.47994 3.46879C7.78635 2.6602 5.41916 2.26411 2.24994 2.25004C1.95105 2.24598 1.65803 2.33314 1.40994 2.49989C1.20631 2.63753 1.03962 2.82309 0.924536 3.04027C0.809451 3.25744 0.749494 3.49957 0.749941 3.74536V17.1563C0.749941 18.0629 1.39494 18.7468 2.24994 18.7468C5.58135 18.7468 8.92307 19.058 10.9246 20.9499C10.952 20.9759 10.9864 20.9933 11.0236 20.9999C11.0608 21.0065 11.0991 21.002 11.1337 20.987C11.1684 20.972 11.1979 20.9472 11.2185 20.9156C11.2392 20.884 11.2501 20.847 11.2499 20.8093V5.00723C11.25 4.90062 11.2272 4.79523 11.1831 4.69819C11.1389 4.60114 11.0744 4.51471 10.994 4.44473C10.5355 4.05278 10.0262 3.7245 9.47994 3.46879Z'
        fill={contentColor}
      />
      <Path
        d='M22.59 2.49821C22.3418 2.33188 22.0487 2.24521 21.75 2.24977C18.5808 2.26384 16.2136 2.65806 14.52 3.46852C13.9737 3.72377 13.4643 4.0514 13.0055 4.44259C12.9252 4.51269 12.8609 4.59916 12.8168 4.69618C12.7728 4.7932 12.75 4.89853 12.75 5.00509V20.8081C12.75 20.8443 12.7607 20.8798 12.7807 20.91C12.8008 20.9403 12.8293 20.9639 12.8628 20.978C12.8962 20.992 12.9331 20.9959 12.9687 20.9891C13.0044 20.9823 13.0372 20.9652 13.0631 20.9398C14.2664 19.7445 16.3781 18.7451 21.7519 18.7456C22.1497 18.7456 22.5312 18.5875 22.8125 18.3062C23.0938 18.0249 23.2519 17.6434 23.2519 17.2456V3.74556C23.2524 3.49929 23.1923 3.25667 23.0769 3.03913C22.9614 2.82159 22.7942 2.63582 22.59 2.49821Z'
        fill={contentColor}
      />
    </Svg>
  )
}
