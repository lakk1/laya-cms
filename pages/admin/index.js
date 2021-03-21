import { Grid, Text } from "@chakra-ui/react";
import AdminLayout from "@/components/AdminLayout";

const Admin = ({ res }) => {
  return (
    <Grid>
      <AdminLayout>
        <Text fontSize="2xl"> Dashboard</Text>
      </AdminLayout>
    </Grid>
  );
};

export default Admin;
