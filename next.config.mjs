/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "dyqntfbszlmgrklmbfxm.supabase.co",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "54321",
      },
    ],
  },
};

export default nextConfig;
