export const getCommentsById = async (postId: string) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId + "/comments"
  );
  const data = await res.json();
  return data;
};
