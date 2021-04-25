import { useAuth } from "@/lib/auth";
import {
  Button,
  Center,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiShoppingBag2Line } from "react-icons/ri";

const UserNav = () => {
  const [cartCount, setCartCount] = useState(false);
  const { user, signinWithGoogle, signout } = useAuth();

  useEffect(() => {
    if (user && user.cart) {
      setCartCount(user?.cart.length);
    }
  }, [user?.cart]);
  return (
    <Stack justify={"center"} direction={"row"} spacing={6} cursor="pointer">
      {user ? (
        <Flex align={"center"}>
          <Menu>
            <MenuButton as={Button}>
              <FaRegUser />
            </MenuButton>
            <MenuList>
              <MenuItem href="/my/profile">My Account</MenuItem>
              <MenuItem href="/checkout/cart">Cart</MenuItem>
              <MenuItem
                onClick={() => {
                  signout();
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ) : (
        <Button
          w={"full"}
          maxW={"md"}
          variant={"outline"}
          leftIcon={<FcGoogle />}
          onClick={() => {
            signinWithGoogle();
          }}
        >
          <Center>
            <Text>login</Text>
          </Center>
        </Button>
      )}
      <Flex alignItems="center" position="relative">
        <Link href="/checkout/cart" position="relative">
          <RiShoppingBag2Line size={32} color="black" />
          {cartCount && (
            <Flex
              justifyContent="center"
              borderRadius="90px"
              w="20px"
              h="20px"
              top="-4px"
              right="-8px"
              alignItems="center"
              position="absolute"
              bg="red"
              color="white"
            >
              {cartCount}
            </Flex>
          )}
        </Link>
      </Flex>
    </Stack>
  );
};

export default UserNav;
