import { Box, Checkbox, Flex, Image, Tag, Text } from "@chakra-ui/react";
import Router from "next/router";

const ListCard = ({ product }) => {
  return (
    <Flex
      p={4}
      borderBottom="1px solid #ccc"
      width="100%"
      cursor="pointer"
      onClick={() => {
        Router.push(`/admin/products/${product.id}`);
      }}
    >
      <Checkbox mr={4} />
      <Flex>
        <Flex alignItems="center" height="60px" width="40px" mx={4}>
          <Image src={product.media[0]["imageURL"]} />
        </Flex>
        <Box width="sm">
          <Text fontSize="md" fontWeight="bold">
            {product.title}
          </Text>
          <Text fontSize="sm">3 Varient</Text>
        </Box>
        <Text fontSize="md">Code: 31S1</Text>
        <Box ml={8}>
          <Tag>Published</Tag>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ListCard;
