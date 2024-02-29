import { Card, Nav } from "react-bootstrap";
import { PostType } from "../types/post";
import { NavLink, useParams } from "react-router-dom";

const Post = ({ post }: { post: PostType }) => {
  const params = useParams();
  return (
    <Nav.Link as={NavLink} to={`/users/${params.userId}/posts/${post.id}`}>
      <Card>
        <Card.Header>{post.title}</Card.Header>
        <Card.Body>
          {/* <Link to={"/users/" + post.id}>Go User</Link> */}
        </Card.Body>
      </Card>
    </Nav.Link>
  );
};

export default Post;
