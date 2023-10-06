/** @type {import('next').NextConfig} */

const baseUrl = "https://campaigny-backend.nasayimhalab.net/api/"

const nextConfig = {
    reactStrictMode: true,

    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${baseUrl}:path*/`,
            },
        ]
    },

    // env variables
    env: {
        baseUrl: `${baseUrl}`,
    },


    // build config
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
