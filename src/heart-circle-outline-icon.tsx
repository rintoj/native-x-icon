import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HeartCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function HeartCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: HeartCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M11.9999 16.8746C11.8494 16.8745 11.7024 16.8291 11.578 16.7443C9.73585 15.4936 8.93804 14.6349 8.49835 14.1001C7.56085 12.9577 7.11179 11.7844 7.12491 10.5141C7.13944 9.05819 8.3071 7.87366 9.72788 7.87366C10.6841 7.87366 11.3685 8.37194 11.7951 8.83037C11.8213 8.85818 11.853 8.88033 11.8882 8.89546C11.9233 8.9106 11.9612 8.91841 11.9994 8.91841C12.0377 8.91841 12.0756 8.9106 12.1107 8.89546C12.1458 8.88033 12.1775 8.85818 12.2038 8.83037C12.6308 8.37194 13.3147 7.87366 14.271 7.87366C15.6918 7.87366 16.8594 9.05819 16.874 10.5141C16.8871 11.7844 16.4376 12.9577 15.5005 14.1001C15.0608 14.6363 14.263 15.4936 12.4208 16.7443C12.2967 16.8289 12.1501 16.8743 11.9999 16.8746Z'
        fill={contentColor}
      />
    </Svg>
  )
}
