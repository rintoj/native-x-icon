import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BonfireOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BonfireOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BonfireOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.8147 17.2654C12.7767 16.8327 12.3994 16.4948 11.9452 16.4948C11.7494 16.4934 11.5589 16.5579 11.4042 16.6779C11.2494 16.7978 11.1395 16.9663 11.092 17.1562L10.2389 21.299C10.2107 21.4201 10.1961 21.544 10.1953 21.6684C10.1953 22.6026 10.9772 23.2518 11.9452 23.2518C12.9131 23.2518 13.6955 22.6026 13.6955 21.6684C13.695 21.5187 13.6746 21.3697 13.635 21.2254L12.8147 17.2654Z'
        fill={contentColor}
      />
      <Path
        d='M19.268 19.1183C19.1812 19.0422 19.0879 18.974 18.9891 18.9143L15.7299 16.6367C15.4125 16.4375 15.0736 16.4431 14.8275 16.6836C14.7201 16.7858 14.6519 16.9224 14.6348 17.0697C14.6176 17.217 14.6527 17.3657 14.7338 17.4898L17.1947 20.7242C17.2509 20.8026 17.3136 20.8762 17.3822 20.944C17.8088 21.4208 18.7547 21.447 19.2746 20.944C19.7874 20.4326 19.7813 19.5214 19.268 19.1183Z'
        fill={contentColor}
      />
      <Path
        d='M21.7172 15.7445H18.4163C18.203 15.7445 18 15.9015 18 16.127C18 16.3525 18.1383 16.495 18.3244 16.5564L21.4383 17.5197C21.8906 17.6251 22.5 17.222 22.5 16.7186C22.5 16.0783 22.1437 15.7445 21.7172 15.7445Z'
        fill={contentColor}
      />
      <Path
        d='M6.01031 16.1251C6.01031 15.8908 5.79703 15.7426 5.56734 15.7426H2.26641C1.85062 15.7426 1.5 16.1917 1.5 16.6951C1.5 17.1986 2.09156 17.6251 2.54531 17.5197L5.70609 16.5564C5.91188 16.495 6.01031 16.3595 6.01031 16.1251Z'
        fill={contentColor}
      />
      <Path
        d='M8.2758 16.6406L5.01564 18.9084C4.91439 18.9653 4.82002 19.0338 4.73439 19.1123C4.6102 19.2278 4.51115 19.3677 4.44342 19.5231C4.37569 19.6786 4.34073 19.8464 4.34073 20.016C4.34073 20.1856 4.37569 20.3534 4.44342 20.5089C4.51115 20.6644 4.6102 20.8043 4.73439 20.9198C4.99013 21.1613 5.32857 21.2959 5.68033 21.2959C6.03209 21.2959 6.37053 21.1613 6.62627 20.9198C6.69595 20.8531 6.75876 20.7796 6.81377 20.7004L9.27658 17.4843C9.44064 17.2227 9.41346 16.8988 9.18283 16.6846C9.06125 16.5712 8.90343 16.5046 8.73738 16.4965C8.57133 16.4885 8.40779 16.5395 8.2758 16.6406Z'
        fill={contentColor}
      />
      <Path
        d='M17.25 5.86366C17.25 3.25273 14.9428 1.68429 12.8343 1.50148C12.7836 1.49705 12.7324 1.50303 12.684 1.51903C12.6357 1.53503 12.591 1.56073 12.5529 1.59455C12.5148 1.62837 12.484 1.66961 12.4623 1.71575C12.4407 1.76188 12.4286 1.81195 12.427 1.86288C12.2807 5.42538 7.29981 7.05148 6.80809 10.2385C6.47996 12.3666 7.58856 13.6309 8.41637 14.2594C8.50402 14.3261 8.60532 14.3725 8.713 14.3954C8.82068 14.4183 8.9321 14.4171 9.03928 14.3919C9.14645 14.3668 9.24674 14.3182 9.33298 14.2498C9.41921 14.1813 9.48925 14.0947 9.53809 13.996C10.5928 11.8463 13.0223 11.0199 14.6812 9.96757C16.6912 8.69257 17.25 7.32194 17.25 5.86366Z'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M11.25 4.48596C10.6491 3.40783 9.81984 3.03283 8.47687 3.0033C8.43001 3.00068 8.38396 3.01638 8.34845 3.04708C8.31294 3.07778 8.29075 3.12108 8.28656 3.16783C8.24203 4.7719 6.75 5.27018 6.75 6.59674C6.75 7.50471 7.00266 7.95612 7.55438 8.43799'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M16.5211 8.37958C16.9242 9.05036 17.25 9.78957 17.25 10.6296C17.25 13.0914 15.2592 14.9936 12.8034 14.9936C11.6669 14.9945 10.5736 14.5581 9.75 13.7749'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}