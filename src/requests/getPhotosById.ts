export const getPhotosById = async (albumId: string) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums/" + albumId + "/photos"
  );
  const data = await res.json();
  return data;
};
