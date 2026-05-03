export const makeClassName = (
  settings: string,
  _className?: string,
  numberOfLines?: number
) => [settings, numberOfLines ? `line-clamp-${numberOfLines}` : '', _className].join(' ')
