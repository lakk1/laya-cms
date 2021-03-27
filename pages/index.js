import AuthContainer from "@/components/AuthContainer";
import UserLayout from "@/components/UserLayout";
import Head from "next/head";
import { useAuth } from "@/lib/auth";
import ProductCard from "@/components/ProductCard";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Banner from "@/components/Banner";
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/db";

export default function Home(props) {
  const auth = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    setLoading(true);
    getProducts().then((res) => {
      setLoading(false);
      setProducts(res);
    });
  }, []);
  return (
    <UserLayout auth={auth}>
      <Head>
        <title>Laya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Box p={{ base: 0, md: 8 }} minH="60vh">
        <Heading>Trending </Heading>
        <Flex flexWrap="wrap" justifyContent="center">
          {products.map((product, x) => (
            <ProductCard
              product={product}
              key={x}
              isSold={![4, 6, 9].includes(x)}
            />
          ))}
        </Flex>
      </Box>
    </UserLayout>
  );
}
