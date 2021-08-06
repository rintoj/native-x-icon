import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface DuplicateIconProps {
  color?: string
  size?: IconSize
}

export function DuplicateIcon({ size = 'normal', color = COLOR.SECONDARY }: DuplicateIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.125 5.25H8.625C7.72989 5.25 6.87145 5.60558 6.23851 6.23851C5.60558 6.87145 5.25 7.72989 5.25 8.625V19.125C5.25 20.0201 5.60558 20.8785 6.23851 21.5115C6.87145 22.1444 7.72989 22.5 8.625 22.5H19.125C20.0201 22.5 20.8785 22.1444 21.5115 21.5115C22.1444 20.8785 22.5 20.0201 22.5 19.125V8.625C22.5 7.72989 22.1444 6.87145 21.5115 6.23851C20.8785 5.60558 20.0201 5.25 19.125 5.25ZM17.6039 14.625H14.625V17.6039C14.625 18.0075 14.3147 18.3539 13.9111 18.3741C13.8097 18.3789 13.7083 18.3632 13.6132 18.3278C13.5181 18.2923 13.4311 18.2379 13.3576 18.1679C13.2841 18.0979 13.2256 18.0136 13.1856 17.9203C13.1456 17.827 13.125 17.7265 13.125 17.625V14.625H10.1461C9.7425 14.625 9.39609 14.3147 9.37594 13.9111C9.37105 13.8097 9.38681 13.7083 9.42224 13.6132C9.45768 13.5181 9.51207 13.4311 9.5821 13.3576C9.65214 13.2841 9.73637 13.2256 9.82969 13.1856C9.92301 13.1456 10.0235 13.125 10.125 13.125H13.125V10.1461C13.125 9.7425 13.4353 9.39609 13.8389 9.37594C13.9403 9.37105 14.0417 9.38681 14.1368 9.42224C14.2319 9.45768 14.3189 9.51207 14.3924 9.5821C14.4659 9.65214 14.5244 9.73637 14.5644 9.82969C14.6044 9.92301 14.625 10.0235 14.625 10.125V13.125H17.625C17.7266 13.1249 17.8272 13.1454 17.9206 13.1853C18.014 13.2253 18.0984 13.2838 18.1685 13.3573C18.2386 13.4308 18.2931 13.5178 18.3286 13.613C18.3641 13.7082 18.3799 13.8096 18.375 13.9111C18.3553 14.3147 18.0075 14.625 17.6039 14.625Z'
        fill={contentColor}
      />
      <Path
        d='M18.5569 3.75C18.3235 3.09246 17.8924 2.52322 17.3228 2.12038C16.7531 1.71755 16.0727 1.50084 15.375 1.5H4.875C3.97989 1.5 3.12145 1.85558 2.48851 2.48851C1.85558 3.12145 1.5 3.97989 1.5 4.875V15.375C1.50084 16.0727 1.71755 16.7531 2.12038 17.3228C2.52322 17.8924 3.09246 18.3235 3.75 18.5569V7.5C3.75 6.50544 4.14509 5.55161 4.84835 4.84835C5.55161 4.14509 6.50544 3.75 7.5 3.75H18.5569Z'
        fill={contentColor}
      />
    </Svg>
  )
}