import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    fontFamily: {
        sans: ['ObjectSans'],
    },
    extend: {
        colors: {
            orange: '#d20a11',
            black: '#161616',   
        }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  content: []
}
