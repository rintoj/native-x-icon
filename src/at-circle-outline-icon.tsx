import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface AtCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function AtCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: AtCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.0037 12.0037C21.0037 7.03493 16.9724 3.00368 12.0037 3.00368C7.03491 3.00368 3.00366 7.03493 3.00366 12.0037C3.00366 16.9724 7.03491 21.0037 12.0037 21.0037C16.9724 21.0037 21.0037 16.9738 21.0037 12.0037Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M14.1005 16.7949C13.1241 17.1427 12.5044 17.2444 11.5603 17.2444C8.69298 17.2444 6.57329 14.8974 6.82594 12.0019C7.0786 9.10645 9.60938 6.75989 12.4753 6.75989C15.7059 6.75989 17.4811 8.89505 17.2317 11.7544C17.0442 13.8891 15.6942 14.5041 14.9869 14.3794C14.3213 14.2599 13.7719 13.6519 13.8736 12.488L14.137 10.3946C13.7817 9.96474 12.8194 9.55083 11.7966 9.71302C10.8642 9.85786 9.79688 10.6875 9.68251 12.0001C9.56813 13.3126 10.3617 14.3832 11.5542 14.3832C12.7467 14.3832 13.7977 13.5211 13.9303 12.0001'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}
