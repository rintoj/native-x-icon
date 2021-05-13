import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface TicketOutlineIconProps {
  color?: string
  size?: IconSize
}

export function TicketOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: TicketOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17.1587 6.84308C16.7687 6.45299 16.5404 5.93008 16.5193 5.3789C16.4983 4.82773 16.6861 4.28894 17.0452 3.87027C17.0749 3.83545 17.0904 3.79069 17.0884 3.74496C17.0865 3.69924 17.0674 3.65592 17.0349 3.6237L14.9663 1.55277C14.9321 1.51859 14.8858 1.49939 14.8374 1.49939C14.7891 1.49939 14.7427 1.51859 14.7085 1.55277L11.4113 4.84995C11.2897 4.97158 11.198 5.11987 11.1437 5.28308V5.28308C11.0895 5.44666 10.998 5.59538 10.8763 5.71743C10.7547 5.83948 10.6063 5.9315 10.4429 5.9862V5.9862C10.2796 6.04062 10.1311 6.13225 10.0093 6.25386L1.5535 14.7078C1.51932 14.742 1.50012 14.7883 1.50012 14.8367C1.50012 14.885 1.51932 14.9314 1.5535 14.9656L3.62209 17.0342C3.65431 17.0667 3.69762 17.0858 3.74335 17.0877C3.78908 17.0896 3.83384 17.0742 3.86866 17.0445C4.28723 16.685 4.82615 16.4969 5.37751 16.5178C5.92887 16.5387 6.45199 16.7671 6.84215 17.1572C7.2323 17.5474 7.46069 18.0705 7.4816 18.6219C7.50251 19.1732 7.31439 19.7122 6.9549 20.1307C6.9252 20.1656 6.90976 20.2103 6.91168 20.256C6.91359 20.3018 6.93271 20.3451 6.96522 20.3773L9.03381 22.4459C9.06801 22.4801 9.11437 22.4993 9.16272 22.4993C9.21106 22.4993 9.25743 22.4801 9.29162 22.4459L17.7479 13.9901C17.8695 13.8683 17.9611 13.7198 18.0155 13.5565V13.5565C18.0697 13.3929 18.1612 13.2442 18.2829 13.1222C18.4045 13.0001 18.5529 12.9081 18.7163 12.8534V12.8534C18.8795 12.799 19.0278 12.7074 19.1494 12.5857L22.4466 9.28855C22.4808 9.25435 22.5 9.20799 22.5 9.15964C22.5 9.1113 22.4808 9.06493 22.4466 9.03074L20.378 6.96214C20.3458 6.92964 20.3025 6.91051 20.2568 6.9086C20.211 6.90669 20.1663 6.92213 20.1315 6.95183C19.7134 7.31153 19.1749 7.50017 18.6238 7.48C18.0726 7.45984 17.5493 7.23237 17.1587 6.84308V6.84308Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
      <Path
        d='M11.7422 6.58347L10.9683 5.80957'
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <Path
        d='M13.8056 8.64563L13.2896 8.13'
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <Path
        d='M15.869 10.7101L15.3534 10.194'
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <Path
        d='M18.1908 13.0317L17.4169 12.2578'
        stroke={contentColor}
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
    </Svg>
  )
}
