import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CheckmarkDoneCircleIconProps {
  color?: string
  size?: IconSize
}

export function CheckmarkDoneCircleIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CheckmarkDoneCircleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.136 2.25017C6.65252 2.17611 2.17596 6.65267 2.25002 12.1361C2.32315 17.395 6.60518 21.677 11.8641 21.7502C17.3485 21.8252 21.8241 17.3486 21.7491 11.8652C21.6769 6.60533 17.3949 2.3233 12.136 2.25017ZM11.3489 11.2722L13.7653 8.50658C13.8962 8.35677 14.0813 8.26511 14.2798 8.25175C14.4783 8.23838 14.674 8.30442 14.8238 8.43533C14.9736 8.56624 15.0652 8.7513 15.0786 8.94979C15.092 9.14829 15.0259 9.34396 14.895 9.49377L12.4786 12.2594C12.4138 12.3336 12.335 12.3943 12.2467 12.438C12.1585 12.4817 12.0624 12.5076 11.9642 12.5142C11.8659 12.5208 11.7672 12.508 11.6739 12.4765C11.5806 12.445 11.4944 12.3955 11.4202 12.3306C11.346 12.2658 11.2853 12.187 11.2416 12.0988C11.1979 12.0105 11.172 11.9145 11.1653 11.8162C11.1587 11.7179 11.1715 11.6193 11.203 11.5259C11.2345 11.4326 11.2841 11.3464 11.3489 11.2722ZM9.52736 15.5308C9.38673 15.6713 9.19604 15.7503 8.99721 15.7503C8.79838 15.7503 8.60769 15.6713 8.46705 15.5308L6.2194 13.2808C6.14977 13.2111 6.09456 13.1284 6.05691 13.0374C6.01925 12.9464 5.99989 12.8488 5.99994 12.7503C5.99998 12.6518 6.01942 12.5543 6.05716 12.4633C6.09489 12.3723 6.15018 12.2896 6.21986 12.22C6.28955 12.1504 6.37226 12.0952 6.46328 12.0575C6.5543 12.0199 6.65185 12.0005 6.75035 12.0006C6.84885 12.0006 6.94638 12.02 7.03737 12.0578C7.12836 12.0955 7.21103 12.1508 7.28065 12.2205L9.53065 14.4705C9.67076 14.6116 9.74912 14.8025 9.7485 15.0013C9.74789 15.2002 9.66835 15.3906 9.52736 15.5308ZM17.8149 9.49377L12.5705 15.4938C12.5029 15.5712 12.4202 15.6339 12.3274 15.678C12.2345 15.7221 12.1337 15.7467 12.031 15.7502H12.0056C11.9071 15.7502 11.8095 15.7308 11.7185 15.6931C11.6274 15.6553 11.5447 15.6 11.475 15.5303L9.22783 13.2803C9.08723 13.1396 9.00829 12.9488 9.00837 12.7498C9.00846 12.5509 9.08757 12.3602 9.2283 12.2195C9.36903 12.0789 9.55985 12 9.75879 12.0001C9.95773 12.0002 10.1485 12.0793 10.2891 12.22L11.686 13.6183C11.7223 13.6546 11.7657 13.6831 11.8134 13.702C11.8612 13.7208 11.9123 13.7297 11.9637 13.728C12.015 13.7262 12.0654 13.714 12.1118 13.692C12.1583 13.67 12.1996 13.6387 12.2335 13.6L16.6866 8.50658C16.8175 8.35677 17.0026 8.26511 17.201 8.25175C17.3995 8.23838 17.5952 8.30442 17.745 8.43533C17.8948 8.56624 17.9865 8.7513 17.9999 8.94979C18.0132 9.14829 17.9472 9.34396 17.8163 9.49377H17.8149Z'
        fill={contentColor}
      />
    </Svg>
  )
}