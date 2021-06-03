import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface HelpCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function HelpCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: HelpCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M11.9999 3.75C10.3682 3.75 8.77313 4.23385 7.41643 5.14038C6.05972 6.0469 5.0023 7.33537 4.37788 8.84286C3.75345 10.3504 3.59008 12.0092 3.9084 13.6095C4.22673 15.2098 5.01247 16.6798 6.16625 17.8336C7.32003 18.9874 8.79004 19.7732 10.3904 20.0915C11.9907 20.4098 13.6495 20.2464 15.157 19.622C16.6645 18.9976 17.953 17.9402 18.8595 16.5835C19.766 15.2268 20.2499 13.6317 20.2499 12C20.2499 9.81196 19.3807 7.71354 17.8335 6.16637C16.2863 4.61919 14.1879 3.75 11.9999 3.75Z'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M9.375 9.48257C9.375 9.48257 9.41438 8.66225 10.2923 7.95584C10.8131 7.53631 11.4375 7.41491 12 7.40647C12.5123 7.39991 12.9698 7.48475 13.2436 7.61506C13.7123 7.83819 14.625 8.38288 14.625 9.54116C14.625 10.7599 13.8281 11.3135 12.9202 11.9224C12.0122 12.5313 11.7656 13.1923 11.7656 13.8752'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M11.7188 17.25C12.2365 17.25 12.6562 16.8303 12.6562 16.3125C12.6562 15.7947 12.2365 15.375 11.7188 15.375C11.201 15.375 10.7812 15.7947 10.7812 16.3125C10.7812 16.8303 11.201 17.25 11.7188 17.25Z'
        fill={contentColor}
      />
    </Svg>
  )
}
