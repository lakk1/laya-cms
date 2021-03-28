import { Box, Flex } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box
      width="auto"
      overflow="hidden"
      maxW="100vw"
      position="relative"
      bg="lightpink"
    >
      <img
        overflow="hidden"
        translate="transform-x:40px"
        src="/images/banner_bg.png"
        alt="cover"
        style={{
          margin: "0 auto",
          overflow: "hidden",
          width: "100%",
          maxW: "100%",
          position: "relative",
        }}
      />
      <Flex
        position="absolute"
        width="100%"
        height="100%"
        top="0"
        align="center"
        justify="center"
        flexDirection="column"
      >
        <img
          src="/images/banner-logo.png"
          style={{ maxWidth: 180 }}
          alt="Laya"
        />
      </Flex>
    </Box>
  );
};

export default Banner;
