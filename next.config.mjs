/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "cdn.justinnn.dev" },
            { protocol: "https", hostname: "placehold.co" },
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
