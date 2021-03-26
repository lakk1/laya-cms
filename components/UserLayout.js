import { Grid } from "@chakra-ui/react";
import Header from "./Navbar";
import Footer from "./Footer";

const UserLayout = ({ children }) => {
  return (
    <Grid>
      <Header />
      <Grid>{children}</Grid>
      <Footer />
    </Grid>
  );
};

export default UserLayout;
