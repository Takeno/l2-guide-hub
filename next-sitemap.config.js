/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://l2-duckpedia.vercel.app',
  generateRobotsTxt: true, // (optional)
  // ...other options
}