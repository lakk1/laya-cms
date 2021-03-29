import { Box, Grid, Image, Text, Flex, Link } from "@chakra-ui/react";
import Footer from "./Footer";

const CartLayout = ({ children }) => {
  return (
    <Box>
      <Flex
        height="80px"
        justify={{ base: "center" }}
        alignItems="center"
        borderBottom={1}
        borderStyle={"solid"}
        borderColor="gray.300"
      >
        <Box position="absolute" left={20} top={5}>
          <Link href="/">
            <Image src={"/images/logo.png"} width="120px" alt="laya" />
          </Link>
        </Box>
        <Text fontWeight="semibold" fontSize={22}>
          Cart
        </Text>
      </Flex>
      {children}
      <Footer />
    </Box>
  );
};

export default CartLayout;
