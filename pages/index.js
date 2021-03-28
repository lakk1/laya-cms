import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import UserLayout from "@/components/UserLayout";
import { getProducts } from "@/lib/db";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";

function Home({ products }) {
  const slugs = products.map((p) => p.slug);
  console.log({ slugs });
  return (
    <UserLayout>
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

export async function getStaticProps(context) {
  const data = await getProducts();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products: data },
  };
}

export default Home;
