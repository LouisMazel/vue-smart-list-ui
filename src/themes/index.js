const shadeColor = (color, percent) => {
  var R = parseInt(color.substring(1,3),16);
  var G = parseInt(color.substring(3,5),16);
  var B = parseInt(color.substring(5,7),16);

  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);

  R = (R<255)?R:255;  
  G = (G<255)?G:255;  
  B = (B<255)?B:255;  

  var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
  var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
  var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

  return "#"+RR+GG+BB;
}

const darkThemeObject = {
  '--brand-color': '#1E90FF',
  '--hover-color': '#171821',
  '--primary-color': '#21222E',
  '--second-color': '#303144',
  '--light-color': '#4b4c61',
  '--text-color': '#F2F2F2',
  '--text-muted-color': 'rgba(255, 255, 255, 0.54)'
}

darkThemeObject['--dark-brand-color'] = shadeColor(darkThemeObject['--brand-color'], -15)

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

lightThemeObject['--dark-brand-color'] = shadeColor(lightThemeObject['--brand-color'], -15)

export const darkTheme = darkThemeObject
export const lightTheme = lightThemeObject
