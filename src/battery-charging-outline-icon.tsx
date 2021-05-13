import { COLOR, useTheme } from 'native-x-theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { getIconSize, IconSize } from './icon-size'

export interface BatteryChargingOutlineIconProps {
  color?: string
  size?: IconSize
}

export function BatteryChargingOutlineIcon({
  size = 'normal',
  color = COLOR.SECONDARY,
}: BatteryChargingOutlineIconProps) {
  const { getColor } = useTheme()
  const contentColor = getColor?.(color)
  const iconSize = getIconSize(size)
  return (
    <Svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M2.25 15.1078V8.89219C2.2505 8.52311 2.39733 8.16929 2.65831 7.90831C2.91929 7.64733 3.27311 7.5005 3.64219 7.5H10.0847L11.2284 6H3.64219C2.8754 6.00087 2.14026 6.30586 1.59806 6.84806C1.05586 7.39026 0.750868 8.1254 0.75 8.89219V15.1078C0.750868 15.8746 1.05586 16.6097 1.59806 17.1519C2.14026 17.6941 2.8754 17.9991 3.64219 18H8.18203C8.16738 17.8857 8.1715 17.7698 8.19422 17.6569L8.20125 17.6217L8.21109 17.5875L8.51578 16.5H3.64219C3.27311 16.4995 2.91929 16.3527 2.65831 16.0917C2.39733 15.8307 2.2505 15.4769 2.25 15.1078Z'
        fill={contentColor}
      />
      <Path
        d='M18.1078 6H13.4841C13.4978 6.11246 13.4936 6.22639 13.4714 6.3375L13.4644 6.37219L13.4545 6.40641L13.148 7.5H18.1078C18.4769 7.5005 18.8307 7.64733 19.0917 7.90831C19.3527 8.16929 19.4995 8.52311 19.5 8.89219V15.1078C19.4995 15.4769 19.3527 15.8307 19.0917 16.0917C18.8307 16.3527 18.4769 16.4995 18.1078 16.5H11.5781L10.4334 18H18.1078C18.8746 17.9991 19.6097 17.6941 20.1519 17.1519C20.6941 16.6097 20.9991 15.8746 21 15.1078V8.89219C20.9991 8.1254 20.6941 7.39026 20.1519 6.84806C19.6097 6.30586 18.8746 6.00087 18.1078 6Z'
        fill={contentColor}
      />
      <Path
        d='M7.62422 13.7888C7.41626 13.7888 7.21222 13.7321 7.03413 13.6247C6.85603 13.5173 6.71063 13.3633 6.6136 13.1794C6.51322 12.9907 6.46637 12.7781 6.4781 12.5647C6.48983 12.3513 6.55971 12.1452 6.68016 11.9686L6.69469 11.947L6.71016 11.9264L9.26344 8.57812H4.20422C3.95558 8.57812 3.71713 8.6769 3.54131 8.85271C3.3655 9.02853 3.26672 9.26698 3.26672 9.51562V14.4844C3.26672 14.733 3.3655 14.9715 3.54131 15.1473C3.71713 15.3231 3.95558 15.4219 4.20422 15.4219H8.81766L9.2761 13.7878L7.62422 13.7888Z'
        fill={contentColor}
      />
      <Path
        d='M12.9408 13.1668L14.2097 11.5032C14.2275 11.4761 14.2398 11.4456 14.2458 11.4137C14.2477 11.4034 14.2489 11.3931 14.2495 11.3827C14.2509 11.3625 14.2496 11.3422 14.2458 11.3223C14.2403 11.2932 14.2295 11.2654 14.2139 11.2402C14.2037 11.2239 14.1914 11.2089 14.1773 11.1957C14.1704 11.1891 14.1628 11.1831 14.1548 11.1779C14.1389 11.1666 14.1214 11.1579 14.1028 11.1521C14.0829 11.1458 14.0622 11.1426 14.0414 11.1427H11.1529L11.7211 9.11726L11.8725 8.57819L12.1636 7.53944L12.1875 7.45319L12.5526 6.15194C12.5541 6.14343 12.5549 6.1348 12.555 6.12616C12.555 6.12335 12.555 6.12101 12.555 6.11866C12.555 6.11632 12.555 6.10647 12.5526 6.10085C12.5503 6.09522 12.5526 6.09663 12.5526 6.09429C12.5508 6.08699 12.5481 6.07991 12.5447 6.07319C12.541 6.06685 12.5369 6.06075 12.5325 6.05491L12.5283 6.05023C12.5246 6.04639 12.5207 6.04279 12.5165 6.03944L12.5118 6.03569C12.506 6.0315 12.4999 6.02774 12.4936 6.02444C12.4874 6.02157 12.481 6.01937 12.4743 6.01788H12.4683H12.4528H12.4467C12.4397 6.01719 12.4326 6.01719 12.4256 6.01788C12.4188 6.01944 12.4122 6.0218 12.4059 6.02491L12.3998 6.02819L12.3858 6.03804L12.3806 6.04273C12.3743 6.04847 12.3686 6.05492 12.3637 6.06194L11.52 7.1696L10.904 7.97679L10.4423 8.57819L7.45592 12.4946C7.44806 12.5065 7.44116 12.5191 7.4353 12.5321C7.4278 12.5484 7.42229 12.5656 7.41889 12.5832C7.41486 12.6031 7.4136 12.6234 7.41514 12.6437C7.41671 12.6778 7.42595 12.7112 7.44218 12.7413C7.45841 12.7714 7.48121 12.7975 7.50889 12.8176C7.517 12.823 7.52546 12.8278 7.5342 12.8321C7.56182 12.8455 7.59212 12.8524 7.6228 12.8523H10.5112L9.11342 17.8407C9.11274 17.8494 9.11274 17.8582 9.11342 17.8669C9.11342 17.8669 9.11342 17.8716 9.11342 17.874C9.11386 17.88 9.1148 17.8859 9.11623 17.8918C9.11597 17.894 9.11597 17.8962 9.11623 17.8983C9.11811 17.9057 9.12078 17.9127 9.1242 17.9194C9.12788 17.9256 9.13195 17.9316 9.13639 17.9373L9.14061 17.9419L9.15232 17.9532C9.15408 17.9542 9.15567 17.9554 9.15701 17.9569C9.16272 17.9612 9.16885 17.9648 9.17529 17.9677C9.18152 17.9704 9.18795 17.9726 9.19451 17.9743H9.20061C9.20575 17.9747 9.21093 17.9747 9.21607 17.9743H9.22217C9.22927 17.974 9.23634 17.9731 9.24326 17.9715C9.24992 17.9697 9.25636 17.9672 9.26248 17.964L9.26857 17.9607L9.28264 17.9509L9.28779 17.9466C9.29413 17.9409 9.29979 17.9344 9.30467 17.9274L10.3978 16.5001L11.2195 15.4219L12.9408 13.1668Z'
        fill={contentColor}
      />
      <Path
        d='M14.9765 12.0436L14.9549 12.0717L12.3988 15.4219H17.5457C17.7944 15.4219 18.0328 15.3231 18.2086 15.1473C18.3844 14.9715 18.4832 14.733 18.4832 14.4844V9.51562C18.4832 9.26698 18.3844 9.02853 18.2086 8.85271C18.0328 8.6769 17.7944 8.57812 17.5457 8.57812H12.846L12.3895 10.2061H14.0413C14.2474 10.2058 14.4496 10.2614 14.6266 10.3667C14.8036 10.4721 14.9488 10.6235 15.0468 10.8047C15.1487 10.9917 15.1981 11.2028 15.1898 11.4156C15.1816 11.6284 15.116 11.835 14.9999 12.0136L14.9765 12.0436Z'
        fill={contentColor}
      />
      <Path
        d='M22.5 9.50024C22.3011 9.50024 22.1103 9.57926 21.9697 9.71991C21.829 9.86057 21.75 10.0513 21.75 10.2502V13.7499C21.75 13.9489 21.829 14.1396 21.9697 14.2803C22.1103 14.4209 22.3011 14.4999 22.5 14.4999C22.6989 14.4999 22.8897 14.4209 23.0303 14.2803C23.171 14.1396 23.25 13.9489 23.25 13.7499V10.2502C23.25 10.0513 23.171 9.86057 23.0303 9.71991C22.8897 9.57926 22.6989 9.50024 22.5 9.50024Z'
        fill={contentColor}
      />
    </Svg>
  )
}
