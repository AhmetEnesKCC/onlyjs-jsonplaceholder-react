import { useLoaderData } from "react-router-dom";
import { UserType } from "../../types/user";
import { PostType } from "../../types/post";
import { Comment } from "../../types/comment";
import User from "../../components/User";
import Post from "../../components/Post";

const PostPage = () => {
  const pageData = useLoaderData() as {
    user: UserType;
    post: PostType;
    comments: Comment[];
  };
  return (
    <div>
      <User user={pageData.user} />
      <Post post={pageData.post} />
    </div>
  );
};

export default PostPage;
