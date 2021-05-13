import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FlashlightIconProps {
  color?: string
  size?: IconSize
}

export function FlashlightIcon({ size = 'normal', color = COLOR.SECONDARY }: FlashlightIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21.6563 10.1245C22.0946 9.68624 22.366 9.22967 22.4621 8.76749C22.5886 8.16046 22.4016 7.56983 21.9361 7.10436L16.8952 2.06436C16.2324 1.40202 15.0938 1.1278 13.875 2.34327L13.7813 2.43702C13.7464 2.47185 13.7188 2.5132 13.6999 2.55873C13.681 2.60425 13.6713 2.65305 13.6713 2.70233C13.6713 2.75161 13.681 2.80041 13.6999 2.84593C13.7188 2.89146 13.7464 2.93282 13.7813 2.96764L21.03 10.2183C21.0649 10.2534 21.1064 10.2813 21.1521 10.3004C21.1978 10.3194 21.2468 10.3292 21.2963 10.3292C21.3458 10.3292 21.3948 10.3194 21.4405 10.3004C21.4862 10.2813 21.5277 10.2534 21.5625 10.2183L21.6563 10.1245Z'
        fill={contentColor}
      />
      <Path
        d='M11.7254 7.17573L11.7179 7.28542C11.693 7.62198 11.3954 8.18307 11.0673 8.51073L2.21585 17.3607C1.6946 17.8815 1.44428 18.5593 1.51038 19.2685C1.56991 19.9023 1.88256 20.5314 2.39069 21.039L2.96116 21.6095C3.55225 22.2001 4.26335 22.5001 4.95288 22.5001C5.26756 22.4994 5.57893 22.4359 5.86871 22.3132C6.15849 22.1905 6.42085 22.0112 6.64038 21.7857L15.4923 12.9357C15.8237 12.6043 16.3754 12.3123 16.719 12.2856C17.5383 12.2237 18.7613 12.1318 19.8966 11.552C19.9228 11.5384 19.9453 11.519 19.9625 11.4951C19.9797 11.4712 19.9911 11.4436 19.9957 11.4145C20.0002 11.3855 19.9979 11.3557 19.9888 11.3277C19.9798 11.2997 19.9642 11.2743 19.9435 11.2534L12.7355 4.04588C12.7147 4.02496 12.6891 4.00928 12.661 4.0001C12.6329 3.99093 12.603 3.98853 12.5738 3.9931C12.5446 3.99767 12.5169 4.00908 12.493 4.0264C12.469 4.04372 12.4495 4.06646 12.436 4.09276C11.8679 5.17042 11.7882 6.29167 11.7254 7.17573ZM11.259 14.0584C11.1368 14.2085 10.9711 14.3172 10.7847 14.3694C10.5982 14.4216 10.4002 14.4148 10.2178 14.3499C10.0354 14.2851 9.87756 14.1653 9.76593 14.0072C9.65429 13.849 9.59436 13.6602 9.59436 13.4666C9.59436 13.273 9.65429 13.0842 9.76593 12.926C9.87756 12.7678 10.0354 12.6481 10.2178 12.5833C10.4002 12.5184 10.5982 12.5116 10.7847 12.5638C10.9711 12.616 11.1368 12.7246 11.259 12.8748C11.3951 13.042 11.4694 13.251 11.4694 13.4666C11.4694 13.6822 11.3951 13.8912 11.259 14.0584Z'
        fill={contentColor}
      />
    </Svg>
  )
}
