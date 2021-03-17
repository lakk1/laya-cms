import AuthContainer from "@/components/AuthContainer";
import UserLayout from "@/components/UserLayout";
import Head from "next/head";
import { useAuth } from "@/lib/auth";

export default function Home(props) {
  const auth = useAuth();
  return (
    <UserLayout>
      <Head>
        <title>Laya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthContainer auth={auth} />
    </UserLayout>
  );
}
