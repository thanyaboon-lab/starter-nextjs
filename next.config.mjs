/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
};

export default nextConfig;
