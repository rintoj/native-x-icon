import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CloudDownloadIconProps {
  color?: string
  size?: IconSize
}

export function CloudDownloadIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CloudDownloadIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.1578 8.88281C21.5363 8.48766 20.7595 8.20031 19.9041 8.04234C19.7599 8.01474 19.627 7.94544 19.5219 7.84304C19.4167 7.74063 19.3439 7.60963 19.3125 7.46625C18.9441 5.84859 18.1594 4.46016 17.0086 3.40781C15.6633 2.17734 13.8848 1.5 12 1.5C10.343 1.5 8.8125 2.01937 7.57641 3C6.74156 3.66561 6.06912 4.51245 5.61 5.47641C5.55893 5.5851 5.48257 5.67999 5.38732 5.75314C5.29207 5.82629 5.18069 5.87558 5.0625 5.89688C3.79078 6.12656 2.69391 6.585 1.85578 7.24219C0.642188 8.19516 0 9.54187 0 11.1375C0 14.2969 2.62172 16.5 6.375 16.5H11.25V10.5211C11.25 10.1175 11.5603 9.77109 11.9639 9.75094C12.0653 9.74605 12.1667 9.76181 12.2618 9.79724C12.3569 9.83268 12.4439 9.88707 12.5174 9.9571C12.5909 10.0271 12.6494 10.1114 12.6894 10.2047C12.7294 10.298 12.75 10.3985 12.75 10.5V16.5H18.5625C21.9675 16.5 24 14.895 24 12.2062C24 10.7977 23.363 9.64828 22.1578 8.88281Z'
        fill={contentColor}
      />
      <Path
        d='M11.25 19.9416L9.5297 18.2241C9.38822 18.087 9.19847 18.011 9.00146 18.0127C8.80445 18.0143 8.616 18.0934 8.47684 18.2329C8.33768 18.3724 8.25898 18.561 8.25777 18.758C8.25655 18.955 8.3329 19.1446 8.47033 19.2858L11.4703 22.2806C11.6109 22.4209 11.8014 22.4997 12 22.4997C12.1986 22.4997 12.3891 22.4209 12.5297 22.2806L15.5297 19.2858C15.6671 19.1446 15.7435 18.955 15.7423 18.758C15.741 18.561 15.6624 18.3724 15.5232 18.2329C15.384 18.0934 15.1956 18.0143 14.9986 18.0127C14.8016 18.011 14.6118 18.087 14.4703 18.2241L12.75 19.9416V16.5H11.25V19.9416Z'
        fill={contentColor}
      />
    </Svg>
  )
}
