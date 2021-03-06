import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ShieldIconProps {
  color?: string
  size?: IconSize
}

export function ShieldIcon({ size = 'normal', color = COLOR.SECONDARY }: ShieldIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.4564 5.21904C22.4459 5.05141 22.3794 4.89217 22.2677 4.7668C22.1559 4.64144 22.0053 4.55722 21.84 4.52763C17.8073 3.80482 16.1104 3.2395 12.4687 1.60076C12.105 1.46529 11.8795 1.46763 11.5312 1.60076C7.8895 3.24138 6.19263 3.80388 2.15997 4.52763C1.99465 4.55722 1.84404 4.64144 1.73228 4.7668C1.62051 4.89217 1.55406 5.05141 1.54357 5.21904C1.3631 8.0831 1.747 10.7503 2.68544 13.1479C3.45279 15.1031 4.5896 16.8921 6.03372 18.4172C8.12763 20.6404 10.4493 21.9384 11.6465 22.4297C11.8735 22.5223 12.1278 22.5223 12.3548 22.4297C13.6204 21.9178 15.8559 20.6568 17.9662 18.4162C19.4102 16.8914 20.547 15.1027 21.3145 13.1479C22.2529 10.7508 22.6368 8.0831 22.4564 5.21904Z'
        fill={contentColor}
      />
    </Svg>
  )
}
