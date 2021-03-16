import { Button } from "@chakra-ui/react";
import Head from "next/head";
import { useAuth } from "../lib/auth";

export default function Home(props) {
  const auth = useAuth();
  return (
    <div>
      <Head>
        <title>Laya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello</h1>
        {auth.user ? (
          "hello"
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
      </main>
    </div>
  );
}
