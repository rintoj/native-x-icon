import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ArrowUndoIconProps {
  color?: string
  size?: IconSize
}

export function ArrowUndoIcon({ size = 'normal', color = COLOR.SECONDARY }: ArrowUndoIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 20.625C20.886 20.625 20.7736 20.5991 20.6712 20.5491C20.5687 20.4992 20.4791 20.4265 20.4089 20.3367C19.3373 18.9647 18.3431 17.9058 16.972 17.1961C15.7031 16.5413 14.1094 16.1996 12 16.1358V19.875C11.9996 20.0214 11.9563 20.1645 11.8755 20.2866C11.7947 20.4087 11.68 20.5044 11.5454 20.5621C11.4108 20.6198 11.2624 20.6368 11.1182 20.6111C10.9741 20.5854 10.8407 20.518 10.7344 20.4174L2.48437 12.5424C2.41106 12.4723 2.3527 12.3882 2.31284 12.295C2.27297 12.2017 2.25241 12.1014 2.25241 12C2.25241 11.8986 2.27297 11.7983 2.31284 11.7051C2.3527 11.6119 2.41106 11.5277 2.48437 11.4577L10.7344 3.58268C10.8407 3.48204 10.9741 3.4147 11.1182 3.38898C11.2624 3.36327 11.4108 3.38029 11.5454 3.43795C11.68 3.49561 11.7947 3.59139 11.8755 3.71348C11.9563 3.83557 11.9996 3.97863 12 4.12503V7.8919C15.4753 8.05175 18.0647 9.34081 19.7039 11.7296C21.0619 13.7082 21.75 16.4485 21.75 19.875C21.75 20.0739 21.671 20.2647 21.5303 20.4054C21.3897 20.546 21.1989 20.625 21 20.625Z'
        fill={contentColor}
      />
    </Svg>
  )
}
