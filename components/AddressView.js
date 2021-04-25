import { useAuth } from "@/lib/auth";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cartItemsData } from "@/components/Navigation/constants";
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import { PriceBox } from "./CartView";
import AddressForm from "./AddressForm";
// const cartItems = cartItemsData;

const AddressView = () => {
  const [cartItems, setCartItems] = useState(cartItemsData);

  if (!cartItems || cartItems.length < 1) {
    return <Box p={32}>No Items in the cart</Box>;
  }
  const getThumbnail = (product) =>
    product?.media && product.media[0]?.imageURL;

  return (
    <Flex
      p={{ base: 2, md: 12 }}
      justifyContent="center"
      flexDir={{ base: "column", md: "row" }}
      maxW="1200px"
      m="0 auto"
    >
      <Flex width="100%" flex="1" p={4}>
        <Flex
          borderRadius="md"
          p={4}
          border={1}
          borderStyle="solid"
          borderColor="gray.200"
          justifyContent="center"
          alignItems="center"
          my={4}
          width="100%"
          maxH="120px"
        >
          <AddressForm />
        </Flex>
      </Flex>
      <Flex width={{ base: "100%", md: "340px" }}>
        <PriceBox />
      </Flex>
    </Flex>
  );
};

export async function getStaticProps(context) {
  const { getUserCart } = useAuth([]);

  const data = await getUserCart();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { cartItems: data },
  };
}

export default AddressView;
