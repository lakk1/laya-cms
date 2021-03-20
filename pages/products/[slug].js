import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { query } = router;
  console.log({ query });

  return <p>Post: {query.slug}</p>;
};

export default Post;
