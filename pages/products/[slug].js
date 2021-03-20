import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { query } = router;
  return <p>Post: {query.slug}</p>;
};

export default Post;
