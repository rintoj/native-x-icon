import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ContractIconProps {
  color?: string
  size?: IconSize
}

export function ContractIcon({ size = 'normal', color = COLOR.SECONDARY }: ContractIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.5 14.25C13.5 13.8358 13.8358 13.5 14.25 13.5H19.5C19.9142 13.5 20.25 13.8358 20.25 14.25C20.25 14.6642 19.9142 15 19.5 15H15V19.5C15 19.9142 14.6642 20.25 14.25 20.25C13.8358 20.25 13.5 19.9142 13.5 19.5V14.25Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.1978 14.1994C14.4907 13.9064 14.9655 13.9064 15.2585 14.1992L20.7803 19.7197C21.0733 20.0125 21.0733 20.4874 20.7805 20.7803C20.4876 21.0733 20.0128 21.0733 19.7198 20.7805L14.1979 15.26C13.905 14.9672 13.905 14.4923 14.1978 14.1994Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.75 3.75C10.1642 3.75 10.5 4.08579 10.5 4.5V9.75C10.5 10.1642 10.1642 10.5 9.75 10.5H4.5C4.08579 10.5 3.75 10.1642 3.75 9.75C3.75 9.33579 4.08579 9 4.5 9H9V4.5C9 4.08579 9.33579 3.75 9.75 3.75Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.2196 3.21974C3.51246 2.92681 3.98733 2.92675 4.28026 3.2196L9.80214 8.74007C10.0951 9.03293 10.0951 9.5078 9.80227 9.80073C9.50942 10.0937 9.03454 10.0937 8.74161 9.80087L3.21974 4.2804C2.92681 3.98754 2.92675 3.51267 3.2196 3.21974Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.25 3.75C14.6642 3.75 15 4.08579 15 4.5V9H19.5C19.9142 9 20.25 9.33579 20.25 9.75C20.25 10.1642 19.9142 10.5 19.5 10.5H14.25C13.8358 10.5 13.5 10.1642 13.5 9.75V4.5C13.5 4.08579 13.8358 3.75 14.25 3.75Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.7803 3.2196C21.0732 3.51246 21.0733 3.98733 20.7804 4.28026L15.26 9.80214C14.9671 10.0951 14.4922 10.0951 14.1993 9.80227C13.9064 9.50942 13.9063 9.03454 14.1992 8.74161L19.7196 3.21974C20.0125 2.92681 20.4874 2.92675 20.7803 3.2196Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.75 14.25C3.75 13.8358 4.08579 13.5 4.5 13.5H9.75C10.1642 13.5 10.5 13.8358 10.5 14.25V19.5C10.5 19.9142 10.1642 20.25 9.75 20.25C9.33579 20.25 9 19.9142 9 19.5V15H4.5C4.08579 15 3.75 14.6642 3.75 14.25Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.80073 14.1975C10.0937 14.4904 10.0937 14.9652 9.80087 15.2582L4.2804 20.78C3.98754 21.073 3.51267 21.073 3.21974 20.7802C2.92681 20.4873 2.92675 20.0124 3.2196 19.7195L8.74007 14.1976C9.03293 13.9047 9.5078 13.9047 9.80073 14.1975Z'
        fill={contentColor}
      />
    </Svg>
  )
}
