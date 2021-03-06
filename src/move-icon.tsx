import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MoveIconProps {
  color?: string
  size?: IconSize
}

export function MoveIcon({ size = 'normal', color = COLOR.SECONDARY }: MoveIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.4697 0.96967C11.7626 0.676777 12.2374 0.676777 12.5303 0.96967L16.2803 4.71967C16.5732 5.01256 16.5732 5.48744 16.2803 5.78033C15.9874 6.07322 15.5126 6.07322 15.2197 5.78033L12 2.56066L8.78033 5.78033C8.48744 6.07322 8.01256 6.07322 7.71967 5.78033C7.42678 5.48744 7.42678 5.01256 7.71967 4.71967L11.4697 0.96967Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.999 0.75C12.4132 0.749981 12.749 1.08575 12.749 1.49997L12.7499 22.5C12.75 22.9142 12.4142 23.25 12 23.25C11.5858 23.25 11.25 22.9142 11.25 22.5L11.249 1.50003C11.249 1.08582 11.5848 0.750019 11.999 0.75Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.71967 18.2197C8.01256 17.9268 8.48744 17.9268 8.78033 18.2197L12 21.4393L15.2197 18.2197C15.5126 17.9268 15.9874 17.9268 16.2803 18.2197C16.5732 18.5126 16.5732 18.9874 16.2803 19.2803L12.5303 23.0303C12.2374 23.3232 11.7626 23.3232 11.4697 23.0303L7.71967 19.2803C7.42678 18.9874 7.42678 18.5126 7.71967 18.2197Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.2197 7.71967C18.5126 7.42678 18.9874 7.42678 19.2803 7.71967L23.0303 11.4697C23.3232 11.7626 23.3232 12.2374 23.0303 12.5303L19.2803 16.2803C18.9874 16.5732 18.5126 16.5732 18.2197 16.2803C17.9268 15.9874 17.9268 15.5126 18.2197 15.2197L21.4393 12L18.2197 8.78033C17.9268 8.48744 17.9268 8.01256 18.2197 7.71967Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.78033 7.71967C6.07322 8.01256 6.07322 8.48744 5.78033 8.78033L2.56066 12L5.78033 15.2197C6.07322 15.5126 6.07322 15.9874 5.78033 16.2803C5.48744 16.5732 5.01256 16.5732 4.71967 16.2803L0.96967 12.5303C0.676777 12.2374 0.676777 11.7626 0.96967 11.4697L4.71967 7.71967C5.01256 7.42678 5.48744 7.42678 5.78033 7.71967Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.75 12C0.75 11.5858 1.08579 11.25 1.5 11.25H22.5C22.9142 11.25 23.25 11.5858 23.25 12C23.25 12.4142 22.9142 12.75 22.5 12.75H1.5C1.08579 12.75 0.75 12.4142 0.75 12Z'
        fill={contentColor}
      />
    </Svg>
  )
}
