import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LinkIconProps {
  color?: string
  size?: IconSize
}

export function LinkIcon({ size = 'normal', color = COLOR.SECONDARY }: LinkIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.75 8.625C5.85489 8.625 4.99645 8.98058 4.36351 9.61351C3.73058 10.2465 3.375 11.1049 3.375 12C3.375 12.8951 3.73058 13.7536 4.36351 14.3865C4.99645 15.0194 5.85489 15.375 6.75 15.375H9.40594C10.0273 15.375 10.5309 15.8787 10.5309 16.5C10.5309 17.1213 10.0273 17.625 9.40594 17.625H6.75C5.25816 17.625 3.82742 17.0324 2.77252 15.9775C1.71763 14.9226 1.125 13.4918 1.125 12C1.125 10.5082 1.71763 9.07742 2.77252 8.02252C3.82742 6.96763 5.25816 6.375 6.75 6.375H9.34734C9.96866 6.375 10.4723 6.87868 10.4723 7.5C10.4723 8.12132 9.96866 8.625 9.34734 8.625H6.75Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.5277 7.5C13.5277 6.87868 14.0314 6.375 14.6527 6.375H17.2501C18.7419 6.375 20.1726 6.96763 21.2275 8.02252C22.2824 9.07742 22.8751 10.5082 22.8751 12C22.8751 13.4918 22.2824 14.9226 21.2275 15.9775C20.1726 17.0324 18.7419 17.625 17.2501 17.625H14.5941C13.9728 17.625 13.4691 17.1213 13.4691 16.5C13.4691 15.8787 13.9728 15.375 14.5941 15.375H17.2501C18.1452 15.375 19.0036 15.0194 19.6365 14.3865C20.2695 13.7536 20.6251 12.8951 20.6251 12C20.6251 11.1049 20.2695 10.2464 19.6365 9.61351C19.0036 8.98058 18.1452 8.625 17.2501 8.625H14.6527C14.0314 8.625 13.5277 8.12132 13.5277 7.5Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.80005 12C6.80005 11.3787 7.30373 10.875 7.92505 10.875H16.1685C16.7898 10.875 17.2935 11.3787 17.2935 12C17.2935 12.6213 16.7898 13.125 16.1685 13.125H7.92505C7.30373 13.125 6.80005 12.6213 6.80005 12Z'
        fill={contentColor}
      />
    </Svg>
  )
}
