module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      zIndex: {
        auto: 'auto',
        'negative': '-1',
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50'
      },
      colors: {
        ssscBlue: '#006bde'
      },
      height: {
        mapSm: '400px',
        mapMd: '800px'
      }
    },
  },
  variants: {},
  plugins: [],
}
