import { SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [productList, setProductList] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
  ]);
  return (
    <SimpleGrid
      templateColumns="repeat(auto-fill, minmax(320px, 1fr))"
      gap={{ base: 2, md: 4, lg: 16 }}
    >
      {productList.map((x) => (
        <ProductCard isSold={![4, 6, 9].includes(x)} />
      ))}
    </SimpleGrid>
  );
};

export default Products;
