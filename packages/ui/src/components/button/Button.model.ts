type ObjectValues<T> = T[keyof T]

export const ButtonTypes = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  Quaternary: 'quaternary',
} as const

export const ButtonIconSizes = {
  Small: 'small',
  Normal: 'normal',
} as const

export type ButtonType = ObjectValues<typeof ButtonTypes>
export type ButtonIconSize = ObjectValues<typeof ButtonIconSizes>
