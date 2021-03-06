import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BeerOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BeerOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BeerOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M16.5 9.375V20.625C16.4985 21.1218 16.3005 21.5979 15.9492 21.9492C15.5979 22.3005 15.1218 22.4985 14.625 22.5H6.375C5.87818 22.4985 5.40212 22.3005 5.05081 21.9492C4.6995 21.5979 4.50148 21.1218 4.5 20.625V10.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M16.5 10.5H18.375C19.0706 10.502 19.7371 10.7792 20.229 11.271C20.7208 11.7629 20.998 12.4294 21 13.125V16.875C20.998 17.5706 20.7208 18.2371 20.229 18.729C19.7371 19.2208 19.0706 19.498 18.375 19.5H16.5'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path d='M10.5 12V19.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M13.5 12V19.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M7.5 12V19.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M15 5.25C15.5967 5.25 16.169 5.48705 16.591 5.90901C17.0129 6.33097 17.25 6.90326 17.25 7.5C17.25 8.09674 17.0129 8.66903 16.591 9.09099C16.169 9.51295 15.5967 9.75 15 9.75C14.3789 9.75 13.6261 9.40734 13.2188 9H7.5C7.125 10.0312 6.23438 10.5 5.25 10.5C4.65326 10.5 4.08097 10.2629 3.65901 9.84099C3.23705 9.41903 3 8.84674 3 8.25C3 7.65326 3.23705 7.08097 3.65901 6.65901C4.08097 6.23705 4.65326 6 5.25 6C5.68876 6.01844 6.11249 6.16512 6.46875 6.42188'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M4.30588 6.20769C4.12203 6.02553 3.97788 5.80728 3.8825 5.56669C3.78713 5.32609 3.7426 5.06835 3.75171 4.8097C3.76083 4.55105 3.82339 4.29708 3.93546 4.0638C4.04754 3.83051 4.2067 3.62295 4.40292 3.45419C4.59914 3.28542 4.82817 3.15911 5.0756 3.0832C5.32303 3.00729 5.58349 2.98342 5.84059 3.01311C6.0977 3.04279 6.34587 3.12538 6.56949 3.25568C6.79311 3.38597 6.98734 3.56115 7.13994 3.77019C7.13994 3.77019 7.49994 4.26566 7.49994 4.50003'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M6.83569 3.03328C7.65085 2.10422 8.79226 1.5 10.1249 1.5C12.5802 1.5 14.5312 3.50813 14.5312 5.96297C14.5313 6.24278 14.5051 6.52198 14.4529 6.79688'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}
