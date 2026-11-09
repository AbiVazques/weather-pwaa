export default function manifest() {
    return {
        name: 'Weather PWA',
        short_name: 'Weather',
        description: 'Pronostico del tiempo en una aplicacion web progresiva',
        start_url: '/',
        display: 'standalone',
        background_color: '#0f172a',
        theme_color: '#0ea5e9',
        icons: [
            { src: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
            { src: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
        ],
    };
}