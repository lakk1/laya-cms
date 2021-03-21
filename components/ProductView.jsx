import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import PincodeInput from "./PincodeInput";
import { RiShoppingBag3Line } from "react-icons/ri";

function ProductView({ isSold = false, product }) {
  const property = {
    imageUrl: "https://source.unsplash.com/user/bulbul252/640x900",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "₹1,900",
    discountPrice: "₹1,550",
    discount: "20%",
    reviewCount: 34,
    rating: 4,
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
  const imageURL = product?.media && product.media[0]?.imageURL;

  return (
    <Flex p={16} justifyContent="center">
      <Box maxW={600} p={4}>
        <Image src={imageURL} />
      </Box>
      <Box p={4} maxW={600}>
        <Text fontWeight="semibold" size="md" color="gray.500">
          CATEGORY
        </Text>
        <Heading size="lg" mb={4}>
          {product.title}
        </Heading>
        <Text fontWeight="semibold" color="green" fontSize="sm">
          Special price
        </Text>
        <Box mb={4}>
          <Text as="span" fontWeight="bold" color="red" fontSize="2xl">
            {property.formattedPrice}
          </Text>
          <Text
            as="span"
            ml={2}
            color="gray.600"
            fontSize="lg"
            textDecoration={"line-through"}
          >
            {property.discountPrice}
          </Text>
          <Text
            ml={1}
            as="span"
            fontSize="md"
            fontWeight="bold"
            color="red.400"
          >
            ({property.discount})
          </Text>
          <Text fontSize="sm" fontWeight="semibold">
            Inclusive of all taxes
          </Text>
        </Box>
        <Text my={4}>
          Grand n rich Kanchi Soft Silk Sarees with allover goldenn thread jari
          weaved... in Meena butta style... Rich weaved goldenn multi colour
          jari buttis in border of the Saree......multi colour meenakari Pallu🥰
        </Text>

        <HStack spacing={4} my={8}>
          <Button
            leftIcon={<RiShoppingBag3Line />}
            colorScheme="pink"
            variant="solid"
            size="lg"
            width="320px"
          >
            Add to Bag
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
