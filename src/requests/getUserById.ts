export const getUserById = async (userId: string) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );
  const data = await res.json();
  return data;
};
