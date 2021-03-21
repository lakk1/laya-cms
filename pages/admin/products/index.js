import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import AdminLayout from "@/components/AdminLayout";
import { getProducts, productsRef } from "@/lib/db";
import { Box, Text, Flex } from "@chakra-ui/react";
import ListCard from "@/components/ListCard";
import ProductsTable from "@/components/ProductsTable";

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
          {products && products.length > 0 && (
            <Box my={16}>
              <ProductsTable products={products} />
            </Box>
          )}
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default Products;
