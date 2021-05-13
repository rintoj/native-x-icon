import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MailUnreadOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MailUnreadOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: MailUnreadOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15 4.5H4.125C3.62772 4.5 3.15081 4.69754 2.79917 5.04917C2.44754 5.40081 2.25 5.87772 2.25 6.375V17.625C2.25 18.1223 2.44754 18.5992 2.79917 18.9508C3.15081 19.3025 3.62772 19.5 4.125 19.5H19.8155C20.3128 19.5 20.7897 19.3025 21.1413 18.9508C21.4929 18.5992 21.6905 18.1223 21.6905 17.625V11.2031'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M5.25 7.5L12 12.75L16.0781 9.67172'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M20.2477 8.25039C21.489 8.25039 22.4953 7.24407 22.4953 6.00273C22.4953 4.76138 21.489 3.75507 20.2477 3.75507C19.0063 3.75507 18 4.76138 18 6.00273C18 7.24407 19.0063 8.25039 20.2477 8.25039Z'
        fill={contentColor}
      />
      <Path
        d='M20.2499 9.00036C19.657 9.00036 19.0774 8.82455 18.5844 8.49516C18.0915 8.16577 17.7073 7.6976 17.4804 7.14985C17.2535 6.6021 17.1941 5.99937 17.3098 5.41788C17.4255 4.83639 17.711 4.30226 18.1302 3.88303C18.5494 3.4638 19.0836 3.1783 19.665 3.06264C20.2465 2.94697 20.8493 3.00633 21.397 3.23322C21.9448 3.46011 22.4129 3.84432 22.7423 4.33729C23.0717 4.83025 23.2475 5.40982 23.2475 6.0027C23.2469 6.79753 22.9309 7.55964 22.3688 8.12168C21.8068 8.68371 21.0447 8.99974 20.2499 9.00036ZM20.2499 4.50504C19.9531 4.50457 19.6629 4.59215 19.4159 4.75669C19.1689 4.92123 18.9763 5.15534 18.8624 5.42939C18.7485 5.70344 18.7184 6.00511 18.7761 6.29624C18.8337 6.58736 18.9763 6.85486 19.186 7.06487C19.3957 7.27488 19.663 7.41798 19.954 7.47605C20.2451 7.53411 20.5468 7.50455 20.821 7.39108C21.0952 7.27762 21.3296 7.08536 21.4946 6.83864C21.6595 6.59192 21.7475 6.30181 21.7475 6.00504C21.7475 5.60762 21.5898 5.22644 21.309 4.94521C21.0282 4.66397 20.6473 4.50566 20.2499 4.50504Z'
        fill={contentColor}
      />
    </Svg>
  )
}