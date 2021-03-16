import { Button, Box, Flex, Link } from '@chakra-ui/react';

const AuthContainer = ({ user }) => {
  return (
    <Flex p={12} justifyContent="center" alignItems="center" flexDir="column">
      {user && <Box>Hello {user.name}</Box>}
      <br />
      {user ? (
        <Button
          onClick={() => {
            auth.signout();
          }}
        >
          logout
        </Button>
      ) : (
        <Button
          onClick={() => {
            auth.signinWithGoogle();
          }}
        >
          Please login
        </Button>
      )}
      <Box mt="10">
        <Link href="/admin">Dashboard</Link>{' '}
      </Box>
    </Flex>
  );
};

export default AuthContainer;
