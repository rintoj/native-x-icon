import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface AccessibilityOutlineIconProps {
  color?: string
  size?: IconSize
}

export function AccessibilityOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: AccessibilityOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 4.5C13.0355 4.5 13.875 3.66053 13.875 2.625C13.875 1.58947 13.0355 0.75 12 0.75C10.9645 0.75 10.125 1.58947 10.125 2.625C10.125 3.66053 10.9645 4.5 12 4.5Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M9.57328 12.8644C9.70922 12.0179 9.77015 11.1994 9.54984 10.6336C9.36234 10.1471 8.95453 9.87474 8.46234 9.68911L4.125 8.28568C3.5625 8.09818 3.03703 7.78411 3 7.16349C2.95313 6.36661 3.65625 5.85099 4.35938 6.03849C4.35938 6.03849 8.48437 7.49818 12 7.49818C15.5156 7.49818 19.5937 6.04505 19.5937 6.04505C20.4375 5.81068 21 6.46693 21 7.16021C21 7.8263 20.4844 8.06068 19.875 8.28239L15.75 9.77818C15.375 9.9188 14.7656 10.2001 14.5312 10.6304C14.25 11.1343 14.2969 12.0146 14.4328 12.8611L14.7094 14.2501L16.463 21.9329C16.5942 22.5493 16.1676 23.1254 15.5536 23.2332C14.9395 23.341 14.4375 22.9219 14.2556 22.3257L12.495 16.8915C12.4103 16.6308 12.3353 16.3672 12.27 16.1007L12 15.0001L11.7516 16.0149C11.6728 16.3383 11.5822 16.6583 11.4797 16.9749L9.75 22.321C9.5625 22.9233 9.07031 23.3405 8.45625 23.2332C7.84219 23.1258 7.40625 22.5024 7.54406 21.9329L9.29672 14.2533L9.57328 12.8644Z'
        stroke={contentColor}
        strokeLinejoin='round'
      />
    </Svg>
  )
}
