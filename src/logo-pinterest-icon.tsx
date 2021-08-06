import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface LogoPinterestIconProps {
  color?: string
  size?: IconSize
}

export function LogoPinterestIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: LogoPinterestIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.0023 1.5C6.20388 1.5 1.50232 6.20156 1.50232 12C1.50232 16.2984 4.08982 19.9922 7.78826 21.6188C7.76013 20.8875 7.78357 20.0062 7.97107 19.2094C8.17263 18.3562 9.32107 13.4859 9.32107 13.4859C9.32107 13.4859 8.98357 12.8156 8.98357 11.8266C8.98357 10.2703 9.88357 9.10781 11.0086 9.10781C11.9648 9.10781 12.4242 9.825 12.4242 10.6828C12.4242 11.6437 11.8101 13.0781 11.4961 14.4094C11.2336 15.525 12.0539 16.4297 13.1554 16.4297C15.1429 16.4297 16.4836 13.875 16.4836 10.8469C16.4836 8.54531 14.932 6.825 12.1148 6.825C8.93201 6.825 6.94451 9.20156 6.94451 11.8547C6.94451 12.7687 7.21638 13.4156 7.63826 13.9125C7.83044 14.1422 7.85857 14.2359 7.78826 14.4984C7.73669 14.6906 7.62419 15.1547 7.57263 15.3422C7.50232 15.6094 7.28669 15.7031 7.04763 15.6047C5.58044 15.0047 4.89607 13.4016 4.89607 11.5922C4.89607 8.61094 7.41326 5.03438 12.4008 5.03438C16.4086 5.03438 19.0476 7.93594 19.0476 11.0484C19.0476 15.1687 16.7554 18.2438 13.3804 18.2438C12.2461 18.2438 11.182 17.6297 10.8164 16.9359C10.8164 16.9359 10.207 19.3547 10.0758 19.8234C9.85544 20.6344 9.41951 21.4406 9.02107 22.0734C9.98758 22.3586 10.9899 22.5038 11.9976 22.5047C17.7961 22.5047 22.4976 17.8031 22.4976 12.0047C22.4976 6.20625 17.8008 1.5 12.0023 1.5Z'
        fill={contentColor}
      />
    </Svg>
  )
}