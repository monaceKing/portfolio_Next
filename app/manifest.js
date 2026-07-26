export default function manifest() {
  return {
    name: 'Monace Portfolio',
    short_name: 'Monace',
    description: 'Mon portfolio personnel',
    start_url: '/',
    display: 'standalone',
    background_color: '#764ba2',
    theme_color: '#ffffff',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}