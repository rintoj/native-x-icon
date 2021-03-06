import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoJavascriptIconProps {
  color?: string
  size?: IconSize
}

export function LogoJavascriptIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoJavascriptIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M1.5 1.5V22.5H22.5V1.5H1.5ZM12.75 17.8125C12.75 19.8567 11.5425 20.8533 9.79453 20.8533C8.21578 20.8533 7.29938 20.0358 6.83438 19.0491L8.44125 18.0764C8.75109 18.6262 8.98641 19.0912 9.66281 19.0912C10.2253 19.0912 10.6875 18.8377 10.6875 17.8509V11.25H12.75V17.8125ZM17.407 20.8064C15.5747 20.8064 14.3906 19.9795 13.8127 18.8377L15.4219 17.9062C15.8438 18.5972 16.3945 19.0575 17.3672 19.0575C18.1847 19.0575 18.6595 18.6956 18.6595 18.1317C18.6595 17.4553 18.1706 17.2158 17.2683 16.8192L16.7752 16.6073C15.3511 16.0017 14.407 15.2405 14.407 13.6331C14.407 12.1533 15.5344 11.0723 17.2964 11.0723C18.5513 11.0723 19.4527 11.4623 20.1019 12.6042L18.5625 13.5938C18.2241 12.9877 17.8594 12.75 17.2941 12.75C16.7161 12.75 16.3495 13.1166 16.3495 13.5938C16.3495 14.1858 16.7161 14.4253 17.5617 14.7919L18.0548 15.0033C19.7325 15.7223 20.677 16.4564 20.677 18.1045C20.6775 19.8811 19.282 20.8064 17.407 20.8064Z'
        fill={contentColor}
      />
    </Svg>
  )
}
