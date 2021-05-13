import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PricetagsOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PricetagsOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PricetagsOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.9042 1.49994H13.1419C12.9627 1.49981 12.7909 1.57059 12.6638 1.69682L1.14375 13.214C0.891571 13.4674 0.75 13.8104 0.75 14.1679C0.75 14.5254 0.891571 14.8684 1.14375 15.1218L6.62813 20.6062C6.88163 20.8584 7.22468 21 7.58227 21C7.93986 21 8.28291 20.8584 8.53641 20.6062L20.0531 9.09369C20.1794 8.96659 20.2501 8.79469 20.25 8.61557V2.84994C20.2509 2.67277 20.2167 2.49718 20.1494 2.33327C20.0821 2.16937 19.9831 2.02039 19.858 1.89491C19.7329 1.76943 19.5843 1.66994 19.4206 1.60215C19.2569 1.53437 19.0814 1.49963 18.9042 1.49994Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M16.5 6.75C16.2033 6.75 15.9133 6.66203 15.6666 6.49721C15.42 6.33238 15.2277 6.09812 15.1142 5.82403C15.0006 5.54994 14.9709 5.24834 15.0288 4.95737C15.0867 4.66639 15.2296 4.39912 15.4393 4.18934C15.6491 3.97956 15.9164 3.8367 16.2074 3.77882C16.4983 3.72094 16.7999 3.75065 17.074 3.86418C17.3481 3.97771 17.5824 4.16997 17.7472 4.41665C17.912 4.66332 18 4.95333 18 5.25C18 5.64783 17.842 6.02936 17.5607 6.31066C17.2794 6.59197 16.8978 6.75 16.5 6.75Z'
        fill={contentColor}
      />
      <Path
        d='M10.7812 22.5L23.0625 10.2188C23.1236 10.1572 23.1716 10.0839 23.2038 10.0034C23.236 9.92288 23.2517 9.83671 23.25 9.75V3.75'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
