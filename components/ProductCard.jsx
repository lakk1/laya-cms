import { StarIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Image, Text } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

function ProductCard({ isSold = false }) {
  const property = {
    imageUrl: 'https://source.unsplash.com/user/bulbul252/640x900',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '₹1,900',
    discountPrice: '₹1,550',
    discount: '20%',
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      m="16px auto"
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        {/*  <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box> */}

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          <Text as="span" fontWeight="bold" color="red" fontSize="xl">
            {property.formattedPrice}
          </Text>

          <Text
            as="span"
            ml={2}
            color="gray.600"
            fontSize="sm"
            textDecoration={'line-through'}
          >
            {property.discountPrice}
          </Text>
          <Text ml={1} as="span" fontSize="sm" color="red.400">
            ({property.discount})
          </Text>
        </Box>
        {isSold ? (
          <a
            href="https://wa.me/p/4124022570943313/919550645083"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              bg="green.400"
              color="white"
              _hover={{ bg: 'green.100', color: 'green.400' }}
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
        )}

        {/* <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
}

export default ProductCard;
