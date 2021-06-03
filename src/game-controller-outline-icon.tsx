import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GameControllerOutlineIconProps {
  color?: string
  size?: IconSize
}

export function GameControllerOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: GameControllerOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.9145 11.6636C21.052 7.76454 19.7728 5.27735 17.7225 4.67126C17.3254 4.55542 16.9136 4.49763 16.5 4.4997C15.2395 4.4997 14.2448 5.2497 12 5.2497C9.75515 5.2497 8.75859 4.4997 7.49999 4.4997C7.06909 4.49747 6.63998 4.55521 6.22499 4.67126C4.17187 5.27735 2.90343 7.76688 2.03109 11.6636C1.14046 15.6438 1.30171 18.7886 3.04265 19.3924C4.2614 19.8142 5.35124 18.9419 6.38343 17.658C7.5553 16.1955 8.99859 15.7455 12 15.7455C15.0014 15.7455 16.3884 16.1955 17.5622 17.658C18.5934 18.9428 19.7236 19.8044 20.91 19.3999C22.8328 18.7431 22.8056 15.6906 21.9145 11.6636Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M13.6875 11.4375C14.2053 11.4375 14.625 11.0178 14.625 10.5C14.625 9.98223 14.2053 9.5625 13.6875 9.5625C13.1697 9.5625 12.75 9.98223 12.75 10.5C12.75 11.0178 13.1697 11.4375 13.6875 11.4375Z'
        fill={contentColor}
      />
      <Path
        d='M15.75 13.5C15.5645 13.5 15.3831 13.445 15.2289 13.3418C15.0747 13.2387 14.9545 13.0922 14.8836 12.9207C14.8128 12.7493 14.7943 12.5607 14.8307 12.3787C14.8671 12.1968 14.9566 12.0298 15.0879 11.8988C15.2193 11.7677 15.3865 11.6786 15.5685 11.6427C15.7506 11.6068 15.9391 11.6257 16.1104 11.697C16.2817 11.7684 16.4279 11.8889 16.5307 12.0434C16.6334 12.1978 16.688 12.3793 16.6875 12.5648C16.6869 12.8131 16.5878 13.0509 16.4121 13.2262C16.2363 13.4016 15.9982 13.5 15.75 13.5Z'
        fill={contentColor}
      />
      <Path
        d='M15.75 9.375C16.2678 9.375 16.6875 8.95527 16.6875 8.4375C16.6875 7.91973 16.2678 7.5 15.75 7.5C15.2322 7.5 14.8125 7.91973 14.8125 8.4375C14.8125 8.95527 15.2322 9.375 15.75 9.375Z'
        fill={contentColor}
      />
      <Path
        d='M17.8125 11.4375C18.3303 11.4375 18.75 11.0178 18.75 10.5C18.75 9.98223 18.3303 9.5625 17.8125 9.5625C17.2947 9.5625 16.875 9.98223 16.875 10.5C16.875 11.0178 17.2947 11.4375 17.8125 11.4375Z'
        fill={contentColor}
      />
      <Path
        d='M7.5 8.25V12.75'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M9.75 10.5H5.25'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
