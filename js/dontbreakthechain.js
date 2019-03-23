var draw = SVG('body').size(300, 300)
for (i=0; i<30; i++) {
  draw.rect(24, 24).stroke('#EEE').move(i*20, 0)
}
