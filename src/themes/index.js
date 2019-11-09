import { ShadeColor } from '@/utils/ColorTransfomer'

const darkThemeObject = {
  '--brand-color': '#1E90FF',
  '--hover-color': '#171821',
  '--primary-color': '#21222E',
  '--second-color': '#303144',
  '--light-color': '#4b4c61',
  '--text-color': '#F2F2F2',
  '--text-muted-color': 'rgba(255, 255, 255, 0.54)'
}

darkThemeObject['--dark-brand-color'] = ShadeColor(darkThemeObject['--brand-color'], -15)

const lightThemeObject = {
  '--brand-color': '#1E90FF',
  '--dark-brand-color': 'darken(dodgerblue, 10%)',
  '--hover-color': '#F2F2F2',
  '--primary-color': '#FFF',
  '--second-color': '#F2F2F2',
  '--light-color': '#FFF',
  '--text-color': '#000',
  '--text-muted-color': 'rgba(0, 0, 0, 0.54)'
}

lightThemeObject['--dark-brand-color'] = ShadeColor(lightThemeObject['--brand-color'], -15)

export const darkTheme = darkThemeObject
export const lightTheme = lightThemeObject
