module.exports = {
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/products",
        permanent: true,
      },
    ];
  },
};
