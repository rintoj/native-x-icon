import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ReloadIconProps {
  color?: string
  size?: IconSize
}

export function ReloadIcon({ size = 'normal', color = COLOR.SECONDARY }: ReloadIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.2495 2.24986C12.5685 2.24828 13.8739 2.51505 15.0865 3.03393C16.2992 3.55288 17.3936 4.31315 18.3032 5.26848L18.3163 5.28229L19.3188 6.44846C19.5888 6.76258 19.553 7.2361 19.2389 7.50611C18.9248 7.77612 18.4513 7.74037 18.1812 7.42625L17.2039 6.28931C16.4373 5.48769 15.5163 4.84941 14.4963 4.41297C13.4707 3.97408 12.3665 3.74847 11.2509 3.74986L11.2505 3.74986H11.25C6.69546 3.74986 3 7.44532 3 11.9999C3 16.5544 6.69544 20.2498 11.2499 20.2499M11.2495 2.24986C5.86678 2.25011 1.5 6.61705 1.5 11.9999C1.5 17.3828 5.86704 21.7499 11.25 21.7499H11.2501C13.2665 21.7497 15.2334 21.1247 16.8799 19.9607C18.5265 18.7967 19.7719 17.151 20.4447 15.2501C20.5829 14.8596 20.3784 14.431 19.9879 14.2928C19.5974 14.1546 19.1688 14.3591 19.0306 14.7496C18.4613 16.3582 17.4075 17.7508 16.0141 18.7358C14.6207 19.7208 12.9563 20.2497 11.25 20.2499'
        fill={contentColor}
      />
      <Path
        d='M21.7499 4.5664V9.74983C21.7499 9.94875 21.6709 10.1395 21.5303 10.2802C21.3896 10.4208 21.1989 10.4998 20.9999 10.4998H15.8165C15.1481 10.4998 14.8134 9.69218 15.2859 9.21968L20.4698 4.03577C20.9423 3.56233 21.7499 3.89796 21.7499 4.5664Z'
        fill={contentColor}
      />
    </Svg>
  )
}
