import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CloudIconProps {
  color?: string
  size?: IconSize
}

export function CloudIcon({ size = 'normal', color = COLOR.SECONDARY }: CloudIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.5625 20.2501H6.375C4.66687 20.2501 3.07687 19.6608 1.89797 18.5902C0.674063 17.4788 0 15.9376 0 14.2501C0 12.5354 0.627656 11.0569 1.815 9.97413C2.66391 9.19929 3.79406 8.64991 5.05781 8.38647C5.1743 8.36237 5.28338 8.31091 5.37605 8.23633C5.46872 8.16175 5.54232 8.0662 5.59078 7.95757C6.04073 6.9447 6.71469 6.04715 7.56188 5.33257C8.80125 4.29804 10.3359 3.75007 12 3.75007C13.8718 3.74192 15.6733 4.46322 17.0222 5.76101C18.1814 6.8771 18.9675 8.35225 19.3275 10.0735C19.3564 10.2147 19.4254 10.3445 19.5261 10.4475C19.6269 10.5505 19.7551 10.6223 19.8956 10.6543C22.0312 11.1291 24 12.6765 24 15.3751C24 16.9402 23.4263 18.2241 22.3402 19.089C21.3858 19.8484 20.0798 20.2501 18.5625 20.2501Z'
        fill={contentColor}
      />
    </Svg>
  )
}
