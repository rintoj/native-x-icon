import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SkullOutlineIconProps {
  color?: string
  size?: IconSize
}

export function SkullOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SkullOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 10.5765V15.2171C21 15.8167 20.8203 16.4025 20.4842 16.899C20.1481 17.3954 19.6709 17.7798 19.1142 18.0025L18.0042 18.4464C17.7724 18.5392 17.5674 18.6884 17.4079 18.8806C17.2483 19.0727 17.1393 19.3016 17.0906 19.5465L16.6219 21.8968C16.5878 22.0671 16.4957 22.2202 16.3613 22.3302C16.227 22.4401 16.0586 22.5 15.885 22.4996H8.115C7.94163 22.4997 7.7736 22.4396 7.63951 22.3297C7.50543 22.2198 7.41356 22.0668 7.37953 21.8968L6.90937 19.5465C6.86049 19.3018 6.75135 19.0732 6.59182 18.8814C6.4323 18.6895 6.22743 18.5405 5.99578 18.4478L4.88578 18.0039C4.32912 17.7812 3.85194 17.3968 3.51581 16.9004C3.17968 16.4039 3.00002 15.8181 3 15.2186V10.4996C3 5.53465 7.02047 1.50855 11.9836 1.49965C16.9467 1.49074 21 5.61762 21 10.5765Z'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M7.875 15C8.91053 15 9.75 14.1605 9.75 13.125C9.75 12.0895 8.91053 11.25 7.875 11.25C6.83947 11.25 6 12.0895 6 13.125C6 14.1605 6.83947 15 7.875 15Z'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M16.125 15C17.1605 15 18 14.1605 18 13.125C18 12.0895 17.1605 11.25 16.125 11.25C15.0895 11.25 14.25 12.0895 14.25 13.125C14.25 14.1605 15.0895 15 16.125 15Z'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M12 15.75L11.25 18H12.75L12 15.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M12 21V22.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M9.75 21V22.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M14.25 21V22.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
