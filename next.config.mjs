/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "s3.justinnn.dev" },
            { protocol: "https", hostname: "placehold.co" },
        ],
        dangerouslyAllowSVG: true,
        unoptimized: true
    },
};

export default nextConfig;