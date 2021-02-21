import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HammerOutlineIconProps {
  color?: string
  size?: IconSize
}

export function HammerOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: HammerOutlineIconProps) {
  const { getColor } = useTheme()
  const strokeColor = getColor?.(color)
  const iconSize = getIconSize(size)

  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 16 16' fill='none'>
      <Path
        d='M8.67 7.719a.771.771 0 00-.128-.171l-.573-.565a.654.654 0 00-.933-.01L5.817 8.174c-1.255 1.242-3.585 3.323-4.639 4.21a.5.5 0 00-.034.736l1.22 1.232a.504.504 0 00.739-.028c.914-1.074 3.01-3.406 4.25-4.632.637-.627.994-.987 1.196-1.186a.68.68 0 00.12-.787v0zM14.95 6.281L13.88 5.22a.17.17 0 00-.125-.05.175.175 0 00-.125.05.356.356 0 01-.299.102c-.14-.015-.289-.059-.385-.152-.219-.214.034-.636-.159-.906a7.592 7.592 0 00-.72-.835c-.221-.219-1.089-1.046-2.55-1.642a3.868 3.868 0 00-1.468-.288c-.823 0-1.456.367-1.687.578-.184.166-.375.43-.375.43A2.485 2.485 0 017.05 2.36c.486.041 1.072.27 1.386.516.507.406.725.95.759 1.651.025.522-.476 1.18-.951 1.717a.245.245 0 00.012.338l.664.664a.25.25 0 00.348.003c.435-.422.972-.89 1.276-1.077.304-.187.549-.24.667-.253.231-.022.464.028.665.145.036.02.068.045.097.074.202.205.19.54-.016.742l-.062.059a.171.171 0 000 .245l1.072 1.062a.171.171 0 00.125.05.177.177 0 00.125-.05l1.733-1.714a.182.182 0 000-.25v0z'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
