import { Box, Flex, SimpleGrid, Stack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import firebase from '../firebase/firebase';
import productImg from '../images/product.jpg';
import ProductCard from './ProductCard';

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
  const getProducts = () => {
    firebase
      .getProducts()
      .then(x => {
        console.log({ x });
      })
      .catch(y => {
        console.log({ y });
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <SimpleGrid
      templateColumns="repeat(auto-fill, minmax(320px, 1fr))"
      gap={{ base: 2, md: 4, lg: 16 }}
    >
      {productList.map(x => (
        <ProductCard isSold={![4, 6, 9].includes(x)} />
      ))}
    </SimpleGrid>
  );
};

export default Products;
