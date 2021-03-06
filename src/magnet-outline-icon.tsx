import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MagnetOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MagnetOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: MagnetOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.7734 13.7724C21.0393 12.5065 21.7505 10.7896 21.7505 8.99931C21.7505 7.20907 21.0393 5.49216 19.7734 4.22627C18.5075 2.96038 16.7906 2.24921 15.0003 2.24921C13.2101 2.24921 11.4932 2.96038 10.2273 4.22627'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path
        d='M16.5909 10.591C17.0072 10.1679 17.2394 9.5974 17.237 9.00384C17.2346 8.41028 16.9977 7.84172 16.578 7.42201C16.1583 7.0023 15.5898 6.76544 14.9962 6.76302C14.4026 6.7606 13.8322 6.99283 13.4091 7.40911'
        stroke={contentColor}
        strokeMiterlimit='10'
      />
      <Path d='M9 21.75V19.5' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
      <Path
        d='M4.22717 19.7729L5.81811 18.182'
        stroke={contentColor}
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <Path d='M2.25 15H4.5' stroke={contentColor} strokeMiterlimit='10' strokeLinecap='round' />
      <Path
        d='M13.4091 7.40915L8.10563 12.7121C7.82433 12.9933 7.44285 13.1513 7.04508 13.1513C6.64731 13.1513 6.26583 12.9933 5.98454 12.7121L4.92188 11.6518C4.78256 11.5125 4.67204 11.3471 4.59664 11.1651C4.52123 10.9831 4.48242 10.788 4.48242 10.591C4.48242 10.394 4.52123 10.1989 4.59664 10.0169C4.67204 9.8349 4.78256 9.66953 4.92188 9.53024L10.2272 4.22681'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path
        d='M19.7733 13.7724L14.4699 19.0777C14.3306 19.217 14.1652 19.3275 13.9832 19.4029C13.8012 19.4784 13.6061 19.5172 13.4091 19.5172C13.2121 19.5172 13.017 19.4784 12.835 19.4029C12.653 19.3275 12.4876 19.217 12.3483 19.0777L11.288 18.0169C11.1486 17.8776 11.0381 17.7123 10.9627 17.5302C10.8873 17.3482 10.8485 17.1532 10.8485 16.9561C10.8485 16.7591 10.8873 16.564 10.9627 16.382C11.0381 16.2 11.1486 16.0347 11.288 15.8954L16.591 10.5905'
        stroke={contentColor}
        strokeLinejoin='round'
      />
      <Path d='M6.54382 7.96735L9.7257 11.1497' stroke={contentColor} strokeLinejoin='round' />
      <Path d='M12.9075 14.332L16.0898 17.5139' stroke={contentColor} strokeLinejoin='round' />
    </Svg>
  )
}
