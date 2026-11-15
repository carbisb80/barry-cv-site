import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    // Keep the existing site and its homepage unchanged.
    // Proxy QA Test Lab under /lab, including its supporting resources
    // and specific demo API endpoints that are requested from absolute paths.
    const labOrigin = 'https://qa-test-lab-six.vercel.app';
    return {
      beforeFiles: [
        { source: '/lab', destination: `${labOrigin}/` },
        { source: '/lab/:path*', destination: `${labOrigin}/:path*` },
        { source: '/training-v4.js', destination: `${labOrigin}/training-v4.js` },
        { source: '/playwright-setup-v5.js', destination: `${labOrigin}/playwright-setup-v5.js` },
        { source: '/glossary-code-v6.js', destination: `${labOrigin}/glossary-code-v6.js` },
        { source: '/glossary-links-v7.js', destination: `${labOrigin}/glossary-links-v7.js` },
        { source: '/api-security-v1.js', destination: `${labOrigin}/api-security-v1.js` },
        { source: '/academy-simple-v2.js', destination: `${labOrigin}/academy-simple-v2.js` },
        { source: '/api/customers', destination: `${labOrigin}/api/customers` },
        { source: '/api/transactions', destination: `${labOrigin}/api/transactions` },
        { source: '/api/login', destination: `${labOrigin}/api/login` },
        { source: '/api/enquiries', destination: `${labOrigin}/api/enquiries` },
        { source: '/api/security', destination: `${labOrigin}/api/security` },
      ],
    };
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
