// @ts-check

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH;

/**
 * @type {import('next').NextConfig}
 */
export default {
  basePath: BASE_PATH ? `/${BASE_PATH}` : undefined,
  assetPrefix: BASE_PATH ? `/${BASE_PATH}` : undefined,
  experimental: {
    appDir: true
  },
  output: 'export'
};
