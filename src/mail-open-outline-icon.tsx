import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MailOpenOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MailOpenOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: MailOpenOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20.7 8.04397L12.5095 4.00147C12.3511 3.92329 12.1767 3.88263 12 3.88263C11.8233 3.88263 11.6489 3.92329 11.4905 4.00147L3.3 8.04397C2.986 8.19782 2.72128 8.4364 2.53574 8.73278C2.3502 9.02915 2.25122 9.3715 2.25 9.72116V18.3748C2.25 19.4102 3.10031 20.2498 4.14937 20.2498H19.8525C20.9016 20.2498 21.7519 19.4102 21.7519 18.3748V9.72116C21.7505 9.3713 21.6512 9.02881 21.4653 8.73242C21.2795 8.43603 21.0143 8.19756 20.7 8.04397V8.04397Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18.6249 17.2498L12.5658 12.537C12.3683 12.3834 12.1253 12.3 11.8751 12.3C11.6249 12.3 11.3819 12.3834 11.1844 12.537L5.12488 17.2498'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M14.4998 13.8281L20.8748 9'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M2.87488 9L9.3905 13.9219'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
