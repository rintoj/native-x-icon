import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface MedalOutlineIconProps {
  color?: string
  size?: IconSize
}

export function MedalOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: MedalOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 21.75C14.8995 21.75 17.25 19.3995 17.25 16.5C17.25 13.6005 14.8995 11.25 12 11.25C9.10051 11.25 6.75 13.6005 6.75 16.5C6.75 19.3995 9.10051 21.75 12 21.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 18.75C13.2426 18.75 14.25 17.7426 14.25 16.5C14.25 15.2574 13.2426 14.25 12 14.25C10.7574 14.25 9.75 15.2574 9.75 16.5C9.75 17.7426 10.7574 18.75 12 18.75Z'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6.89058 15.1406L1.96121 7.46813C1.82057 7.24926 1.73928 6.99759 1.72531 6.73781C1.71134 6.47803 1.76517 6.21909 1.88152 5.98641L3.33464 3.08016C3.45915 2.83068 3.65073 2.62085 3.88787 2.47421C4.12501 2.32757 4.39833 2.24993 4.67714 2.25H19.3228C19.6013 2.25002 19.8744 2.3276 20.1113 2.47406C20.3483 2.62052 20.5398 2.83006 20.6643 3.07922L22.1175 5.98547C22.2338 6.21815 22.2876 6.4771 22.2737 6.73687C22.2597 6.99665 22.1784 7.24832 22.0378 7.46719L17.1093 15.1406'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M17.3906 6.75H1.73438'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M20.0972 2.466L14.2969 11.7191'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M6.58826 6.75L9.7031 11.7188'
        stroke={contentColor}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
