/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/franchise",
        destination: "/our-franchise",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
