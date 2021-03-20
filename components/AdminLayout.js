import {
  Box,
  Flex,
  Grid,
  Center,
  Text,
  VStack,
  Link,
  Button,
} from "@chakra-ui/react";
import { AiFillTags, AiFillHome } from "react-icons/ai";
import Header from "./Navbar";

const AdminLayout = ({ children }) => {
  return (
    <Flex dir="row">
      <Box width="240px" h="100vh" p="32px">
        <Center>
          <Text color="pink.500" fontSize="2xl" fontWeight="bold">
            Laya Creations
          </Text>
        </Center>
        <Box mt="16">
          <Button as="a" href="/admin/products/new" colorScheme="green">
            Add Products
          </Button>
          <Box mt="16">
            <Link
              href="/admin"
              color="gray.400"
              _hover={{ textDecor: "none", color: "pink.500" }}
              mb={4}
              display="block"
            >
              <Flex fontSize="lg" alignItems="center">
                <AiFillHome display="inline" />
                <Text ml={4} textDecor="none">
                  Dashboard
                </Text>
              </Flex>
            </Link>
            <Link
              href="/admin/products"
              color="gray.400"
              _hover={{ textDecor: "none", color: "pink.500" }}
              mb={4}
              display="block"
            >
              <Flex fontSize="lg" alignItems="center">
                <AiFillTags display="inline" />
                <Text ml={4} textDecor="none">
                  Products
                </Text>
              </Flex>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box width="100%">{children}</Box>
    </Flex>
  );
};

export default AdminLayout;
