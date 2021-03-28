import { Box, Grid } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Navigation";

const UserLayout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Grid>{children}</Grid>
      <Footer />
    </Box>
  );
};

export default UserLayout;
