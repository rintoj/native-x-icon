import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface SpeedometerOutlineIconProps {
  color?: string
  size?: IconSize
}

export function SpeedometerOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: SpeedometerOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15.2861 10.8701L13.0595 14.4091C12.9684 14.5354 12.8576 14.6462 12.7314 14.7373C12.4266 14.9499 12.0503 15.0337 11.6841 14.9706C11.3179 14.9075 10.9913 14.7025 10.7754 14.4001C10.5594 14.0977 10.4713 13.7223 10.5304 13.3554C10.5894 12.9885 10.7908 12.6597 11.0908 12.4404L14.6298 10.2138C14.7103 10.1578 14.806 10.1277 14.9041 10.1277C15.0021 10.1277 15.0978 10.1578 15.1783 10.2138C15.2793 10.2868 15.3474 10.3967 15.3676 10.5197C15.3878 10.6427 15.3585 10.7686 15.2861 10.8701Z'
        fill={contentColor}
      />
      <Path
        d='M12 3C6.20157 3 1.50001 7.69687 1.50001 13.4953C1.49645 16.0607 2.43565 18.538 4.13907 20.4562C4.19063 20.5125 4.23751 20.5687 4.28907 20.6203C4.4 20.7404 4.53465 20.8361 4.68451 20.9015C4.83436 20.9668 4.99615 21.0003 5.15963 20.9999C5.32311 20.9995 5.48472 20.9651 5.63422 20.8989C5.78372 20.8328 5.91786 20.7363 6.02813 20.6156C6.78822 19.7896 7.71139 19.1303 8.7393 18.6793C9.76721 18.2282 10.8775 17.9954 12 17.9954C13.1225 17.9954 14.2328 18.2282 15.2607 18.6793C16.2886 19.1303 17.2118 19.7896 17.9719 20.6156C18.0822 20.7363 18.2163 20.8328 18.3658 20.8989C18.5153 20.9651 18.6769 20.9995 18.8404 20.9999C19.0039 21.0003 19.1657 20.9668 19.3155 20.9015C19.4654 20.8361 19.6 20.7404 19.7109 20.6203L19.8609 20.4562C21.5644 18.538 22.5036 16.0607 22.5 13.4953C22.5 7.69687 17.7984 3 12 3Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path d='M12 6V7.5' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
      <Path d='M19.5 13.5H18' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
      <Path d='M6 13.5H4.5' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
      <Path
        d='M7.75719 9.25793L6.69641 8.19714'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path
        d='M16.2427 9.25793L17.3035 8.19714'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </Svg>
  )
}
