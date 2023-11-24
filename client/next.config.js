/**
*  @type {import('next').NextConfig}
*/
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
  images: {
    domains: ['academyofstartups.com', "dhunis.ltd", "i.ibb.co"],
  },
};

module.exports = nextConfig;
