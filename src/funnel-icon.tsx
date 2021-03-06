import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface FunnelIconProps {
  color?: string
  size?: IconSize
}

export function FunnelIcon({ size = 'normal', color = COLOR.SECONDARY }: FunnelIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M13.875 21.75C13.7547 21.7499 13.6352 21.7305 13.5211 21.6923L9.76404 20.4422C9.54061 20.3671 9.34653 20.2235 9.20936 20.0318C9.0722 19.8401 8.99894 19.6101 8.99998 19.3744V13.7864C8.99895 13.7841 8.99753 13.7821 8.99576 13.7803L1.09029 4.57219C0.915 4.36797 0.801987 4.11774 0.764675 3.85121C0.727363 3.58468 0.767317 3.31304 0.879796 3.06854C0.992274 2.82404 1.17255 2.61695 1.39922 2.47185C1.6259 2.32676 1.88944 2.24976 2.15858 2.25H21.8437C22.1129 2.24976 22.3764 2.32676 22.6031 2.47185C22.8298 2.61695 23.01 2.82404 23.1225 3.06854C23.235 3.31304 23.2749 3.58468 23.2376 3.85121C23.2003 4.11774 23.0873 4.36797 22.912 4.57219L15.0042 13.7813C15.0026 13.7831 15.0012 13.7852 15 13.7873V20.625C15.0004 20.7729 14.9716 20.9193 14.9152 21.056C14.8588 21.1927 14.776 21.3169 14.6714 21.4215C14.5669 21.526 14.4427 21.6089 14.306 21.6652C14.1693 21.7216 14.0228 21.7504 13.875 21.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}
