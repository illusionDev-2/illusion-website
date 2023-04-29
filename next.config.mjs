// @ts-check

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH;

/**
 * @type {import('next').NextConfig}
 */
export default {
  basePath: `/${BASE_PATH}`,
  assetPrefix: `/${BASE_PATH}`,
  experimental: {
    appDir: true
  },
  output: 'export'
};
