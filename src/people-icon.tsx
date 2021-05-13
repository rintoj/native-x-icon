import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PeopleIconProps {
  color?: string
  size?: IconSize
}

export function PeopleIcon({ size = 'normal', color = COLOR.SECONDARY }: PeopleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.75 12C14.7862 12 13.8543 11.5697 13.125 10.7888C12.4157 10.027 11.9826 9.01125 11.9062 7.92938C11.8247 6.77531 12.1767 5.71406 12.8972 4.94063C13.6176 4.16719 14.625 3.75 15.75 3.75C16.867 3.75 17.8772 4.17469 18.5953 4.94625C19.3204 5.72531 19.6734 6.78469 19.5918 7.92891C19.5136 9.01219 19.0809 10.0275 18.3731 10.7883C17.6456 11.5697 16.7142 12 15.75 12Z'
        fill={contentColor}
      />
      <Path
        d='M21.9295 20.25H9.5709C9.3722 20.2511 9.17591 20.2065 8.99713 20.1198C8.81835 20.0331 8.66184 19.9065 8.53965 19.7498C8.41004 19.58 8.32054 19.383 8.27784 19.1736C8.23514 18.9643 8.24036 18.748 8.29309 18.5409C8.68778 16.9561 9.66559 15.6417 11.1206 14.7403C12.412 13.9406 14.0559 13.5 15.75 13.5C17.4773 13.5 19.0781 13.9219 20.377 14.7211C21.8353 15.6178 22.8145 16.9397 23.2073 18.5438C23.2594 18.751 23.264 18.9673 23.2209 19.1765C23.1777 19.3857 23.0878 19.5825 22.9579 19.7522C22.8359 19.9082 22.6797 20.0341 22.5015 20.1204C22.3232 20.2067 22.1275 20.251 21.9295 20.25Z'
        fill={contentColor}
      />
      <Path
        d='M6.89068 12.1875C5.24115 12.1875 3.79083 10.6538 3.6563 8.76891C3.58974 7.80328 3.89068 6.91031 4.50005 6.25547C5.10287 5.60719 5.95318 5.25 6.89068 5.25C7.82818 5.25 8.67193 5.60906 9.27802 6.26109C9.89208 6.92109 10.1921 7.81219 10.1218 8.76984C9.98724 10.6542 8.5374 12.1875 6.89068 12.1875Z'
        fill={contentColor}
      />
      <Path
        d='M9.96838 13.661C9.14385 13.2578 8.0737 13.0563 6.89104 13.0563C5.5101 13.0563 4.16901 13.4163 3.11432 14.0697C1.91854 14.8117 1.11417 15.8922 0.789322 17.1968C0.741783 17.3844 0.737287 17.5804 0.776169 17.77C0.815051 17.9596 0.896305 18.138 1.01385 18.2918C1.12539 18.4349 1.26828 18.5506 1.43154 18.63C1.5948 18.7093 1.77407 18.7501 1.95557 18.7493H7.1587C7.24652 18.7492 7.33155 18.7184 7.39896 18.6621C7.46638 18.6059 7.5119 18.5277 7.5276 18.4413C7.53276 18.4118 7.53932 18.3822 7.54682 18.3532C7.94432 16.7566 8.87573 15.4075 10.252 14.4241C10.3026 14.3876 10.3433 14.3391 10.3704 14.2829C10.3975 14.2267 10.4102 14.1646 10.4073 14.1023C10.4044 14.0399 10.3859 13.9793 10.3536 13.9259C10.3214 13.8725 10.2763 13.828 10.2224 13.7964C10.1489 13.7533 10.0645 13.7078 9.96838 13.661Z'
        fill={contentColor}
      />
    </Svg>
  )
}
