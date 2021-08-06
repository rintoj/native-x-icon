import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface KeypadIconProps {
  color?: string
  size?: IconSize
}

export function KeypadIcon({ size = 'normal', color = COLOR.SECONDARY }: KeypadIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 18.75C11.555 18.75 11.12 18.882 10.75 19.1292C10.38 19.3764 10.0916 19.7278 9.92127 20.139C9.75097 20.5501 9.70642 21.0025 9.79323 21.4389C9.88005 21.8754 10.0943 22.2763 10.409 22.591C10.7237 22.9057 11.1246 23.1199 11.561 23.2068C11.9975 23.2936 12.4499 23.249 12.861 23.0787C13.2722 22.9084 13.6236 22.62 13.8708 22.25C14.118 21.88 14.25 21.445 14.25 21C14.25 20.4033 14.0129 19.831 13.591 19.409C13.169 18.9871 12.5967 18.75 12 18.75Z'
        fill={contentColor}
      />
      <Path
        d='M12 12.75C11.555 12.75 11.12 12.882 10.75 13.1292C10.38 13.3764 10.0916 13.7278 9.92127 14.139C9.75097 14.5501 9.70642 15.0025 9.79323 15.4389C9.88005 15.8754 10.0943 16.2763 10.409 16.591C10.7237 16.9057 11.1246 17.1199 11.561 17.2068C11.9975 17.2936 12.4499 17.249 12.861 17.0787C13.2722 16.9084 13.6236 16.62 13.8708 16.25C14.118 15.88 14.25 15.445 14.25 15C14.25 14.4033 14.0129 13.831 13.591 13.409C13.169 12.9871 12.5967 12.75 12 12.75Z'
        fill={contentColor}
      />
      <Path
        d='M12 6.75C11.555 6.75 11.12 6.88196 10.75 7.12919C10.38 7.37643 10.0916 7.72783 9.92127 8.13896C9.75097 8.55009 9.70642 9.00249 9.79323 9.43895C9.88005 9.87541 10.0943 10.2763 10.409 10.591C10.7237 10.9057 11.1246 11.1199 11.561 11.2068C11.9975 11.2936 12.4499 11.249 12.861 11.0787C13.2722 10.9084 13.6236 10.62 13.8708 10.25C14.118 9.88002 14.25 9.445 14.25 9C14.25 8.40326 14.0129 7.83096 13.591 7.40901C13.169 6.98705 12.5967 6.75 12 6.75Z'
        fill={contentColor}
      />
      <Path
        d='M12 0.75C11.555 0.75 11.12 0.88196 10.75 1.12919C10.38 1.37643 10.0916 1.72783 9.92127 2.13896C9.75097 2.5501 9.70642 3.0025 9.79323 3.43895C9.88005 3.87541 10.0943 4.27632 10.409 4.59099C10.7237 4.90566 11.1246 5.11995 11.561 5.20677C11.9975 5.29358 12.4499 5.24903 12.861 5.07873C13.2722 4.90843 13.6236 4.62004 13.8708 4.25003C14.118 3.88002 14.25 3.44501 14.25 3C14.25 2.40326 14.0129 1.83097 13.591 1.40901C13.169 0.987053 12.5967 0.75 12 0.75Z'
        fill={contentColor}
      />
      <Path
        d='M18 12.75C17.555 12.75 17.12 12.882 16.75 13.1292C16.38 13.3764 16.0916 13.7278 15.9213 14.139C15.751 14.5501 15.7064 15.0025 15.7932 15.4389C15.8801 15.8754 16.0943 16.2763 16.409 16.591C16.7237 16.9057 17.1246 17.1199 17.561 17.2068C17.9975 17.2936 18.4499 17.249 18.861 17.0787C19.2722 16.9084 19.6236 16.62 19.8708 16.25C20.118 15.88 20.25 15.445 20.25 15C20.25 14.4033 20.0129 13.831 19.591 13.409C19.169 12.9871 18.5967 12.75 18 12.75Z'
        fill={contentColor}
      />
      <Path
        d='M18 6.75C17.555 6.75 17.12 6.88196 16.75 7.12919C16.38 7.37643 16.0916 7.72783 15.9213 8.13896C15.751 8.55009 15.7064 9.00249 15.7932 9.43895C15.8801 9.87541 16.0943 10.2763 16.409 10.591C16.7237 10.9057 17.1246 11.1199 17.561 11.2068C17.9975 11.2936 18.4499 11.249 18.861 11.0787C19.2722 10.9084 19.6236 10.62 19.8708 10.25C20.118 9.88002 20.25 9.445 20.25 9C20.25 8.40326 20.0129 7.83096 19.591 7.40901C19.169 6.98705 18.5967 6.75 18 6.75Z'
        fill={contentColor}
      />
      <Path
        d='M18 0.75C17.555 0.75 17.12 0.88196 16.75 1.12919C16.38 1.37643 16.0916 1.72783 15.9213 2.13896C15.751 2.5501 15.7064 3.0025 15.7932 3.43895C15.8801 3.87541 16.0943 4.27632 16.409 4.59099C16.7237 4.90566 17.1246 5.11995 17.561 5.20677C17.9975 5.29358 18.4499 5.24903 18.861 5.07873C19.2722 4.90843 19.6236 4.62004 19.8708 4.25003C20.118 3.88002 20.25 3.44501 20.25 3C20.25 2.40326 20.0129 1.83097 19.591 1.40901C19.169 0.987053 18.5967 0.75 18 0.75Z'
        fill={contentColor}
      />
      <Path
        d='M6 12.75C5.55499 12.75 5.11998 12.882 4.74997 13.1292C4.37996 13.3764 4.09157 13.7278 3.92127 14.139C3.75097 14.5501 3.70642 15.0025 3.79323 15.4389C3.88005 15.8754 4.09434 16.2763 4.40901 16.591C4.72368 16.9057 5.12459 17.1199 5.56105 17.2068C5.99751 17.2936 6.4499 17.249 6.86104 17.0787C7.27217 16.9084 7.62357 16.62 7.87081 16.25C8.11804 15.88 8.25 15.445 8.25 15C8.25 14.4033 8.01295 13.831 7.59099 13.409C7.16903 12.9871 6.59674 12.75 6 12.75Z'
        fill={contentColor}
      />
      <Path
        d='M6 6.75C5.55499 6.75 5.11998 6.88196 4.74997 7.12919C4.37996 7.37643 4.09157 7.72783 3.92127 8.13896C3.75097 8.55009 3.70642 9.00249 3.79323 9.43895C3.88005 9.87541 4.09434 10.2763 4.40901 10.591C4.72368 10.9057 5.12459 11.1199 5.56105 11.2068C5.99751 11.2936 6.4499 11.249 6.86104 11.0787C7.27217 10.9084 7.62357 10.62 7.87081 10.25C8.11804 9.88002 8.25 9.445 8.25 9C8.25 8.40326 8.01295 7.83096 7.59099 7.40901C7.16903 6.98705 6.59674 6.75 6 6.75Z'
        fill={contentColor}
      />
      <Path
        d='M6 0.75C5.55499 0.75 5.11998 0.88196 4.74997 1.12919C4.37996 1.37643 4.09157 1.72783 3.92127 2.13896C3.75097 2.5501 3.70642 3.0025 3.79323 3.43895C3.88005 3.87541 4.09434 4.27632 4.40901 4.59099C4.72368 4.90566 5.12459 5.11995 5.56105 5.20677C5.99751 5.29358 6.4499 5.24903 6.86104 5.07873C7.27217 4.90843 7.62357 4.62004 7.87081 4.25003C8.11804 3.88002 8.25 3.44501 8.25 3C8.25 2.40326 8.01295 1.83097 7.59099 1.40901C7.16903 0.987053 6.59674 0.75 6 0.75Z'
        fill={contentColor}
      />
    </Svg>
  )
}