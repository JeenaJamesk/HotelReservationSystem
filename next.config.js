module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-image-domain.com', // Replace with your image domain
      },
    ],
  },
  env: {
    DB_URL: process.env.DB_URL,
    SMTP_CREDS: process.env.SMTP_CREDS,
    ADMIN_PASS: process.env.ADMIN_PASS,
  },
};