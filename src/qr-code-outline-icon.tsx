import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface QrCodeOutlineIconProps {
  color?: string
  size?: IconSize
}

export function QrCodeOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: QrCodeOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.125 15.75H16.125C15.9179 15.75 15.75 15.9179 15.75 16.125V19.125C15.75 19.3321 15.9179 19.5 16.125 19.5H19.125C19.3321 19.5 19.5 19.3321 19.5 19.125V16.125C19.5 15.9179 19.3321 15.75 19.125 15.75Z'
        fill={contentColor}
      />
      <Path
        d='M15.375 12.75H13.125C12.9179 12.75 12.75 12.9179 12.75 13.125V15.375C12.75 15.5821 12.9179 15.75 13.125 15.75H15.375C15.5821 15.75 15.75 15.5821 15.75 15.375V13.125C15.75 12.9179 15.5821 12.75 15.375 12.75Z'
        fill={contentColor}
      />
      <Path
        d='M22.125 19.5H19.875C19.6679 19.5 19.5 19.6679 19.5 19.875V22.125C19.5 22.3321 19.6679 22.5 19.875 22.5H22.125C22.3321 22.5 22.5 22.3321 22.5 22.125V19.875C22.5 19.6679 22.3321 19.5 22.125 19.5Z'
        fill={contentColor}
      />
      <Path
        d='M22.125 12.75H20.625C20.4179 12.75 20.25 12.9179 20.25 13.125V14.625C20.25 14.8321 20.4179 15 20.625 15H22.125C22.3321 15 22.5 14.8321 22.5 14.625V13.125C22.5 12.9179 22.3321 12.75 22.125 12.75Z'
        fill={contentColor}
      />
      <Path
        d='M14.625 20.25H13.125C12.9179 20.25 12.75 20.4179 12.75 20.625V22.125C12.75 22.3321 12.9179 22.5 13.125 22.5H14.625C14.8321 22.5 15 22.3321 15 22.125V20.625C15 20.4179 14.8321 20.25 14.625 20.25Z'
        fill={contentColor}
      />
      <Path
        d='M19.125 4.5H16.125C15.9179 4.5 15.75 4.66789 15.75 4.875V7.875C15.75 8.08211 15.9179 8.25 16.125 8.25H19.125C19.3321 8.25 19.5 8.08211 19.5 7.875V4.875C19.5 4.66789 19.3321 4.5 19.125 4.5Z'
        fill={contentColor}
      />
      <Path
        d='M21 2.25H14.25C13.8358 2.25 13.5 2.58579 13.5 3V9.75C13.5 10.1642 13.8358 10.5 14.25 10.5H21C21.4142 10.5 21.75 10.1642 21.75 9.75V3C21.75 2.58579 21.4142 2.25 21 2.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.875 4.5H4.875C4.66789 4.5 4.5 4.66789 4.5 4.875V7.875C4.5 8.08211 4.66789 8.25 4.875 8.25H7.875C8.08211 8.25 8.25 8.08211 8.25 7.875V4.875C8.25 4.66789 8.08211 4.5 7.875 4.5Z'
        fill={contentColor}
      />
      <Path
        d='M9.75 2.25H3C2.58579 2.25 2.25 2.58579 2.25 3V9.75C2.25 10.1642 2.58579 10.5 3 10.5H9.75C10.1642 10.5 10.5 10.1642 10.5 9.75V3C10.5 2.58579 10.1642 2.25 9.75 2.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.875 15.75H4.875C4.66789 15.75 4.5 15.9179 4.5 16.125V19.125C4.5 19.3321 4.66789 19.5 4.875 19.5H7.875C8.08211 19.5 8.25 19.3321 8.25 19.125V16.125C8.25 15.9179 8.08211 15.75 7.875 15.75Z'
        fill={contentColor}
      />
      <Path
        d='M9.75 13.5H3C2.58579 13.5 2.25 13.8358 2.25 14.25V21C2.25 21.4142 2.58579 21.75 3 21.75H9.75C10.1642 21.75 10.5 21.4142 10.5 21V14.25C10.5 13.8358 10.1642 13.5 9.75 13.5Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
