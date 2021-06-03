import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PricetagOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PricetagOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PricetagOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.4022 2.25H14.6413C14.4621 2.24987 14.2902 2.32065 14.1631 2.44688L2.64595 13.9641C2.39377 14.2175 2.2522 14.5605 2.2522 14.918C2.2522 15.2755 2.39377 15.6185 2.64595 15.8719L8.13032 21.3563C8.38375 21.6084 8.72672 21.75 9.08423 21.75C9.44175 21.75 9.78472 21.6084 10.0381 21.3563L21.5506 9.84375C21.6769 9.71665 21.7476 9.54475 21.7475 9.36563V3.6C21.7484 3.42287 21.7142 3.24731 21.647 3.08344C21.5797 2.91957 21.4807 2.77061 21.3557 2.64514C21.2307 2.51967 21.082 2.42016 20.9184 2.35235C20.7548 2.28453 20.5793 2.24975 20.4022 2.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18 7.5C17.7033 7.5 17.4133 7.41203 17.1666 7.24721C16.92 7.08238 16.7277 6.84812 16.6142 6.57403C16.5006 6.29994 16.4709 5.99834 16.5288 5.70737C16.5867 5.41639 16.7296 5.14912 16.9393 4.93934C17.1491 4.72956 17.4164 4.5867 17.7074 4.52882C17.9983 4.47094 18.2999 4.50065 18.574 4.61418C18.8481 4.72771 19.0824 4.91997 19.2472 5.16665C19.412 5.41332 19.5 5.70333 19.5 6C19.5 6.39783 19.342 6.77936 19.0607 7.06066C18.7794 7.34197 18.3978 7.5 18 7.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}
