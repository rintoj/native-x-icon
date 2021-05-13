import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface AtCircleIconProps {
  color?: string
  size?: IconSize
}

export function AtCircleIcon({ size = 'normal', color = COLOR.SECONDARY }: AtCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M11.9747 2.2847C6.59161 2.2847 2.22473 6.64923 2.22473 12.0347C2.22473 17.4202 6.58973 21.7847 11.9747 21.7847C17.3597 21.7847 21.7247 17.4197 21.7247 12.0347C21.7247 6.6497 17.3583 2.2847 11.9747 2.2847ZM17.8257 11.8125C17.6921 13.342 17.0386 14.1422 16.5132 14.5434C15.9877 14.9447 15.3568 15.1209 14.8125 15.0234C14.5603 14.9783 14.3195 14.8839 14.1038 14.7456C13.8881 14.6074 13.7017 14.428 13.5554 14.2177C13.0038 14.7542 12.2622 15.0503 11.4929 15.0413C11.1532 15.0439 10.8167 14.975 10.5054 14.8391C10.1941 14.7031 9.91485 14.5032 9.68583 14.2524C9.15239 13.6702 8.88895 12.8292 8.9677 11.9447C9.10833 10.3041 10.4166 9.25454 11.6335 9.06282C12.9085 8.86173 14.0818 9.36939 14.5819 9.97501L14.7624 10.1934L14.4652 12.555C14.4094 13.2272 14.619 13.6556 15.0413 13.7316C15.1533 13.7513 15.421 13.7255 15.7149 13.5005C16.0299 13.2591 16.4246 12.7505 16.5165 11.6972C16.6266 10.4531 16.3125 9.39142 15.6141 8.62735C14.888 7.83517 13.7818 7.4161 12.4158 7.4161C9.88458 7.4161 7.64348 9.49876 7.41989 12.0567C7.31301 13.2849 7.68567 14.4324 8.46989 15.2878C9.23676 16.125 10.3125 16.5881 11.5008 16.5881C12.3915 16.5881 12.9357 16.492 13.8202 16.1766C13.9842 16.1181 14.1647 16.1272 14.3219 16.2019C14.4792 16.2765 14.6004 16.4106 14.6588 16.5745C14.7172 16.7385 14.7081 16.919 14.6335 17.0763C14.5589 17.2335 14.4248 17.3547 14.2608 17.4131C13.238 17.7774 12.5415 17.9006 11.5008 17.9006C9.94083 17.9006 8.52098 17.2884 7.50239 16.177C6.46879 15.0469 5.97286 13.5441 6.11254 11.9447C6.24895 10.3824 6.97739 8.91517 8.16426 7.81407C9.35114 6.71298 10.8629 6.1036 12.4158 6.1036C14.1596 6.1036 15.6 6.66985 16.5816 7.74095C17.5233 8.76798 17.9649 10.2136 17.8257 11.8125Z'
        fill={contentColor}
      />
      <Path
        d='M11.8392 10.3593C11.1441 10.4685 10.3598 11.1018 10.2764 12.059C10.2295 12.5774 10.3701 13.0537 10.6547 13.3654C10.7607 13.4822 10.8904 13.575 11.0352 13.6377C11.18 13.7003 11.3365 13.7313 11.4942 13.7287C12.4462 13.7287 13.1222 13.0284 13.2169 11.9446C13.2197 11.9119 13.2251 11.8795 13.2328 11.8476L13.3828 10.6546C12.9181 10.38 12.3724 10.2756 11.8392 10.3593Z'
        fill={contentColor}
      />
    </Svg>
  )
}
