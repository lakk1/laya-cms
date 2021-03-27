import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import PincodeInput from "./PincodeInput";
import { RiShoppingBag3Line } from "react-icons/ri";
import ImageSlider from "./ImageSlider";
import { useAuth } from "@/lib/auth";
import { useEffect, useState } from "react";
import Router from "next/router";

function ProductView({ isSold = false, product }) {
  const { user, addToCart } = useAuth();

  const toast = useToast();
  const [inCart, setIncart] = useState(false);
  useEffect(() => {
    if (user && user.cart) {
      setIncart(user?.cart?.map((x) => x.pid).includes(product.id));
    }
  }, [user?.cart]);
  const handleAddToCart = async () => {
    if (user && inCart) {
      Router.push("/cart");
      // toast({
      //   position: "top",
      //   title: "Soon will take you to cart page",
      // });
      return;
    }
    if (user && user.uid) {
      addToCart(user.uid, product.id).then((x) => {
        setIncart(true);
        toast({
          position: "top-right",
          title: "Added to cart",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      });
    } else {
      toast({
        title: "Please login",
      });
    }
  };

  if (!product.title) {
    return (
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="white"
        m="16px auto"
      >
        "No product"
      </Box>
    );
  }

  return (
    <Flex p={{ base: 0, md: 16 }} justifyContent="center" flexWrap="wrap">
      <Box maxW={{ base: "100vw", md: 600 }} p={{ base: 0, md: 4 }}>
        <ImageSlider media={product.media} />
      </Box>
      <Box p={4} maxW={{ base: "100vw", md: 600 }}>
        <Text fontWeight="semibold" size="md" color="gray.500">
          {product.brand}
        </Text>
        <Heading size="lg" mb={4}>
          {product.title}
        </Heading>
        <Text fontWeight="semibold" color="green" fontSize="sm">
          Special price
        </Text>
        <Box mb={4}>
          <Text as="span" fontWeight="bold" color="red" fontSize="2xl">
            ₹{product.price}
          </Text>
          <Text
            as="span"
            ml={2}
            color="gray.600"
            fontSize="lg"
            textDecoration={"line-through"}
          >
            {product.comparePrice}
          </Text>
          <Text
            ml={1}
            as="span"
            fontSize="md"
            fontWeight="bold"
            color="red.400"
          >
            {product.discount}
          </Text>
          <Text fontSize="sm" fontWeight="semibold" color="orange.600">
            In stock
          </Text>
        </Box>
        <Text my={4}>{product.description}</Text>

        <HStack spacing={4} my={8}>
          <Button
            leftIcon={<RiShoppingBag3Line />}
            colorScheme="pink"
            variant="solid"
            size="lg"
            width="320px"
            onClick={handleAddToCart}
          >
            {inCart ? "open cart" : "Add to Bag"}
          </Button>
          <Button colorScheme="orange" variant="solid" size="lg" width="320px">
            Buy now
          </Button>
        </HStack>
        <Box>
          <Text my={2} fontWeight="bold">
            DELIVERY OPTIONS
          </Text>
          <PincodeInput />
          <Text fontSize="sm" my={2}>
            100% Original Products
          </Text>
          <Text fontSize="sm" my={2}>
            Free Delivery on order above Rs. 799{" "}
          </Text>
          <Text fontSize="sm" my={2}>
            No COD
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductView;
