import ProductView from "@/components/ProductView";
import UserLayout from "@/components/UserLayout";
import { useAuth } from "@/lib/auth";
import { getProduct } from "@/lib/db";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = ({ slug }) => {
  const auth = useAuth();
  const [product, setProduct] = useState({});
  useEffect(() => {
    if (slug) {
      getProduct(slug).then((item) => {
        setProduct({ ...item });
      });
    }
  }, []);
  return (
    <UserLayout auth={auth}>
      <ProductView product={product} />
    </UserLayout>
  );
};

ProductPage.getInitialProps = async ({ query }) => {
  const { slug } = query;
  return { slug };
};

export default ProductPage;
