import ProductCard from "@/components/ProductCard";
import { getProduct } from "@/lib/db";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = () => {
  const router = useRouter();
  const [product, setProduct] = useState({});
  const { query } = router;
  useEffect(() => {
    if (query.slug) {
      getProduct(query.slug).then((item) => {
        console.log(item);
        setProduct({ ...item });
      });
    }
  }, []);
  return <ProductCard product={product} />;
};

export default Post;
