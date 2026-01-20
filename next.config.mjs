/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'fr.yamaha.com',
      },
      {
        protocol: 'https',
        hostname: 'mbolwe.com',
      },
      {
        protocol: 'https',
        hostname: 'institutfrancais-togo.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fdel27-2.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'www.unesco.org',
      },
      {
        protocol: 'https',
        hostname: 'institutfrancais-gabon.com',
      },
    ],
  },
};

export default nextConfig;
