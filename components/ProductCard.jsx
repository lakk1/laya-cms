import { Badge, Box, Button, Image, Text } from "@chakra-ui/react";
import Router from "next/router";
import { FaWhatsapp } from "react-icons/fa";

function ProductCard({ isSold = false, product }) {
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
      maxW="300px"
    >
      <Image
        src={imageURL}
        alt=""
        onClick={() => {
          Router.push(`/products/${product.id}`);
        }}
        width={{ base: "100%", md: "auto" }}
        height={{ base: "auto", md: "400px" }}
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

        <Box
          mt="1"
          // fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {product.title}
        </Box>

        <Box>
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
        {/* {isSold ? (
          <a
            href="https://wa.me/p/4124022570943313/919550645083"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              bg="green.400"
              color="white"
              _hover={{ bg: "green.100", color: "green.400" }}
              mt={4}
              isFullWidth
              fontSize="22px"
            >
              <Box mr={4}>
                <FaWhatsapp />
              </Box>
              <Text>BUY</Text>
            </Button>
          </a>
        ) : (
          <Button mt={4} isFullWidth fontSize="22px" disabled>
            Sold out
          </Button>
        )} */}
      </Box>
    </Box>
  );
}

export default ProductCard;
