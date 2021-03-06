import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ExpandIconProps {
  color?: string
  size?: IconSize
}

export function ExpandIcon({ size = 'normal', color = COLOR.SECONDARY }: ExpandIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.25 14.25C20.6642 14.25 21 14.5858 21 15V20.25C21 20.6642 20.6642 21 20.25 21H15C14.5858 21 14.25 20.6642 14.25 20.25C14.25 19.8358 14.5858 19.5 15 19.5H19.5V15C19.5 14.5858 19.8358 14.25 20.25 14.25Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.7196 13.7197C14.0125 13.4268 14.4873 13.4267 14.7803 13.7196L20.3021 19.2401C20.5951 19.5329 20.5951 20.0078 20.3023 20.3007C20.0094 20.5937 19.5345 20.5937 19.2416 20.3009L13.7197 14.7804C13.4268 14.4875 13.4267 14.0127 13.7196 13.7197Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 3.75C3 3.33579 3.33579 3 3.75 3H9C9.41421 3 9.75 3.33579 9.75 3.75C9.75 4.16421 9.41421 4.5 9 4.5H4.5V9C4.5 9.41421 4.16421 9.75 3.75 9.75C3.33579 9.75 3 9.41421 3 9V3.75Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.69778 3.69886C3.99064 3.40593 4.46551 3.40587 4.75844 3.69873L10.2803 9.2192C10.5732 9.51205 10.5733 9.98693 10.2805 10.2799C9.9876 10.5728 9.51272 10.5728 9.21979 10.28L3.69792 4.75952C3.40499 4.46667 3.40493 3.99179 3.69778 3.69886Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.25 3.75C14.25 3.33579 14.5858 3 15 3H20.25C20.6642 3 21 3.33579 21 3.75V9C21 9.41421 20.6642 9.75 20.25 9.75C19.8358 9.75 19.5 9.41421 19.5 9V4.5H15C14.5858 4.5 14.25 4.16421 14.25 3.75Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.3007 3.69751C20.5937 3.99036 20.5937 4.46524 20.3009 4.75817L14.7804 10.28C14.4875 10.573 14.0127 10.573 13.7197 10.2802C13.4268 9.98732 13.4267 9.51245 13.7196 9.21952L19.2401 3.69764C19.5329 3.40471 20.0078 3.40465 20.3007 3.69751Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.75 14.25C4.16421 14.25 4.5 14.5858 4.5 15V19.5H9C9.41421 19.5 9.75 19.8358 9.75 20.25C9.75 20.6642 9.41421 21 9 21H3.75C3.33579 21 3 20.6642 3 20.25V15C3 14.5858 3.33579 14.25 3.75 14.25Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.2803 13.7196C10.5732 14.0125 10.5733 14.4873 10.2804 14.7803L4.75995 20.3021C4.46709 20.5951 3.99222 20.5951 3.69929 20.3023C3.40636 20.0094 3.4063 19.5345 3.69916 19.2416L9.21962 13.7197C9.51248 13.4268 9.98735 13.4267 10.2803 13.7196Z'
        fill={contentColor}
      />
    </Svg>
  )
}
