import { Grid } from '@chakra-ui/react';
import Header from './header';

const AdminLayout = ({ children }) => {
  return (
    <Grid>
      <Header isAdmin={true} />
      <Grid>{children}</Grid>
    </Grid>
  );
};

export default AdminLayout;
