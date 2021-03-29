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
// const cartItems = cartItemsData;

const CartView = () => {
  const { user, getUserCart } = useAuth();
  const [cartItems, setCartItems] = useState(cartItemsData);
  // useEffect(async () => {
  //   setCartItems(await getUserCart());
  // }, [user]);

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
    >
      <Flex
        p={{ base: 2, md: 8 }}
        flexDir="column"
        borderStyle="solid"
        borderColor="gray.200"
        maxW="800px"
      >
        <Flex
          borderRadius="md"
          p={4}
          border={1}
          borderStyle="solid"
          borderColor="gray.200"
          justifyContent="center"
          alignItems="center"
          my={4}
        >
          <Button variant="outline" colorScheme="pink">
            Add Address
          </Button>
        </Flex>
        <Text fontWeight="semibold">Cart Items (4)</Text>
        <Flex flexDir="column" flexWrap="wrap">
          {cartItems.map((item) => (
            <Flex
              borderRadius="md"
              key={item.id}
              width="100%"
              p={4}
              border={1}
              borderStyle="solid"
              borderColor="gray.200"
              m={2}
              justifyContent="space-between"
            >
              <Flex>
                <Image
                  width="111px"
                  height="148px"
                  p={4}
                  src={getThumbnail(item)}
                />
                <Flex pl="8" flexDir="column" justifyContent="space-between">
                  <Box>
                    <Text fontWeight="semibold">{item.title}</Text>
                    <Text color="gray.400" fontSize="sm">
                      Sold by : laya creations
                    </Text>
                  </Box>
                  <Flex flexWrap="wrap">
                    <ButtonGroup size="sm" isAttached variant="outline">
                      <IconButton
                        aria-label="Add to friends"
                        icon={<MinusIcon />}
                      />
                      <Button mr="-px">01</Button>
                      <IconButton
                        aria-label="Add to friends"
                        icon={<AddIcon />}
                      />
                    </ButtonGroup>
                    <Button
                      m={2}
                      leftIcon={<DeleteIcon />}
                      colorScheme="black"
                      variant="outline"
                      size="sm"
                    >
                      Remove
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
              <Text pl="8" fontSize="12px">
                ₹{item.price}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex width={{ base: "100%", md: "300px" }} my={8} flexDir="column">
        <Box bg="pink.100" p={4} borderRadius="md" width="100%">
          <Flex my={2} justifyContent="space-between">
            <Text>Price</Text>
            <Text>₹1000</Text>
          </Flex>
          <Flex my={2} justifyContent="space-between">
            <Text>Discount</Text>
            <Text>-₹500</Text>
          </Flex>
          <Flex my={4} justifyContent="space-between">
            <Text>Total Price</Text>
            <Text>₹500</Text>
          </Flex>
          <Button
            colorScheme="pink"
            width="100%"
            alignSelf="flex-end"
            borderRadius="sm"
          >
            PLACE ORDER
          </Button>
        </Box>
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

export default CartView;
