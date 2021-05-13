import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ConstructOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ConstructOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ConstructOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.4688 8.63024C20.2302 8.86731 19.9075 9.00037 19.5712 9.00037C19.2348 9.00037 18.9121 8.86731 18.6735 8.63024L17.6198 7.57602C17.3826 7.33756 17.2495 7.01492 17.2495 6.6786C17.2495 6.34229 17.3826 6.01964 17.6198 5.78118L20.0052 3.39571C20.0098 3.39113 20.0132 3.38549 20.0151 3.37929C20.0171 3.37309 20.0174 3.36652 20.0162 3.36015C20.015 3.35377 20.0123 3.34779 20.0083 3.34271C20.0042 3.33764 19.999 3.33362 19.9931 3.33102C18.4537 2.67196 16.4573 3.00712 15.1898 4.26571C13.9766 5.46993 13.9077 7.27837 14.3521 8.85946C14.4153 9.08405 14.4151 9.32172 14.3517 9.54623C14.2882 9.77073 14.1639 9.97333 13.9926 10.1316L5.88321 17.6673C5.68965 17.8406 5.53348 18.0516 5.42424 18.2873C5.31499 18.523 5.25497 18.7785 5.24785 19.0383C5.24073 19.298 5.28665 19.5564 5.3828 19.7978C5.47896 20.0391 5.62333 20.2584 5.80709 20.442C5.99086 20.6257 6.21015 20.7699 6.45156 20.866C6.69297 20.962 6.95143 21.0078 7.21114 21.0005C7.47085 20.9933 7.72636 20.9331 7.96203 20.8238C8.1977 20.7144 8.40859 20.5581 8.5818 20.3645L16.1826 12.241C16.3392 12.0725 16.5388 11.9498 16.7599 11.8862C16.981 11.8226 17.2152 11.8205 17.4374 11.8801C19.0059 12.2991 20.7885 12.2204 21.9876 11.0391C23.2762 9.76977 23.5541 7.52634 22.9298 6.24243C22.9269 6.2368 22.9228 6.23192 22.9177 6.22819C22.9127 6.22446 22.9068 6.22199 22.9005 6.22098C22.8943 6.21998 22.8879 6.22046 22.8819 6.2224C22.8759 6.22433 22.8705 6.22766 22.866 6.23212L20.4688 8.63024Z'
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <Path
        d='M10.5001 13.3124C9.68071 12.5156 9.30524 12.1448 9.04696 11.8926C8.9177 11.7642 8.83285 11.5978 8.80477 11.4178C8.77669 11.2378 8.80686 11.0535 8.89087 10.8918C8.93516 10.8123 8.99039 10.7394 9.05493 10.6752L9.78993 9.95852C9.86598 9.88233 9.95545 9.82083 10.0538 9.77712C10.2091 9.70837 10.3815 9.68779 10.5486 9.71804C10.7158 9.74829 10.87 9.82798 10.9913 9.9468C11.2468 10.1948 11.7146 10.6499 12.5574 11.4712'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M14.8626 13.6549C16.7821 15.4408 19.1104 17.5582 20.0188 18.3147C20.0868 18.3707 20.1422 18.4403 20.1817 18.5191C20.2211 18.5978 20.2436 18.6839 20.2478 18.7719C20.2519 18.8598 20.2376 18.9476 20.2058 19.0297C20.1739 19.1118 20.1253 19.1863 20.0629 19.2485L18.4982 20.8127C18.4345 20.8749 18.3589 20.9235 18.2758 20.9556C18.1927 20.9876 18.104 21.0024 18.015 20.9991C17.9261 20.9958 17.8387 20.9744 17.7583 20.9362C17.6778 20.898 17.606 20.8439 17.5471 20.7771C16.7723 19.878 14.6835 17.6313 12.8939 15.7615'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M0.812827 9.07031L2.19142 7.72313C2.21248 7.70243 2.23748 7.68616 2.26493 7.67529C2.29239 7.66442 2.32175 7.65917 2.35127 7.65985C2.41078 7.65921 2.46817 7.68192 2.51111 7.72313V7.72313C2.56103 7.77251 2.62155 7.80987 2.68807 7.83237C2.75459 7.85487 2.82537 7.86191 2.89502 7.85297C3.07455 7.83328 3.26627 7.77797 3.39049 7.65985C3.67174 7.38797 3.34642 6.85219 3.59392 6.50953C3.87693 6.13442 4.18681 5.78037 4.52111 5.45016C4.80236 5.17453 5.91987 4.12266 7.79768 3.36656C8.3982 3.12383 9.03996 2.99936 9.68768 3C10.7466 3 11.5627 3.46875 11.8561 3.73453C12.0322 3.90211 12.1935 4.08467 12.338 4.28016C12.1969 4.22814 12.0527 4.18478 11.9063 4.15031C11.5983 4.08499 11.2825 4.06509 10.9688 4.09125C10.3439 4.14235 9.59018 4.43156 9.18753 4.7475C8.53596 5.26313 8.25612 5.95313 8.21206 6.84328C8.18018 7.50516 8.33956 7.87922 9.90424 9.44438C9.95772 9.50407 9.98595 9.58219 9.98297 9.66228C9.98 9.74237 9.94606 9.81819 9.88831 9.87375L9.03424 10.7175C8.97471 10.7759 8.89488 10.8089 8.8115 10.8097C8.72812 10.8105 8.64768 10.779 8.58706 10.7217C7.55862 9.69328 6.86908 9.17063 6.47768 8.93297C6.08627 8.69532 5.77127 8.62828 5.61986 8.61188C5.32251 8.58241 5.02333 8.64579 4.76346 8.79328C4.71786 8.81834 4.67617 8.84992 4.63971 8.88703C4.57885 8.94994 4.53105 9.02428 4.49907 9.10576C4.46709 9.18724 4.45157 9.27425 4.4534 9.36176C4.45523 9.44927 4.47438 9.53555 4.50973 9.61563C4.54509 9.6957 4.59596 9.76798 4.65939 9.82828L4.73955 9.90328C4.76036 9.92351 4.7769 9.9477 4.7882 9.97443C4.79949 10.0012 4.80531 10.0299 4.80531 10.0589C4.80531 10.0879 4.79949 10.1167 4.7882 10.1434C4.7769 10.1701 4.76036 10.1943 4.73955 10.2145L3.36236 11.5594C3.3415 11.5805 3.31659 11.5972 3.28913 11.6085C3.26166 11.6198 3.2322 11.6254 3.20252 11.625C3.14302 11.6256 3.08565 11.6029 3.04267 11.5617L0.812827 9.38531C0.77247 9.34281 0.749969 9.28643 0.749969 9.22781C0.749969 9.1692 0.77247 9.11282 0.812827 9.07031V9.07031Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
