export const getAlbumById = async (albumId: string) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums/" + albumId
  );
  const data = await res.json();
  return data;
};
