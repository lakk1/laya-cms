const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/products",
        permanent: true,
      },
    ];
  },
});
