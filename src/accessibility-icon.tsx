import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface AccessibilityIconProps {
  color?: string
  size?: IconSize
}

export function AccessibilityIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: AccessibilityIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <G clipPath='url(#clip0)'>
        <Path
          d='M12 5.24998C11.4808 5.24998 10.9733 5.09602 10.5416 4.80758C10.1099 4.51915 9.77347 4.10918 9.57479 3.62952C9.37611 3.14986 9.32412 2.62206 9.42541 2.11286C9.5267 1.60366 9.7767 1.13593 10.1438 0.768821C10.5109 0.401708 10.9787 0.151701 11.4879 0.0504148C11.9971 -0.0508714 12.5249 0.00111238 13.0045 0.199792C13.4842 0.398472 13.8941 0.734925 14.1826 1.1666C14.471 1.59828 14.625 2.1058 14.625 2.62498C14.6242 3.32094 14.3474 3.98819 13.8553 4.48031C13.3632 4.97243 12.6959 5.24923 12 5.24998Z'
          fill={contentColor}
        />
        <Path
          d='M20.25 5.28745L20.2289 5.29307L20.2092 5.29917C20.1623 5.31229 20.1155 5.32636 20.0686 5.34089C19.1962 5.59682 14.9625 6.79026 11.9798 6.79026C9.20811 6.79026 5.35733 5.75901 4.12546 5.40886C4.00286 5.36145 3.87765 5.32107 3.75046 5.28792C2.85983 5.05354 2.25046 5.95823 2.25046 6.78511C2.25046 7.60401 2.9864 7.99401 3.72936 8.27386V8.28698L8.1928 9.68104C8.6489 9.85589 8.77077 10.0345 8.8303 10.1892C9.0239 10.6856 8.86921 11.6685 8.81436 12.0117L8.54249 14.121L7.03358 22.38C7.0289 22.4025 7.02468 22.4254 7.02093 22.4489L7.01015 22.5084C6.9014 23.2654 7.45733 24 8.51015 24C9.4289 24 9.83436 23.3657 10.0101 22.5028C10.0101 22.5028 11.3226 15.1167 11.9789 15.1167C12.6351 15.1167 13.987 22.5028 13.987 22.5028C14.1628 23.3657 14.5683 24 15.487 24C16.5426 24 17.0986 23.2621 16.987 22.5028C16.9772 22.4381 16.9655 22.3743 16.9514 22.3125L15.4219 14.122L15.1505 12.0126C14.9541 10.784 15.112 10.3781 15.1655 10.2829C15.1669 10.2807 15.1681 10.2783 15.1692 10.2759C15.2198 10.1821 15.4505 9.97214 15.9886 9.77011L20.1736 8.30714C20.1993 8.30029 20.2246 8.29216 20.2495 8.28276C20.9995 8.00151 21.7495 7.61245 21.7495 6.78604C21.7495 5.95964 21.1406 5.05354 20.25 5.28745Z'
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