import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface CarSportOutlineIconProps {
  color?: string
  size?: IconSize
}

export function CarSportOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: CarSportOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M22.0176 10.9969C21.674 10.5408 20.3976 10.2267 19.8576 9.40594C19.3176 8.58516 18.8756 6.80766 17.5012 6.12469C16.1268 5.44172 13.4999 5.25 11.9999 5.25C10.4999 5.25 7.87494 5.4375 6.49869 6.12328C5.12244 6.80906 4.68229 8.58516 4.14229 9.40453C3.60229 10.2239 2.32588 10.5408 1.98229 10.9969C1.63869 11.453 1.39682 14.3363 1.54401 15.75C1.69119 17.1637 1.96588 18 1.96588 18H5.99713C6.65713 18 6.87182 17.752 8.22182 17.625C9.70307 17.4844 11.1562 17.4375 11.9999 17.4375C12.8437 17.4375 14.3437 17.4844 15.824 17.625C17.174 17.753 17.3957 18 18.0487 18H22.0331C22.0331 18 22.3078 17.1637 22.4549 15.75C22.6021 14.3363 22.3593 11.453 22.0176 10.9969Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M21.375 18H18.75V18.75H21.375V18Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M5.25 18H2.625V18.75H5.25V18Z'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M17.0845 14.4919C16.8074 14.1717 15.9046 13.9045 14.7093 13.7255C13.514 13.5464 13.0781 13.5 12.0093 13.5C10.9406 13.5 10.4545 13.5769 9.30885 13.7255C8.16322 13.8741 7.30307 14.1384 6.93416 14.4919C6.38057 15.0281 7.19151 15.63 7.82807 15.7031C8.44494 15.7734 9.67822 15.7476 12.0145 15.7476C14.3507 15.7476 15.584 15.7734 16.2009 15.7031C16.8365 15.6258 17.5893 15.0656 17.0845 14.4919Z'
        fill={contentColor}
      />
      <Path
        d='M20.2298 11.3931C20.2272 11.3558 20.2109 11.3209 20.1841 11.2949C20.1573 11.269 20.1218 11.2538 20.0845 11.2524C19.5309 11.2327 18.9689 11.2721 17.9719 11.566C17.4632 11.7145 16.9855 11.9537 16.5619 12.272C16.455 12.3554 16.4929 12.5809 16.627 12.6048C17.4488 12.7012 18.2755 12.7497 19.1029 12.7501C19.5993 12.7501 20.1117 12.6095 20.2068 12.167C20.2554 11.9118 20.2631 11.6506 20.2298 11.3931Z'
        fill={contentColor}
      />
      <Path
        d='M3.77015 11.3931C3.77279 11.3558 3.78907 11.3209 3.81589 11.2949C3.84271 11.269 3.87817 11.2538 3.91547 11.2524C4.46906 11.2327 5.03109 11.2721 6.02812 11.566C6.53679 11.7145 7.01446 11.9537 7.43812 12.272C7.545 12.3554 7.50703 12.5809 7.37297 12.6048C6.55117 12.7012 5.72446 12.7497 4.89703 12.7501C4.40062 12.7501 3.88828 12.6095 3.79312 12.167C3.74461 11.9118 3.73686 11.6506 3.77015 11.3931Z'
        fill={contentColor}
      />
      <Path d='M20.25 9H21' stroke={contentColor} stroke-linecap='round' stroke-linejoin='round' />
      <Path d='M3 9H3.75' stroke={contentColor} stroke-linecap='round' stroke-linejoin='round' />
      <Path
        d='M3.65625 9.89062C3.65625 9.89062 5.82891 9.32812 12 9.32812C18.1711 9.32812 20.3438 9.89062 20.3438 9.89062'
        stroke={contentColor}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  )
}
