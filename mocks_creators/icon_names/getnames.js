const MaterialIconsGlyphs = require('react-native-vector-icons/glyphmaps/MaterialIcons.json');
const fs = require('fs');

fs.writeFileSync(
  './icons.json',
  JSON.stringify(Object.keys(MaterialIconsGlyphs), null, 4),
);
