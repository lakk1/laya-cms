import { Grid } from "@chakra-ui/react";
import Header from "./Header";

const AdminLayout = ({ children }) => {
  return (
    <Grid>
      <Header isAdmin={true} />
      <Grid>{children}</Grid>
    </Grid>
  );
};

export default AdminLayout;
