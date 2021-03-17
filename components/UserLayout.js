import { Grid } from "@chakra-ui/react";
import Header from "./Header";

const UserLayout = ({ children }) => {
  return (
    <Grid>
      <Header />
      <Grid>{children}</Grid>
    </Grid>
  );
};

export default UserLayout;
