import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BoatIconProps {
  color?: string
  size?: IconSize
}

export function BoatIcon({ size = 'normal', color = COLOR.SECONDARY }: BoatIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.5 22.1784C19.5 22.1208 19.4844 22.0643 19.455 22.0148C19.4255 21.9653 19.3833 21.9246 19.3326 21.8972C18.0637 21.2151 16.9064 20.1712 16.3973 19.6472C16.3217 19.5679 16.2208 19.5174 16.1119 19.5045C16.0031 19.4916 15.8932 19.517 15.8011 19.5764C13.4419 21.0961 10.5694 21.097 8.20969 19.5787C8.11677 19.5187 8.00578 19.4932 7.89599 19.5066C7.7862 19.5199 7.68456 19.5713 7.60875 19.6519C7.10391 20.1806 5.95922 21.2128 4.68235 21.8901C4.63158 21.9156 4.58817 21.9537 4.55626 22.0007C4.52435 22.0477 4.50498 22.1021 4.5 22.1587C4.4962 22.2069 4.50351 22.2553 4.52139 22.3002C4.53926 22.3451 4.56722 22.3853 4.6031 22.4177C4.63897 22.4501 4.68181 22.4738 4.72831 22.487C4.7748 22.5002 4.82371 22.5026 4.87125 22.4939C5.8486 22.2979 6.79313 21.8526 7.69312 21.3768C7.75086 21.3464 7.81504 21.3303 7.88028 21.3298C7.94553 21.3293 8.00994 21.3445 8.06812 21.374C9.28662 21.9935 10.6342 22.3164 12.0012 22.3164C13.3681 22.3164 14.7157 21.9935 15.9342 21.374C15.9931 21.3442 16.0582 21.3289 16.1242 21.3294C16.1901 21.3299 16.255 21.3462 16.3134 21.3768C17.2087 21.8456 18.1519 22.2951 19.1259 22.4925C19.172 22.5013 19.2194 22.4998 19.2648 22.488C19.3101 22.4762 19.3523 22.4545 19.3882 22.4244C19.4241 22.3943 19.4529 22.3565 19.4724 22.3139C19.4919 22.2712 19.5016 22.2248 19.5009 22.1779L19.5 22.1784Z'
        fill={contentColor}
      />
      <Path
        d='M22.3458 11.5739C22.1822 11.1806 21.8348 10.8759 21.3661 10.7138L20.25 10.2694V6.375C20.25 5.57935 19.9339 4.81629 19.3713 4.25368C18.8087 3.69107 18.0456 3.375 17.25 3.375H15.75V3C15.75 2.50272 15.5525 2.02581 15.2008 1.67417C14.8492 1.32254 14.3723 1.125 13.875 1.125H10.125C9.62772 1.125 9.1508 1.32254 8.79917 1.67417C8.44754 2.02581 8.25 2.50272 8.25 3V3.375H6.75C5.95435 3.375 5.19129 3.69107 4.62868 4.25368C4.06607 4.81629 3.75 5.57935 3.75 6.375V10.2727L2.64468 10.7128C2.17875 10.8675 1.81828 11.1816 1.65328 11.5772C1.53843 11.8533 1.40718 12.2803 1.59234 12.8175L1.59703 12.8316L3.78422 18.4303C3.86479 18.636 4.00578 18.8125 4.1886 18.9365C4.37143 19.0605 4.58753 19.1262 4.80843 19.125C4.83187 19.125 4.85531 19.125 4.88015 19.1227C6.34828 19.0289 7.50515 18.3131 8.28328 17.6409C9.39468 18.6005 10.702 19.125 12 19.125C13.298 19.125 14.5983 18.6 15.7097 17.6391C16.4873 18.3122 17.6456 19.0298 19.1133 19.1227C19.3456 19.139 19.5771 19.0808 19.7741 18.9565C19.9711 18.8323 20.1234 18.6484 20.2087 18.4317L22.3955 12.8536C22.5492 12.4744 22.5314 12.0211 22.3458 11.5739ZM12.6094 7.22859L12.5559 7.20984C12.1939 7.09593 11.8056 7.09593 11.4436 7.20984L11.4164 7.21828L5.50687 9.57281C5.47841 9.58415 5.44761 9.58834 5.41716 9.58501C5.38671 9.58169 5.35753 9.57096 5.33219 9.55375C5.30684 9.53655 5.2861 9.5134 5.27177 9.48632C5.25744 9.45924 5.24997 9.42907 5.25 9.39844V6.375C5.25 5.97718 5.40803 5.59564 5.68934 5.31434C5.97064 5.03304 6.35217 4.875 6.75 4.875H17.25C17.6478 4.875 18.0294 5.03304 18.3107 5.31434C18.592 5.59564 18.75 5.97718 18.75 6.375V9.39563C18.75 9.42626 18.7426 9.45643 18.7282 9.48351C18.7139 9.51058 18.6932 9.53374 18.6678 9.55094C18.6425 9.56814 18.6133 9.57888 18.5828 9.5822C18.5524 9.58552 18.5216 9.58134 18.4931 9.57L12.6094 7.22859Z'
        fill={contentColor}
      />
    </Svg>
  )
}
