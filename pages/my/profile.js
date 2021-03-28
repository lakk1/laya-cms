import ProfileView from "@/components/ProfileView";
import UserLayout from "@/components/UserLayout";
import { useAuth } from "@/lib/auth";
import { Box } from "@chakra-ui/react";

const CartPage = () => {
  const auth = useAuth();
  return (
    <UserLayout>
      <Box p={10}>
        {auth.user ? <ProfileView auth={auth} /> : <h1>No user found</h1>}
      </Box>
    </UserLayout>
  );
};

export default CartPage;
