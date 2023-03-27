import withPlugins from 'next-compose-plugins';
import withPWAInit from 'next-pwa';

const isDev = process.env.NODE_ENV === 'development';

const withPWA = withPWAInit({
  dest: 'public',
  disable: isDev,
});

/** @type {import('next').NextConfig} */
const nextConfig = withPlugins([withPWA], {
  experimental: {
    appDir: true,
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  webpack(config) {
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
    });
    return config;
  },
})

export default nextConfig;
