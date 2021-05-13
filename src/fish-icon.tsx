import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FishIconProps {
  color?: string
  size?: IconSize
}

export function FishIcon({ size = 'normal', color = COLOR.SECONDARY }: FishIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <G clip-path='url(#clip0)'>
        <Path
          d='M24 11.9997C24 11.2244 23.3311 9.80785 21.8621 8.53097C21.0236 7.80972 20.0679 7.2371 19.0365 6.83785C19.0022 6.82502 18.9643 6.82539 18.9303 6.83891C18.8962 6.85242 18.8684 6.87811 18.8522 6.91097C18.8452 6.92457 18.8382 6.93769 18.8302 6.95129L18.3807 7.6966C17.6226 9.00564 17.2237 10.4917 17.2242 12.0044C17.2248 13.5171 17.6249 15.0028 18.384 16.3113L18.3947 16.3296L18.8044 17.0796C18.8262 17.1194 18.8616 17.15 18.9042 17.1657C18.9468 17.1814 18.9936 17.1811 19.036 17.1649C22.4827 15.8163 24 13.1946 24 11.9997ZM19.5976 11.9932C19.4422 12.0135 19.2844 11.9846 19.1463 11.9107C19.0082 11.8368 18.8967 11.7215 18.8275 11.5809C18.7583 11.4404 18.7348 11.2817 18.7603 11.1272C18.7859 10.9726 18.8592 10.8299 18.97 10.7192C19.0807 10.6084 19.2234 10.5351 19.378 10.5095C19.5325 10.484 19.6912 10.5075 19.8317 10.5767C19.9722 10.6459 20.0876 10.7574 20.1615 10.8955C20.2354 11.0336 20.2643 11.1914 20.244 11.3468C20.2225 11.5107 20.1475 11.6629 20.0306 11.7798C19.9137 11.8967 19.7615 11.9717 19.5976 11.9932Z'
          fill={contentColor}
        />
        <Path
          d='M15.7242 12.0003C15.7235 10.222 16.1939 8.47532 17.0873 6.9378L17.0929 6.92796L17.3095 6.56843C17.3251 6.54281 17.3344 6.51382 17.3365 6.48387C17.3387 6.45393 17.3335 6.42392 17.3216 6.39636C17.3098 6.3688 17.2914 6.34449 17.2682 6.3255C17.2449 6.3065 17.2175 6.29336 17.1881 6.28718C16.5813 6.16026 15.9663 6.07583 15.3478 6.03452C15.2748 6.02981 15.2049 6.00373 15.1467 5.95952C14.2429 5.27233 12.4514 4.07046 10.6251 3.76155C10.5003 3.74087 10.3723 3.7521 10.253 3.79418C10.1337 3.83626 10.027 3.90783 9.94282 4.00223C9.85862 4.09663 9.79966 4.2108 9.77143 4.3341C9.7432 4.45741 9.74662 4.58586 9.78137 4.70749L10.2792 6.44983C10.2921 6.49499 10.2877 6.54335 10.2667 6.58537C10.2456 6.62738 10.2096 6.65998 10.1657 6.67671C8.4384 7.31843 6.95059 8.49312 5.86544 9.38843C5.79902 9.44279 5.71597 9.47272 5.63015 9.47323C5.54433 9.47375 5.46093 9.4448 5.39387 9.39124C5.24637 9.27405 5.09497 9.15859 4.93965 9.04484C3.08153 7.6878 0.89856 7.50921 0.806685 7.50265C0.690036 7.49383 0.572942 7.51243 0.464762 7.55695C0.356582 7.60147 0.260316 7.67068 0.183657 7.75904C0.106999 7.8474 0.0520734 7.95248 0.023271 8.06586C-0.00553132 8.17924 -0.00741209 8.29778 0.0177791 8.41202C0.0374666 8.50249 0.44856 10.3194 1.50372 11.7687C1.55122 11.8337 1.57682 11.9121 1.57682 11.9926C1.57682 12.073 1.55122 12.1514 1.50372 12.2164C0.44856 13.6653 0.0374666 15.4826 0.0177791 15.5731C-0.00741209 15.6874 -0.00553132 15.8059 0.023271 15.9193C0.0520734 16.0327 0.106999 16.1377 0.183657 16.2261C0.260316 16.3145 0.356582 16.3837 0.464762 16.4282C0.572942 16.4727 0.690036 16.4913 0.806685 16.4825C0.900435 16.4759 3.08153 16.295 4.93731 14.9412C5.08887 14.83 5.23684 14.7172 5.38122 14.6028C5.44833 14.5493 5.53176 14.5204 5.61758 14.521C5.7034 14.5216 5.78642 14.5517 5.85278 14.6061C6.94262 15.5056 8.43325 16.6817 10.1653 17.3248C10.2091 17.3416 10.245 17.3741 10.266 17.416C10.287 17.4579 10.2915 17.5062 10.2787 17.5512L9.77903 19.2941C9.74428 19.4157 9.74086 19.5441 9.76909 19.6674C9.79731 19.7907 9.85627 19.9049 9.94048 19.9993C10.0247 20.0937 10.1314 20.1653 10.2507 20.2074C10.37 20.2494 10.498 20.2607 10.6228 20.24C11.4272 20.1041 13.0547 19.6372 15.1251 18.0448C15.1843 17.9997 15.2553 17.9728 15.3295 17.9675C15.9473 17.927 16.5616 17.844 17.1679 17.7191C17.1966 17.713 17.2234 17.7004 17.2463 17.6822C17.2691 17.664 17.2874 17.6407 17.2997 17.6141C17.3119 17.5876 17.3178 17.5585 17.3168 17.5293C17.3158 17.5 17.308 17.4714 17.294 17.4458L17.0826 17.0572C16.1918 15.5208 15.7231 13.7762 15.7242 12.0003Z'
          fill={contentColor}
        />
      </G>
      <Defs>
        <ClipPath id='clip0'>
          <Rect width='24' height='24' fill={contentColor} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}