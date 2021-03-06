export const ICON_SIZES = {
  'xx-small': 14,
  'x-small': 16,
  small: 18,
  normal: 24,
  large: 32,
  'x-large': 48,
  'xx-large': 60,
}

export type IconSize = keyof typeof ICON_SIZES | number

export function getIconSize(size: IconSize) {
  if (typeof size === 'string') {
    return ICON_SIZES[size] ?? ICON_SIZES.normal
  }
  return size
}
