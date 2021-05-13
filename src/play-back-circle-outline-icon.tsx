import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PlayBackCircleOutlineIconProps {
  color?: string
  size?: IconSize
}

export function PlayBackCircleOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: PlayBackCircleOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 21C16.9688 21 21 16.9688 21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21Z'
        stroke={contentColor}
        stroke-miterlimit='10'
      />
      <Path
        d='M5.49512 11.5641L10.86 8.32318C10.9369 8.27711 11.0246 8.25233 11.1143 8.25137C11.2039 8.25042 11.2922 8.27332 11.37 8.31774C11.4479 8.36216 11.5126 8.42649 11.5573 8.50414C11.6021 8.58178 11.6255 8.66995 11.625 8.75959V11.259L16.485 8.32318C16.5619 8.27711 16.6496 8.25233 16.7393 8.25137C16.8289 8.25042 16.9172 8.27332 16.995 8.31774C17.0729 8.36216 17.1375 8.42649 17.1823 8.50414C17.2271 8.58178 17.2505 8.66995 17.25 8.75959V15.2405C17.2505 15.3302 17.2271 15.4183 17.1823 15.496C17.1375 15.5736 17.0729 15.638 16.995 15.6824C16.9172 15.7268 16.8289 15.7497 16.7393 15.7488C16.6496 15.7478 16.5619 15.723 16.485 15.6769L11.625 12.7412V15.2405C11.6255 15.3302 11.6021 15.4183 11.5573 15.496C11.5126 15.5736 11.4479 15.638 11.37 15.6824C11.2922 15.7268 11.2039 15.7497 11.1143 15.7488C11.0246 15.7478 10.9369 15.723 10.86 15.6769L5.49512 12.436C5.42034 12.3904 5.35854 12.3264 5.31565 12.2501C5.27277 12.1737 5.25024 12.0876 5.25024 12.0001C5.25024 11.9125 5.27277 11.8264 5.31565 11.7501C5.35854 11.6737 5.42034 11.6097 5.49512 11.5641Z'
        fill={contentColor}
      />
    </Svg>
  )
}
