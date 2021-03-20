import AuthContainer from "@/components/AuthContainer";
import UserLayout from "@/components/UserLayout";
import Head from "next/head";
import { useAuth } from "@/lib/auth";
import ProductCard from "@/components/ProductCard";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Banner from "@/components/Banner";

export default function Home(props) {
  const auth = useAuth();
  const productList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <UserLayout auth={auth}>
      <Head>
        <title>Laya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Box padding={8}>
        <SimpleGrid
          templateColumns="repeat(auto-fill, minmax(320px, 1fr))"
          gap={{ base: 2, md: 4, lg: 16 }}
        >
          {productList.map((x) => (
            <ProductCard key={x} isSold={![4, 6, 9].includes(x)} />
          ))}
        </SimpleGrid>
      </Box>
    </UserLayout>
  );
}
