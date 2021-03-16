import { Button, Center, Grid } from "@chakra-ui/react";
import Head from "next/head";
import { useAuth } from "../lib/auth";

export default function Home(props) {
  const auth = useAuth();
  return (
    <Grid>
      <Head>
        <title>Laya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center p={12}>
        {auth.user ? (
          <h1>Hello</h1>
        ) : (
          <Button
            onClick={() => {
              auth.signinWithGoogle();
            }}
          >
            Please login
          </Button>
        )}
        {auth.user && (
          <Button
            onClick={() => {
              auth.signout();
            }}
          >
            logout
          </Button>
        )}
      </Center>
    </Grid>
  );
}
