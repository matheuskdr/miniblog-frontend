import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: [
            "cdn-imgix.headout.com",
            "images.unsplash.com",
            "picsum.photos",
        ],
    },
};

export default nextConfig;
