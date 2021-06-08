import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface GitNetworkIconProps {
  color?: string
  size?: IconSize
}

export function GitNetworkIcon({ size = 'normal', color = COLOR.SECONDARY }: GitNetworkIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M21 4.49995C21.0003 3.97399 20.8623 3.45718 20.5999 3.00137C20.3374 2.54556 19.9598 2.16675 19.5048 1.90294C19.0497 1.63913 18.5333 1.49959 18.0074 1.4983C17.4814 1.49701 16.9644 1.63403 16.508 1.89561C16.0517 2.15719 15.6722 2.53414 15.4075 2.98866C15.1429 3.44319 15.0023 3.95931 15.0001 4.48527C14.9978 5.01123 15.1338 5.52855 15.3945 5.98536C15.6553 6.44216 16.0315 6.82239 16.4855 7.08792C16.4016 8.0662 15.9479 8.87386 15.1322 9.49214C14.3002 10.125 13.1293 10.5 12 10.5C10.8708 10.5 9.69988 10.125 8.86785 9.49214C8.05223 8.87386 7.59847 8.0662 7.51457 7.08792C8.08444 6.7547 8.52849 6.24281 8.7779 5.63159C9.02731 5.02037 9.06815 4.34395 8.89409 3.70717C8.72003 3.07038 8.34079 2.50879 7.81515 2.10942C7.28951 1.71005 6.64681 1.49521 5.98667 1.4982C5.32654 1.50119 4.68581 1.72183 4.16381 2.12594C3.6418 2.53004 3.26766 3.09504 3.09937 3.73338C2.93108 4.37171 2.97803 5.04773 3.23296 5.65667C3.48789 6.26561 3.93655 6.77346 4.50941 7.10152C4.60691 9.0173 5.50176 10.7048 7.05519 11.8828C8.02973 12.6215 9.23441 13.1339 10.5 13.3635V16.9035C9.92811 17.2337 9.48112 17.7434 9.2284 18.3536C8.97567 18.9637 8.93133 19.6402 9.10226 20.2781C9.27318 20.916 9.64982 21.4797 10.1738 21.8817C10.6977 22.2837 11.3396 22.5016 12 22.5016C12.6604 22.5016 13.3024 22.2837 13.8263 21.8817C14.3503 21.4797 14.7269 20.916 14.8978 20.2781C15.0687 19.6402 15.0244 18.9637 14.7717 18.3536C14.519 17.7434 14.072 17.2337 13.5 16.9035V13.3635C14.7657 13.1339 15.9704 12.6215 16.9449 11.8828C18.4983 10.7048 19.3932 9.0173 19.4907 7.10152C19.949 6.83911 20.3299 6.46036 20.5949 6.00355C20.86 5.54675 20.9997 5.02807 21 4.49995ZM6.00004 2.99995C6.29671 2.99995 6.58672 3.08793 6.83339 3.25275C7.08007 3.41757 7.27233 3.65184 7.38586 3.92593C7.49939 4.20002 7.52909 4.50162 7.47122 4.79259C7.41334 5.08356 7.27048 5.35084 7.0607 5.56061C6.85092 5.77039 6.58364 5.91325 6.29267 5.97113C6.0017 6.02901 5.7001 5.9993 5.42601 5.88577C5.15192 5.77224 4.91766 5.57998 4.75283 5.33331C4.58801 5.08664 4.50004 4.79663 4.50004 4.49995C4.50004 4.10213 4.65807 3.7206 4.93938 3.43929C5.22068 3.15799 5.60221 2.99995 6.00004 2.99995ZM12 21C11.7034 21 11.4134 20.912 11.1667 20.7472C10.92 20.5823 10.7277 20.3481 10.6142 20.074C10.5007 19.7999 10.471 19.4983 10.5289 19.2073C10.5867 18.9163 10.7296 18.6491 10.9394 18.4393C11.1492 18.2295 11.4164 18.0867 11.7074 18.0288C11.9984 17.9709 12.3 18.0006 12.5741 18.1141C12.8482 18.2277 13.0824 18.4199 13.2472 18.6666C13.4121 18.9133 13.5 19.2033 13.5 19.5C13.5 19.8978 13.342 20.2793 13.0607 20.5606C12.7794 20.8419 12.3979 21 12 21ZM18 5.99995C17.7034 5.99995 17.4134 5.91198 17.1667 5.74716C16.92 5.58234 16.7277 5.34807 16.6142 5.07398C16.5007 4.79989 16.471 4.49829 16.5289 4.20732C16.5867 3.91635 16.7296 3.64907 16.9394 3.43929C17.1492 3.22951 17.4164 3.08665 17.7074 3.02878C17.9984 2.9709 18.3 3.0006 18.5741 3.11413C18.8482 3.22767 19.0824 3.41992 19.2472 3.6666C19.4121 3.91327 19.5 4.20328 19.5 4.49995C19.5 4.89778 19.342 5.27931 19.0607 5.56061C18.7794 5.84192 18.3979 5.99995 18 5.99995Z'
        fill={contentColor}
      />
    </Svg>
  )
}