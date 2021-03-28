import AdminLayout from "@/components/AdminLayout";
import { Grid, Text } from "@chakra-ui/react";

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
