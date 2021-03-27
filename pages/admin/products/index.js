import AdminLayout from "@/components/AdminLayout";
import ProductsTable from "@/components/ProductsTable";
import { getProducts } from "@/lib/db";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
