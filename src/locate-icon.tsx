import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LocateIconProps {
  color?: string
  size?: IconSize
}

export function LocateIcon({ size = 'normal', color = COLOR.SECONDARY }: LocateIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 1.5C12.6213 1.5 13.125 2.00368 13.125 2.625V4.5C13.125 5.12132 12.6213 5.625 12 5.625C11.3787 5.625 10.875 5.12132 10.875 4.5V2.625C10.875 2.00368 11.3787 1.5 12 1.5Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 18.375C12.6213 18.375 13.125 18.8787 13.125 19.5V21.375C13.125 21.9963 12.6213 22.5 12 22.5C11.3787 22.5 10.875 21.9963 10.875 21.375V19.5C10.875 18.8787 11.3787 18.375 12 18.375Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.62477 5.45218C8.9198 4.58686 10.4424 4.125 11.9999 4.125C14.0885 4.125 16.0915 4.95469 17.5683 6.43153C19.0452 7.90838 19.8749 9.91142 19.8749 12C19.8749 13.5575 19.413 15.0801 18.5477 16.3751C17.6824 17.6702 16.4525 18.6795 15.0135 19.2756C13.5745 19.8716 11.9911 20.0275 10.4635 19.7237C8.93594 19.4198 7.53275 18.6698 6.43142 17.5685C5.33008 16.4671 4.58006 15.0639 4.2762 13.5363C3.97234 12.0087 4.12829 10.4253 4.72433 8.98637C5.32037 7.5474 6.32973 6.31749 7.62477 5.45218ZM11.9999 6.375C10.8874 6.375 9.79983 6.7049 8.8748 7.32298C7.94977 7.94107 7.2288 8.81957 6.80306 9.84741C6.37732 10.8752 6.26592 12.0062 6.48296 13.0974C6.70001 14.1885 7.23574 15.1908 8.02241 15.9775C8.80908 16.7641 9.81136 17.2999 10.9025 17.5169C11.9936 17.734 13.1246 17.6226 14.1525 17.1968C15.1803 16.7711 16.0588 16.0501 16.6769 15.1251C17.295 14.2001 17.6249 13.1125 17.6249 12C17.6249 10.5082 17.0322 9.07742 15.9774 8.02252C14.9225 6.96763 13.4917 6.375 11.9999 6.375Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.375 12C18.375 11.3787 18.8787 10.875 19.5 10.875H21.375C21.9963 10.875 22.5 11.3787 22.5 12C22.5 12.6213 21.9963 13.125 21.375 13.125H19.5C18.8787 13.125 18.375 12.6213 18.375 12Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.5 12C1.5 11.3787 2.00368 10.875 2.625 10.875H4.5C5.12132 10.875 5.625 11.3787 5.625 12C5.625 12.6213 5.12132 13.125 4.5 13.125H2.625C2.00368 13.125 1.5 12.6213 1.5 12Z'
        fill={contentColor}
      />
    </Svg>
  )
}
