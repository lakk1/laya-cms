import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import AdminLayout from "@/components/AdminLayout";
import { getProducts, productsRef } from "@/lib/db";
import { Box, Text, Flex } from "@chakra-ui/react";
import ListCard from "@/components/ListCard";

const Products = () => {
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
    <AdminLayout>
      <Box p={8} mt={16}>
        <Text fontSize="4xl" pb={4}>
          Products
        </Text>
        <Box>
          {loading && "loading...."}
          <Flex p={4} borderBottom="1px solid #ccc" width="100%">
            {/* <Checkbox mr={4} /> */}
            <Flex>
              <Flex width="40px" mx={4}></Flex>
              <Box width="md">
                <Text fontSize="md">Title </Text>
              </Box>
              <Text fontSize="md">Code </Text>
              <Box ml={12}>
                <Text fontSize="md">Status</Text>
              </Box>
            </Flex>
          </Flex>
          {products.map((product) => (
            <ListCard key={product.id} product={product} />
          ))}
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default Products;
