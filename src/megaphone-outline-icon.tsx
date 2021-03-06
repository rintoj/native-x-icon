import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MegaphoneOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MegaphoneOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: MegaphoneOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.1222 2.44742C19.1222 2.44742 15.0609 7.49961 11.25 7.49961H3.75C3.55109 7.49961 3.36032 7.57862 3.21967 7.71928C3.07902 7.85993 3 8.05069 3 8.24961V12.7496C3 12.9485 3.07902 13.1393 3.21967 13.2799C3.36032 13.4206 3.55109 13.4996 3.75 13.4996H11.25C15.0609 13.4996 19.1222 18.5729 19.1222 18.5729C19.4063 18.9479 20.25 18.691 20.25 18.1121V2.90586C20.25 2.32883 19.4531 2.02367 19.1222 2.44742Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M3 12C3 12 2.25 11.7188 2.25 10.5C2.25 9.28125 3 9 3 9'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21 11.5312C21 11.5312 21.75 11.3283 21.75 10.5C21.75 9.67172 21 9.46875 21 9.46875'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M12 7.5V13.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path d='M5.25 7.5V13.5' stroke={contentColor} strokeLinecap='round' strokeLinejoin='round' />
      <Path
        d='M6.75 13.5V21.375C6.75 21.4745 6.78951 21.5698 6.85983 21.6402C6.93016 21.7105 7.02554 21.75 7.125 21.75H9.60938C9.72686 21.75 9.84272 21.7225 9.9476 21.6695C10.0525 21.6166 10.1435 21.5397 10.2132 21.4452C10.2829 21.3506 10.3295 21.241 10.3491 21.1252C10.3687 21.0093 10.3608 20.8905 10.3261 20.7783C9.93328 19.5183 9 18.0975 9 15.75H9.75C9.94891 15.75 10.1397 15.671 10.2803 15.5303C10.421 15.3897 10.5 15.1989 10.5 15V14.25C10.5 14.0511 10.421 13.8603 10.2803 13.7197C10.1397 13.579 9.94891 13.5 9.75 13.5H9'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
