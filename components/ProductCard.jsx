import { useAuth } from "@/lib/auth";
import { Badge, Box, Button, Image, Text } from "@chakra-ui/react";
import Router from "next/router";

function ProductCard({ isSold = false, product }) {
  const { addToCart } = useAuth();
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
  const imageURL = product?.media && product.media[0]?.imageURL;

  return (
    <Box
      borderRadius="sm"
      overflow="hidden"
      bg="white"
      m={{ base: "0", md: "12px" }}
      cursor="pointer"
      _hover={{ boxShadow: "xl" }}
      maxW={{ base: "100%", md: "300px" }}
    >
      <Image
        src={imageURL}
        alt=""
        onClick={() => {
          Router.push(`/products/${product?.slug}`);
        }}
        width={{ base: "100%", md: "300px" }}
        width={{ base: "auto", md: "400px" }}
        objectFit="cover"
      />

      <Box p="4">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            // fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            4 colors
          </Box>
        </Box>

        <Box>
          <Box mt="1" maxW="100%">
            {product.title}
          </Box>
          <Text as="span" fontWeight="semibold" color="red" fontSize="xl">
            ₹{product.price}
          </Text>

          <Text
            as="span"
            ml={2}
            color="gray.600"
            fontSize="sm"
            textDecoration={"line-through"}
          >
            {product.comparePrice}
          </Text>
          {product.discount && (
            <Text ml={1} as="span" fontSize="sm" color="red.400">
              ({product.discount})
            </Text>
          )}
        </Box>
        {isSold ? (
          <Button
            bg="green.400"
            color="white"
            _hover={{ bg: "green.100", color: "green.400" }}
            mt={4}
            isFullWidth
            fontSize="22px"
            onClick={() => {
              addToCart(product.id);
            }}
          >
            {/* <Box mr={4}>
                <FaWhatsapp />
              </Box> */}
            <Text>ADD TO CART</Text>
          </Button>
        ) : (
          <Button mt={4} isFullWidth fontSize="22px" disabled>
            Sold out
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default ProductCard;
