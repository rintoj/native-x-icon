import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CalculatorOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CalculatorOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CalculatorOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.25 2.25H6.75C5.92157 2.25 5.25 2.92157 5.25 3.75V20.25C5.25 21.0784 5.92157 21.75 6.75 21.75H17.25C18.0784 21.75 18.75 21.0784 18.75 20.25V3.75C18.75 2.92157 18.0784 2.25 17.25 2.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M16.5 5.25H7.50043V8.25H16.5V5.25Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7.875 12.75C8.49632 12.75 9 12.2463 9 11.625C9 11.0037 8.49632 10.5 7.875 10.5C7.25368 10.5 6.75 11.0037 6.75 11.625C6.75 12.2463 7.25368 12.75 7.875 12.75Z'
        fill={contentColor}
      />
      <Path
        d='M12 12.75C12.6213 12.75 13.125 12.2463 13.125 11.625C13.125 11.0037 12.6213 10.5 12 10.5C11.3787 10.5 10.875 11.0037 10.875 11.625C10.875 12.2463 11.3787 12.75 12 12.75Z'
        fill={contentColor}
      />
      <Path
        d='M16.125 12.75C16.7463 12.75 17.25 12.2463 17.25 11.625C17.25 11.0037 16.7463 10.5 16.125 10.5C15.5037 10.5 15 11.0037 15 11.625C15 12.2463 15.5037 12.75 16.125 12.75Z'
        fill={contentColor}
      />
      <Path
        d='M7.875 16.5C8.49632 16.5 9 15.9963 9 15.375C9 14.7537 8.49632 14.25 7.875 14.25C7.25368 14.25 6.75 14.7537 6.75 15.375C6.75 15.9963 7.25368 16.5 7.875 16.5Z'
        fill={contentColor}
      />
      <Path
        d='M12 16.5C12.6213 16.5 13.125 15.9963 13.125 15.375C13.125 14.7537 12.6213 14.25 12 14.25C11.3787 14.25 10.875 14.7537 10.875 15.375C10.875 15.9963 11.3787 16.5 12 16.5Z'
        fill={contentColor}
      />
      <Path
        d='M7.875 20.25C8.49632 20.25 9 19.7463 9 19.125C9 18.5037 8.49632 18 7.875 18C7.25368 18 6.75 18.5037 6.75 19.125C6.75 19.7463 7.25368 20.25 7.875 20.25Z'
        fill={contentColor}
      />
      <Path
        d='M12 20.25C12.6213 20.25 13.125 19.7463 13.125 19.125C13.125 18.5037 12.6213 18 12 18C11.3787 18 10.875 18.5037 10.875 19.125C10.875 19.7463 11.3787 20.25 12 20.25Z'
        fill={contentColor}
      />
      <Path
        d='M17.25 15.375C17.25 14.7537 16.7463 14.25 16.125 14.25C15.5037 14.25 15 14.7537 15 15.375V19.125C15 19.7463 15.5037 20.25 16.125 20.25C16.7463 20.25 17.25 19.7463 17.25 19.125V15.375Z'
        fill={contentColor}
      />
    </Svg>
  )
}
