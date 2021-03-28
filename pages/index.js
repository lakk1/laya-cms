import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import UserLayout from "@/components/UserLayout";
import { useAuth } from "@/lib/auth";
import { getProducts } from "@/lib/db";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";

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
      <Box p={{ base: 0, md: 8 }} minH="40vh">
        <Heading py={4} display="flex" justifyContent="center" w="100%">
          New Collection
        </Heading>
        <Flex flexWrap="wrap">
          {products.map((product, x) => (
            <ProductCard
              product={product}
              key={x}
              isSold={![4, 6, 9].includes(x)}
            />
          ))}
        </Flex>
      </Box>
      <Box p={{ base: 0, md: 8 }}>
        <Heading py={4} display="flex" justifyContent="center" w="100%">
          Trending
        </Heading>
        <Flex flexWrap="wrap">
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
