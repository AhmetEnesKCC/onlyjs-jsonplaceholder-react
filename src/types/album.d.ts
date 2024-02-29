export type AlbumType = {
  id: number;
  title: string;
  userId: number;
};

export type LikedAlbumType = {
  userId: number;
  album: AlbumType;
  photoId: number;
  photoUrl: string;
};
