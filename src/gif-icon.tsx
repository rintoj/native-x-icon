import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GifIconProps {
  color?: string
  size?: IconSize
}

export function GifIcon({ size = 'normal', color = COLOR.SECONDARY }: GifIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.51163 2H21.4884C22.8726 2 24 3.007 24 4.247V19.754C24 20.992 22.8726 22 21.4884 22H2.51163C1.12744 22 0 20.992 0 19.754V4.247C0 3.007 1.12744 2 2.51163 2ZM20.2049 8.9987V10.6987H17.1909V11.6987H19.4235V13.3987H17.1909V15.3987H15.2932V8.9987H20.2049ZM13.9537 8.9987H12.056V15.3987H13.9537V8.9987ZM9.37696 11.0987C9.04208 10.7987 8.48394 10.5987 8.03743 10.5987C7.03277 10.5987 6.25138 11.3987 6.25138 12.1987C6.25138 13.0987 7.03277 13.7987 8.03743 13.7987C8.37231 13.7987 8.70719 13.6987 8.93045 13.5987V12.9987H7.59091V11.7987H10.7165V14.2987C10.0467 14.9987 9.1537 15.3987 8.03743 15.3987C6.02812 15.3987 4.46533 13.9987 4.46533 12.1987C4.46533 10.3987 6.02812 8.9987 8.03743 8.9987C9.04208 8.9987 10.0467 9.3987 10.7165 10.0987L9.37696 11.0987Z'
        fill={contentColor}
      />
    </Svg>
  )
}
