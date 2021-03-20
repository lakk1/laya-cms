import { useAuth } from "@/lib/auth";
import { Grid } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const UserLayout = ({ children }) => {
  const auth = useAuth();

  return (
    <Grid>
      <Header auth={auth} />
      <Grid>{children}</Grid>
      <Footer />
    </Grid>
  );
};

export default UserLayout;
