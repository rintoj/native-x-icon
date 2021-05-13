import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface PencilIconProps {
  color?: string
  size?: IconSize
}

export function PencilIcon({ size = 'normal', color = COLOR.SECONDARY }: PencilIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M16.8097 5.02942C17.0834 5.02925 17.346 5.13791 17.5395 5.33147L18.6692 6.46115C18.8628 6.6547 18.9714 6.91727 18.9713 7.19099C18.9711 7.46471 18.8621 7.72714 18.6683 7.92046L5.88084 20.6765C5.78502 20.7721 5.67133 20.8479 5.54625 20.8996L3.675 21.6726C3.28983 21.8317 2.84675 21.7433 2.55208 21.4486C2.2574 21.1539 2.16904 20.7109 2.32815 20.3257L3.10112 18.4545C3.15278 18.3294 3.22857 18.2157 3.32415 18.1199L16.0802 5.33236C16.2736 5.13857 16.536 5.02959 16.8097 5.02942Z'
        fill={contentColor}
      />
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M19.219 2.38743C19.438 2.2967 19.6728 2.25 19.9099 2.25C20.1469 2.25 20.3817 2.2967 20.6007 2.38743C20.8197 2.47815 21.0187 2.61112 21.1863 2.77875C21.1863 2.77876 21.1864 2.77878 21.1864 2.77879L21.2218 2.81418C21.56 3.15267 21.75 3.61162 21.75 4.09014C21.75 4.56867 21.56 5.02761 21.2218 5.36611L20.6688 5.91903C20.2661 6.32176 19.6131 6.32176 19.2104 5.91903L18.0807 4.78934C17.8873 4.59589 17.7786 4.3335 17.7787 4.05992C17.7787 3.78634 17.8875 3.524 18.081 3.33063L18.6333 2.77879C18.6334 2.77872 18.6335 2.77864 18.6336 2.77857C18.6336 2.77853 18.6337 2.77848 18.6337 2.77844C18.8013 2.61096 19.0001 2.4781 19.219 2.38743ZM20.4923 4.63717L20.6688 4.46062L20.1218 3.91359L20.4923 3.54311L20.1217 3.91346L20.0866 3.87844L19.5391 3.33094'
        fill={contentColor}
      />
    </Svg>
  )
}