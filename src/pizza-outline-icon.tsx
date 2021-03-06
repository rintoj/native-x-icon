import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PizzaOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PizzaOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PizzaOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.9731 5.76938C16.7986 4.88344 14.5167 4.5 12 4.5C9.48325 4.5 7.02653 4.92188 5.02028 5.75063C4.64153 5.90531 4.30496 6.1725 4.54825 6.66469C4.74559 7.06453 9.51559 17.5781 11.3278 21.3281C11.3888 21.4548 11.4844 21.5617 11.6034 21.6365C11.7225 21.7113 11.8603 21.751 12.0009 21.751C12.1415 21.751 12.2793 21.7113 12.3984 21.6365C12.5174 21.5617 12.613 21.4548 12.674 21.3281L19.4264 6.69281C19.5759 6.36937 19.4686 5.97094 18.9731 5.76938Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M20.4553 3.87563C18.0146 2.91 15.008 2.25 12 2.25C8.99205 2.25 6.03049 2.84906 3.53815 3.8475C3.3183 3.9375 2.90627 4.14516 3.01924 4.49438L3.47299 5.62501C3.66049 6.00938 3.8794 6.00938 4.17893 6.00938C4.26283 6.00938 4.38002 5.96251 4.52018 5.90719C6.90531 4.98075 9.44128 4.50366 12 4.5C14.6606 4.5 17.3864 5.06251 19.4813 5.90626C19.6496 5.97188 19.7433 6.00844 19.8225 6.00844C20.131 6.00844 20.3091 6.1111 20.5256 5.62876L20.9836 4.5C21.0778 4.21875 20.7497 3.99282 20.4553 3.87563Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z'
        fill={contentColor}
      />
      <Path
        d='M15 11.25C15.8284 11.25 16.5 10.5784 16.5 9.75C16.5 8.92157 15.8284 8.25 15 8.25C14.1716 8.25 13.5 8.92157 13.5 9.75C13.5 10.5784 14.1716 11.25 15 11.25Z'
        fill={contentColor}
      />
      <Path
        d='M12 16.5C12.8284 16.5 13.5 15.8284 13.5 15C13.5 14.1716 12.8284 13.5 12 13.5C11.1716 13.5 10.5 14.1716 10.5 15C10.5 15.8284 11.1716 16.5 12 16.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
