import { Grid } from '@chakra-ui/react';
import Header from './header';

const UserLayout = ({ children }) => {
  return (
    <Grid>
      <Header />
      <Grid>{children}</Grid>
    </Grid>
  );
};

export default UserLayout;
