import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GameControllerIconProps {
  color?: string
  size?: IconSize
}

export function GameControllerIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: GameControllerIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.6467 11.502C21.6525 7.00715 20.1563 4.60809 17.9367 3.95278C17.4702 3.81593 16.9862 3.74756 16.5 3.74981C15.8573 3.74981 15.2977 3.90637 14.7056 4.07231C13.9922 4.27247 13.1817 4.49981 12 4.49981C10.8183 4.49981 10.0073 4.27293 9.2925 4.07278C8.7 3.90637 8.14078 3.74981 7.5 3.74981C6.99723 3.74807 6.49666 3.81622 6.01266 3.95231C3.80484 4.60481 2.30953 7.00293 1.30078 11.4992C0.216091 16.3376 0.749997 19.3925 2.79797 20.1012C3.07869 20.2002 3.37406 20.2512 3.67172 20.2522C5.07469 20.2522 6.19969 19.0836 6.96844 18.1268C7.83703 17.044 8.85375 16.4947 12 16.4947C14.8102 16.4947 15.9731 16.8757 16.9777 18.1268C17.6091 18.9134 18.2058 19.4637 18.8011 19.8101C19.5928 20.2704 20.3841 20.3726 21.1524 20.1087C22.3627 19.6957 23.0564 18.604 23.2149 16.8631C23.3353 15.5281 23.1497 13.7745 22.6467 11.502ZM9.75 11.2498H8.25V12.7498C8.25 12.9487 8.17098 13.1395 8.03033 13.2801C7.88968 13.4208 7.69891 13.4998 7.5 13.4998C7.30109 13.4998 7.11032 13.4208 6.96967 13.2801C6.82902 13.1395 6.75 12.9487 6.75 12.7498V11.2498H5.25C5.05109 11.2498 4.86032 11.1708 4.71967 11.0301C4.57902 10.8895 4.5 10.6987 4.5 10.4998C4.5 10.3009 4.57902 10.1101 4.71967 9.96948C4.86032 9.82883 5.05109 9.74981 5.25 9.74981H6.75V8.24981C6.75 8.0509 6.82902 7.86013 6.96967 7.71948C7.11032 7.57883 7.30109 7.49981 7.5 7.49981C7.69891 7.49981 7.88968 7.57883 8.03033 7.71948C8.17098 7.86013 8.25 8.0509 8.25 8.24981V9.74981H9.75C9.94891 9.74981 10.1397 9.82883 10.2803 9.96948C10.421 10.1101 10.5 10.3009 10.5 10.4998C10.5 10.6987 10.421 10.8895 10.2803 11.0301C10.1397 11.1708 9.94891 11.2498 9.75 11.2498ZM13.6875 11.4373C13.5021 11.4373 13.3208 11.3823 13.1667 11.2793C13.0125 11.1763 12.8923 11.0299 12.8214 10.8586C12.7504 10.6873 12.7318 10.4988 12.768 10.3169C12.8042 10.1351 12.8935 9.96801 13.0246 9.8369C13.1557 9.70579 13.3228 9.6165 13.5046 9.58032C13.6865 9.54415 13.875 9.56272 14.0463 9.63367C14.2176 9.70463 14.364 9.82479 14.467 9.97896C14.57 10.1331 14.625 10.3144 14.625 10.4998C14.625 10.7484 14.5262 10.9869 14.3504 11.1627C14.1746 11.3385 13.9361 11.4373 13.6875 11.4373ZM15.75 13.4998C15.5645 13.4998 15.3831 13.4448 15.2289 13.3416C15.0747 13.2385 14.9545 13.092 14.8836 12.9205C14.8128 12.7491 14.7943 12.5605 14.8307 12.3785C14.8671 12.1966 14.9566 12.0296 15.0879 11.8986C15.2193 11.7675 15.3865 11.6784 15.5686 11.6425C15.7506 11.6066 15.9391 11.6255 16.1104 11.6968C16.2817 11.7682 16.4279 11.8887 16.5306 12.0432C16.6334 12.1976 16.688 12.3791 16.6875 12.5647C16.6869 12.8129 16.5878 13.0507 16.4121 13.2261C16.2363 13.4014 15.9982 13.4998 15.75 13.4998ZM15.75 9.37481C15.5646 9.37481 15.3833 9.31983 15.2292 9.21681C15.075 9.1138 14.9548 8.96738 14.8839 8.79608C14.8129 8.62477 14.7943 8.43627 14.8305 8.25441C14.8667 8.07256 14.956 7.90551 15.0871 7.7744C15.2182 7.64329 15.3853 7.554 15.5671 7.51782C15.749 7.48165 15.9375 7.50022 16.1088 7.57117C16.2801 7.64213 16.4265 7.76229 16.5295 7.91646C16.6325 8.07063 16.6875 8.25189 16.6875 8.43731C16.6875 8.68595 16.5887 8.92441 16.4129 9.10022C16.2371 9.27604 15.9986 9.37481 15.75 9.37481ZM17.8125 11.4373C17.6271 11.4373 17.4458 11.3823 17.2917 11.2793C17.1375 11.1763 17.0173 11.0299 16.9464 10.8586C16.8754 10.6873 16.8568 10.4988 16.893 10.3169C16.9292 10.1351 17.0185 9.96801 17.1496 9.8369C17.2807 9.70579 17.4478 9.6165 17.6296 9.58032C17.8115 9.54415 18 9.56272 18.1713 9.63367C18.3426 9.70463 18.489 9.82479 18.592 9.97896C18.695 10.1331 18.75 10.3144 18.75 10.4998C18.75 10.7484 18.6512 10.9869 18.4754 11.1627C18.2996 11.3385 18.0611 11.4373 17.8125 11.4373Z'
        fill={contentColor}
      />
    </Svg>
  )
}