import { Flex, Box, Text, Link } from "@chakra-ui/react";

const Header = ({ isAdmin }) => {
  return (
    <Flex
      justifyContent="space-between"
      borderBottom="1px solid #ccc"
      h="60px"
      p={4}
    >
      <Box>
        <Link href="/">Logo</Link>
      </Box>
      <Text fontSize="2xl">{isAdmin ? "Admin" : "user"}</Text>
    </Flex>
  );
};

export default Header;
