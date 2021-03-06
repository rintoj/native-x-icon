import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BandageOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BandageOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BandageOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <G clipPath='url(#clip0)'>
        <Path
          d='M15.4537 2.7047L2.70485 15.4535C1.09174 17.0666 1.09174 19.682 2.70485 21.2951L2.70518 21.2954C4.31829 22.9085 6.93366 22.9085 8.54677 21.2954L21.2956 8.54662C22.9087 6.93351 22.9087 4.31814 21.2956 2.70503L21.2952 2.7047C19.6821 1.09159 17.0668 1.09159 15.4537 2.7047Z'
          stroke={contentColor}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M17.1703 10.5416L13.458 6.82934C12.8722 6.24355 11.9224 6.24355 11.3366 6.82934L6.96143 11.2046C6.37564 11.7903 6.37564 12.7401 6.96143 13.3259L10.6737 17.0382C11.2595 17.624 12.2093 17.624 12.7951 17.0382L17.1703 12.663C17.7561 12.0772 17.7561 11.1274 17.1703 10.5416Z'
          stroke={contentColor}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M12 10.5C12.4142 10.5 12.75 10.1642 12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75C11.25 10.1642 11.5858 10.5 12 10.5Z'
          fill={contentColor}
        />
        <Path
          d='M14.25 12.75C14.6642 12.75 15 12.4142 15 12C15 11.5858 14.6642 11.25 14.25 11.25C13.8358 11.25 13.5 11.5858 13.5 12C13.5 12.4142 13.8358 12.75 14.25 12.75Z'
          fill={contentColor}
        />
        <Path
          d='M9.75 12.75C10.1642 12.75 10.5 12.4142 10.5 12C10.5 11.5858 10.1642 11.25 9.75 11.25C9.33579 11.25 9 11.5858 9 12C9 12.4142 9.33579 12.75 9.75 12.75Z'
          fill={contentColor}
        />
        <Path
          d='M12 15C12.4142 15 12.75 14.6642 12.75 14.25C12.75 13.8358 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.8358 11.25 14.25C11.25 14.6642 11.5858 15 12 15Z'
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
