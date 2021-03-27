import { useAuth } from "@/lib/auth";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const CartView = () => {
  const { getUserCart } = useAuth([]);
  const [cartItems, setCartItems] = useState();
  useEffect(async () => {
    setCartItems(await getUserCart());
  });

  if (!cartItems || cartItems.length < 1) {
    return <Box p={32}>No Items in the cart</Box>;
  }
  const getThumbnail = (product) =>
    product?.media && product.media[0]?.imageURL;

  return (
    <Box p={12}>
      <Heading>Cart </Heading>
      <Flex padding={4} border="1px solid #ddd" flexDir="column">
        {cartItems.map((item) => (
          <Flex key={item.id} width="100%">
            <Image width="80px" p={4} src={getThumbnail(item)} />
            <Text pl="8" fontSize="22px">
              {item.title}
            </Text>
            <Text pl="8" fontSize="20px">
              ₹{item.price}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Button colorScheme="pink" m={4} size="lg" alignSelf="flex-end">
        Checkout
      </Button>
    </Box>
  );
};

export default CartView;
