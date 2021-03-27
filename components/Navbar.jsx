import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Avatar,
  Image,
  Center,
  SlideFade,
  Slide,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { RiShoppingBag2Line, RiShoppingBagLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";

export default function WithSubnavigation({ auth }) {
  const { isOpen, onToggle } = useDisclosure();
  const [cartCount, setCartCount] = useState(false);
  const { user, signinWithGoogle, signout } = useAuth();
  useEffect(() => {
    if (user && user.cart) {
      setCartCount(user?.cart.length);
    }
  }, [user?.cart]);
  return (
    <Box height={!isOpen ? "60px" : "100%"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 2, lg: 32 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        position="fixed"
        width="100%"
        zIndex={2}
      >
        <Flex display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={<HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href="/">
            <Image src={"/images/logo.png"} width="120px" alt="laya" />
          </Link>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          justify={"center"}
          direction={"row"}
          spacing={6}
          cursor="pointer"
        >
          {user ? (
            <Flex align={"center"}>
              <Text mr={8}>{user.name}</Text>
              <Button
                colorScheme="red"
                onClick={() => {
                  signout();
                }}
              >
                logout
              </Button>
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
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
          )}
          <Flex alignItems="center" position="relative">
            <Link href="/cart" position="relative">
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
      </Flex>

      <Slide in={isOpen} height="100%" direction="left" style={{ zIndex: 3 }}>
        <MobileNav onToggle={onToggle} />
      </Slide>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4} align="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                //   color={useColorModeValue('gray.600', 'gray.200')}
                _hover={{
                  textDecoration: "none",
                  // color: useColorModeValue('gray.800', 'white'),
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                //   bg={useColorModeValue('white', 'gray.800')}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = ({ onToggle }) => {
  return (
    <Stack
      p={4}
      display={{ md: "none" }}
      position="fixed"
      zIndex={3}
      bg="white"
      h="100%"
      w="80%"
    >
      <Flex h="60px" justifyContent="flex-end" bg="white">
        <IconButton
          onClick={onToggle}
          icon={<CloseIcon w={3} h={3} />}
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />
      </Flex>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}> */}
      <Stack
        mt={2}
        pl={4}
        borderLeft={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        align={"start"}
      >
        {children &&
          children.map((child) => (
            <Link key={child.label} py={2} href={child.href}>
              {child.label}
            </Link>
          ))}
      </Stack>
      {/* </Collapse> */}
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Latest collection",
    // children: [
    //   {
    //     label: 'Explore Design Work',
    //     subLabel: 'Trending Design to inspire you',
    //     href: '#',
    //   },
    //   {
    //     label: 'New & Noteworthy',
    //     subLabel: 'Up-and-coming Designers',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: "Handpicked",
    // children: [
    //   {
    //     label: 'Job Board',
    //     subLabel: 'Find your dream design job',
    //     href: '#',
    //   },
    //   {
    //     label: 'Freelance Projects',
    //     subLabel: 'An exclusive list for contract work',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: "Lehengas",
    href: "#",
  },
];
