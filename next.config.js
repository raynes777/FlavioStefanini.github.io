const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js config options here
};

module.exports = {
  ...nextConfig, // Spread the existing nextConfig settings

  // Custom settings for GitHub Pages deployment
  basePath: isProd ? '/FlavioStefanini.github.io' : '', // Adjust the basePath to match your repository name
  assetPrefix: isProd ? '/FlavioStefanini.github.io/' : '', // Ensure the assetPrefix ends with a slash
};
