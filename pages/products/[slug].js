import ProductView from "@/components/ProductView";
import UserLayout from "@/components/UserLayout";
import { useAuth } from "@/lib/auth";
import { getProduct } from "@/lib/db";
import { useEffect, useState } from "react";
import { FaCommentsDollar } from "react-icons/fa";

const ProductPage = ({ product }) => {
  return (
    <UserLayout>{product && <ProductView product={product} />}</UserLayout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      // Object variant:
      "/products/2XrcsOipKBYKykCJG8XW",
      "/products/mYaOF0KlyW1oVn8LrECc",
      "/products/ElFsXs0hSPwTEfYpqddW",
      { params: { slug: "ElFsXs0hSPwTEfYpqddW" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const data = await getProduct(slug);

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
