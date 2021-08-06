import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BasketIconProps {
  color?: string
  size?: IconSize
}

export function BasketIcon({ size = 'normal', color = COLOR.SECONDARY }: BasketIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.8802 9H16.875L12.6 3.3C12.5302 3.20685 12.4396 3.13125 12.3354 3.07918C12.2313 3.02711 12.1165 3 12 3C11.8836 3 11.7688 3.02711 11.6646 3.07918C11.5605 3.13125 11.4699 3.20685 11.4 3.3L7.12503 9H4.11987C3.71561 8.99938 3.3276 9.15912 3.04095 9.44418C2.7543 9.72925 2.59242 10.1164 2.59081 10.5206C2.58993 10.6635 2.61064 10.8058 2.65221 10.9425L4.82112 18.5897C4.96215 19.0881 5.2621 19.5268 5.67534 19.8391C6.08859 20.1514 6.59252 20.3202 7.11049 20.3198H16.8896C17.4076 20.3182 17.9112 20.1491 18.3252 19.8377C18.7391 19.5263 19.0413 19.0893 19.1864 18.592L21.3582 10.9345C21.3682 10.8983 21.3754 10.8613 21.3797 10.8239L21.4046 10.5928C21.4074 10.5687 21.4088 10.5444 21.4088 10.5202C21.407 10.1161 21.2452 9.72913 20.9586 9.44418C20.6721 9.15923 20.2843 8.9995 19.8802 9ZM12 5.00016L15 9H9.00003L12 5.00016ZM12 16.4845C11.6509 16.4829 11.31 16.3778 11.0205 16.1826C10.731 15.9874 10.5058 15.7108 10.3734 15.3878C10.2409 15.0647 10.2071 14.7097 10.2763 14.3674C10.3454 14.0252 10.5144 13.7111 10.7619 13.4648C11.0093 13.2185 11.3242 13.051 11.6668 12.9835C12.0094 12.916 12.3643 12.9515 12.6867 13.0855C13.0091 13.2195 13.2846 13.446 13.4784 13.7364C13.6722 14.0269 13.7756 14.3682 13.7757 14.7173C13.773 15.1865 13.5848 15.6356 13.2521 15.9664C12.9194 16.2972 12.4692 16.4828 12 16.4827V16.4845Z'
        fill={contentColor}
      />
    </Svg>
  )
}