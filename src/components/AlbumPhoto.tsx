const AlbumPhoto = ({ photo }: { photo: { url: string; id: number } }) => {
  return (
    <img className="w-100" style={{ height: "80%" }} src={photo.url} alt="" />
  );
};

export default AlbumPhoto;
