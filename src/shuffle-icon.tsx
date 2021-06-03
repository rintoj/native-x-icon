import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface ShuffleIconProps {
  color?: string
  size?: IconSize
}

export function ShuffleIcon({ size = 'normal', color = COLOR.SECONDARY }: ShuffleIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.2197 13.7197C18.5126 13.4268 18.9874 13.4268 19.2803 13.7197L21.5303 15.9697C21.8232 16.2626 21.8232 16.7374 21.5303 17.0303L19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803C17.9268 18.9874 17.9268 18.5126 18.2197 18.2197L19.9393 16.5L18.2197 14.7803C17.9268 14.4874 17.9268 14.0126 18.2197 13.7197Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.2197 4.71967C18.5126 4.42678 18.9874 4.42678 19.2803 4.71967L21.5303 6.96967C21.8232 7.26256 21.8232 7.73744 21.5303 8.03033L19.2803 10.2803C18.9874 10.5732 18.5126 10.5732 18.2197 10.2803C17.9268 9.98744 17.9268 9.51256 18.2197 9.21967L19.9393 7.5L18.2197 5.78033C17.9268 5.48744 17.9268 5.01256 18.2197 4.71967Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.416 11.3762C12.7607 11.606 12.8538 12.0716 12.6241 12.4163L10.7373 15.2466C10.3264 15.863 9.76962 16.3683 9.11649 16.7178C8.46337 17.0674 7.73406 17.2502 6.99329 17.2502H3C2.58579 17.2502 2.25 16.9145 2.25 16.5003C2.25 16.086 2.58579 15.7503 3 15.7503H6.99327C6.99327 15.7503 6.99326 15.7503 6.99327 15.7503C7.48711 15.7502 7.97332 15.6283 8.40873 15.3953C8.84413 15.1623 9.21527 14.8254 9.48923 14.4146C9.48924 14.4145 9.48925 14.4145 9.48927 14.4145L11.3759 11.5843C11.6057 11.2396 12.0713 11.1465 12.416 11.3762Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.25 7.5C2.25 7.08579 2.58579 6.75 3 6.75H6.99328C7.73405 6.75001 8.46337 6.9329 9.11649 7.28242C9.76962 7.63194 10.3264 8.13729 10.7373 8.75362L14.5107 14.4142C14.7847 14.8251 15.1558 15.162 15.5913 15.3951C16.0267 15.6281 16.5129 15.75 17.0067 15.75H19.5C19.9142 15.75 20.25 16.0858 20.25 16.5C20.25 16.9142 19.9142 17.25 19.5 17.25H17.0067C16.2659 17.25 15.5366 17.0671 14.8835 16.7176C14.2304 16.3681 13.6736 15.8627 13.2627 15.2464L13.2627 15.2463L9.48927 9.58575C9.48925 9.58573 9.48924 9.58571 9.48923 9.58569C9.21527 9.17483 8.84413 8.83795 8.40873 8.60495C7.97332 8.37193 7.48712 8.25001 6.99328 8.25C6.99328 8.25 6.99329 8.25 6.99328 8.25H3C2.58579 8.25 2.25 7.91421 2.25 7.5Z'
        fill={contentColor}
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.8836 7.28242C15.5367 6.9329 16.266 6.75001 17.0068 6.75H19.5001C19.9143 6.75 20.2501 7.08579 20.2501 7.5C20.2501 7.91421 19.9143 8.25 19.5001 8.25H17.0068C17.0068 8.25 17.0068 8.25 17.0068 8.25C16.513 8.25001 16.0268 8.37193 15.5913 8.60494C15.156 8.83793 14.7849 9.17477 14.5109 9.58559C14.5109 9.58564 14.5108 9.58569 14.5108 9.58574L14.1242 10.1659C13.8945 10.5106 13.4289 10.6038 13.0842 10.3741C12.7395 10.1444 12.6463 9.67878 12.876 9.33409L13.2628 8.75362C13.6737 8.13729 14.2305 7.63194 14.8836 7.28242Z'
        fill={contentColor}
      />
    </Svg>
  )
}