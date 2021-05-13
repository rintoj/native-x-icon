import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BodyIconProps {
  color?: string
  size?: IconSize
}

export function BodyIcon({ size = 'normal', color = COLOR.SECONDARY }: BodyIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <G clip-path='url(#clip0)'>
        <Path
          d='M12 5.25C13.4497 5.25 14.625 4.07475 14.625 2.625C14.625 1.17525 13.4497 0 12 0C10.5503 0 9.375 1.17525 9.375 2.625C9.375 4.07475 10.5503 5.25 12 5.25Z'
          fill={contentColor}
        />
        <Path
          d='M20.4844 5.99979H3.51562C3.17996 5.99979 2.85804 6.13313 2.62069 6.37048C2.38334 6.60783 2.25 6.92975 2.25 7.26541C2.25 7.60108 2.38334 7.92299 2.62069 8.16034C2.85804 8.39769 3.17996 8.53103 3.51562 8.53103H8.29125C8.61516 8.53103 8.99438 8.67588 9.20906 9.23416C9.45984 9.88244 9.33703 11.1345 9.18234 12.1043L8.97984 13.2504C8.98022 13.2534 8.97991 13.2564 8.97894 13.2593C8.97796 13.2621 8.97635 13.2647 8.97422 13.2668L7.35234 22.4923C7.29353 22.8271 7.36974 23.1717 7.56433 23.4505C7.75891 23.7293 8.05601 23.9198 8.39062 23.9801C8.55606 24.0093 8.72565 24.0054 8.88957 23.9686C9.05348 23.9318 9.20845 23.8628 9.34547 23.7656C9.4825 23.6684 9.59884 23.5449 9.68776 23.4024C9.77668 23.2598 9.83639 23.101 9.86344 22.9352L10.9842 16.5227C10.9842 16.5227 11.3438 14.9998 12 14.9998C12.667 14.9998 13.0191 16.5227 13.0191 16.5227L14.1398 22.9409C14.167 23.1081 14.2271 23.2683 14.3167 23.4121C14.4064 23.5559 14.5238 23.6804 14.662 23.7784C14.8003 23.8764 14.9567 23.9458 15.122 23.9828C15.2874 24.0197 15.4585 24.0233 15.6253 23.9935C15.7921 23.9636 15.9513 23.9008 16.0936 23.8088C16.2359 23.7168 16.3584 23.5974 16.4541 23.4575C16.5498 23.3177 16.6167 23.1602 16.6509 22.9942C16.6851 22.8283 16.6859 22.6571 16.6533 22.4909L15.0309 13.2654C15.0313 13.2625 15.031 13.2595 15.0301 13.2567C15.0292 13.2538 15.0277 13.2512 15.0258 13.249L14.8228 12.1029C14.6681 11.1331 14.5453 9.88103 14.7961 9.23275C15.0098 8.67588 15.4012 8.52963 15.6998 8.52963H20.4844C20.82 8.52963 21.142 8.39629 21.3793 8.15894C21.6167 7.92159 21.75 7.59967 21.75 7.26401C21.75 6.92834 21.6167 6.60643 21.3793 6.36907C21.142 6.13172 20.82 5.99838 20.4844 5.99838V5.99979Z'
          fill={contentColor}
        />
      </G>
      <Defs>
        <ClipPath id='clip0'>
          <Rect width='24' height='24' fill={contentColor} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
