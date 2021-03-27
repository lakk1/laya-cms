import { Grid, Box } from "@chakra-ui/react";
import Header from "./Navigation";
import Footer from "./Footer";

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
