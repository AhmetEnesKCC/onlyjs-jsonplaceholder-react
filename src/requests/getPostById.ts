export const getPostById = async (postId: string) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId
  );
  const data = await res.json();
  return data;
};
