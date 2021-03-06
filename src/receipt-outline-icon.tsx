import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReceiptOutlineIconProps {
  color?: string
  size?: IconSize
}

export function ReceiptOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: ReceiptOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M7.5 15.75V2.25L9 3L10.5 2.25L11.9972 3L13.5145 2.25L15 3L16.4902 2.25L17.9869 3L19.5 2.25L21.0005 3L22.5 2.25V12.75'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M22.5002 12.75V18C22.5002 18.9946 22.1051 19.9484 21.4018 20.6517C20.6985 21.3549 19.7447 21.75 18.7502 21.75V21.75C17.7556 21.75 16.8018 21.3549 16.0985 20.6517C15.3952 19.9484 15.0002 18.9946 15.0002 18V15.75H2.25015C2.15142 15.7491 2.0535 15.7679 1.96211 15.8053C1.87072 15.8427 1.78769 15.8979 1.71787 15.9677C1.64805 16.0375 1.59284 16.1206 1.55546 16.212C1.51808 16.3033 1.49928 16.4013 1.50015 16.5C1.50015 19.5 1.81609 21.75 5.25015 21.75H18.7502'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M10.5 6.75H19.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M13.5 10.5H19.5'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
