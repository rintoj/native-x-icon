import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FingerPrintOutlineIconProps {
  color?: string
  size?: IconSize
}

export function FingerPrintOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: FingerPrintOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.3009 3.52856C18.2133 3.52878 18.1272 3.50547 18.0516 3.46106C15.9713 2.34731 14.1727 1.87481 12.0164 1.87481C9.87095 1.87481 7.83376 2.40356 5.98079 3.46106C5.71876 3.60919 5.39579 3.50606 5.24391 3.23419C5.17612 3.10296 5.16083 2.95086 5.20114 2.80877C5.24145 2.66668 5.33434 2.54526 5.46094 2.46919C7.4594 1.33574 9.71892 0.743109 12.0164 0.749812C14.3241 0.749812 16.3397 1.27856 18.5503 2.45981C18.6793 2.53073 18.7753 2.64937 18.8178 2.79028C18.8603 2.9312 18.8459 3.08316 18.7777 3.21356C18.7366 3.30615 18.6699 3.38503 18.5854 3.44085C18.5009 3.49668 18.4022 3.52712 18.3009 3.52856ZM2.79516 9.43481C2.68258 9.43401 2.57295 9.39867 2.4811 9.33356C2.3616 9.24475 2.28123 9.11302 2.25692 8.96613C2.23261 8.81923 2.26626 8.66864 2.35079 8.54606C3.42376 6.97106 4.78829 5.73356 6.41438 4.86731C9.81657 3.04669 14.1727 3.03356 17.5856 4.85606C19.2113 5.72231 20.5763 6.94856 21.6492 8.51231C21.7334 8.635 21.7668 8.7855 21.7426 8.93229C21.7183 9.07908 21.6381 9.21078 21.5189 9.29981C21.4611 9.34304 21.395 9.37394 21.3247 9.3906C21.2545 9.40726 21.1815 9.40933 21.1104 9.39668C21.0393 9.38402 20.9716 9.35692 20.9114 9.31703C20.8512 9.27715 20.7998 9.22534 20.7605 9.16481C19.7855 7.74731 18.5503 6.63356 17.0874 5.85731C13.9777 4.20356 10.0008 4.20356 6.90188 5.86856C5.42813 6.65606 4.19298 7.78106 3.21798 9.19669C3.17593 9.27118 3.11431 9.33275 3.03978 9.37472C2.96525 9.41669 2.88066 9.43748 2.79516 9.43481ZM9.5672 23.0154C9.49558 23.0161 9.42466 23.0014 9.35924 22.9723C9.29381 22.9432 9.2354 22.9003 9.18798 22.8467C8.24532 21.8661 7.73438 21.2342 7.01016 19.8748C6.26016 18.4911 5.87251 16.8036 5.87251 14.9923C5.87251 11.6511 8.62454 8.92856 12.0056 8.92856C15.3867 8.92856 18.1406 11.6511 18.1406 14.9923C18.1428 15.0648 18.1303 15.1369 18.1041 15.2045C18.0778 15.2721 18.0383 15.3337 17.9877 15.3857C17.9372 15.4377 17.8768 15.4791 17.81 15.5073C17.7433 15.5356 17.6715 15.5501 17.599 15.5501C17.5265 15.5501 17.4547 15.5356 17.388 15.5073C17.3212 15.4791 17.2607 15.4377 17.2102 15.3857C17.1597 15.3337 17.1202 15.2721 17.0939 15.2045C17.0677 15.1369 17.0552 15.0648 17.0574 14.9923C17.0574 12.2698 14.7924 10.0536 12.008 10.0536C9.2236 10.0536 6.95626 12.2698 6.95626 14.9923C6.95626 16.6123 7.30266 18.1086 7.9636 19.3236C8.65735 20.6173 9.13548 21.1686 9.96845 22.0461C10.0672 22.1553 10.1219 22.2973 10.1219 22.4445C10.1219 22.5917 10.0672 22.7337 9.96845 22.8429C9.86209 22.9502 9.71824 23.0121 9.5672 23.0154ZM17.3367 20.9342C16.0472 20.9342 14.9095 20.5967 13.9777 19.9329C13.1837 19.3765 12.5351 18.6374 12.0865 17.7779C11.6378 16.9184 11.4022 15.9637 11.3995 14.9942C11.3965 14.9211 11.4083 14.8482 11.4341 14.7798C11.46 14.7114 11.4994 14.649 11.55 14.5962C11.6006 14.5434 11.6614 14.5014 11.7287 14.4728C11.7959 14.4441 11.8683 14.4293 11.9414 14.4293C12.0145 14.4293 12.0869 14.4441 12.1542 14.4728C12.2214 14.5014 12.2822 14.5434 12.3328 14.5962C12.3834 14.649 12.4228 14.7114 12.4487 14.7798C12.4746 14.8482 12.4863 14.9211 12.4833 14.9942C12.4851 15.7817 12.6772 16.5571 13.0431 17.2544C13.4091 17.9517 13.9381 18.5503 14.5852 18.9992C15.3544 19.5392 16.2539 19.7961 17.3377 19.7961C17.7151 19.7894 18.0914 19.7517 18.4627 19.6836C18.7552 19.6273 19.0369 19.8298 19.0908 20.1448C19.1183 20.2902 19.0869 20.4405 19.0037 20.5628C18.9205 20.6852 18.7922 20.7695 18.6469 20.7973C18.2153 20.8826 17.7767 20.9278 17.3367 20.9323V20.9342ZM15.1584 23.2498C15.1109 23.2478 15.0637 23.2403 15.0178 23.2273C13.2947 22.7323 12.1678 22.0686 10.9866 20.8648C9.46923 19.3011 8.63532 17.2198 8.63532 14.9923C8.63532 13.1698 10.1306 11.6848 11.9724 11.6848C13.8141 11.6848 15.3099 13.1698 15.3099 14.9923C15.3099 16.1961 16.3177 17.1748 17.5636 17.1748C18.8095 17.1748 19.8174 16.1961 19.8174 14.9923C19.8174 10.7511 16.2956 7.30856 11.9616 7.30856C8.88423 7.30856 6.06704 9.08606 4.79954 11.8423C4.37766 12.7536 4.16016 13.8223 4.16016 14.9923C4.16016 15.8698 4.23563 17.2536 4.88579 19.0536C4.99454 19.3461 4.85344 19.6723 4.57173 19.7736C4.50477 19.7991 4.43336 19.8108 4.36177 19.808C4.29019 19.8052 4.2199 19.7879 4.15515 19.7573C4.09039 19.7266 4.0325 19.6832 3.98495 19.6296C3.9374 19.576 3.90117 19.5134 3.87844 19.4454C3.35563 18.0189 3.0878 16.5116 3.08719 14.9923C3.08719 13.6423 3.33657 12.4142 3.82407 11.3473C5.26548 8.20669 8.46188 6.17231 11.9616 6.17231C16.8919 6.17231 20.9011 10.1211 20.9011 14.9811C20.9011 16.8036 19.4058 18.2886 17.5636 18.2886C15.7214 18.2886 14.2261 16.8036 14.2261 14.9811C14.2266 13.7773 13.2188 12.7967 11.9728 12.7967C10.7269 12.7967 9.71907 13.7754 9.71907 14.9792C9.71907 16.9011 10.4344 18.7029 11.7455 20.0529C12.7767 21.1104 13.7611 21.6936 15.2888 22.1342C15.5813 22.2129 15.7439 22.5279 15.668 22.8204C15.6443 22.9392 15.581 23.0463 15.4884 23.1244C15.3958 23.2024 15.2795 23.2466 15.1584 23.2498Z'
        fill={contentColor}
      />
    </Svg>
  )
}
