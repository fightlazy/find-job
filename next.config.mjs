/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fbacdggvvvvvhreiijgf.supabase.co",
      },
    ],
  },
};

export default nextConfig;
