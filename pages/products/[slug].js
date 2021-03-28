import ProductView from "@/components/ProductView";
import UserLayout from "@/components/UserLayout";
import { getProductBySlug } from "@/lib/db";

const ProductPage = ({ product }) => {
  return (
    <UserLayout>{product && <ProductView product={product} />}</UserLayout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      "/products/art-silk-printed",
      "/products/vichitra-silk-2",
      "/products/sea-green-white-cotton-blend-printed-saree",
      "/products/banaras-soft-silk",
      "/products/art-silk-printed",
      "/products/orange-printed-chiffon-saree",
      "/products/art-silk-printed",
      "/products/navy-blue-gold-toned-silk-blend-woven-design-banarasi-saree",
      "/products/white-pink-organza-printed-saree",
      "/products/navy-blue-red-linen-blend-printed-saree",
      "/products/white-embroidered-linen-blend-saree",
      "/products/kanchipuram-silk",
      { params: { slug: "art-silk-printed" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const data = await getProductBySlug(slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product: data },
  };
}

// ProductPage.getInitialProps = async ({ query }) => {
//   const { slug } = query;
//   return { slug };
// };

export default ProductPage;
