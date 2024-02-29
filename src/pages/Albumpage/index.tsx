import { useLoaderData } from "react-router-dom";
import Album from "../../components/Album";
import { AlbumType } from "../../types/album";
import { UserType } from "../../types/user";
import { Col, Row } from "react-bootstrap";
import AlbumPhoto from "../../components/AlbumPhoto";
import LikeButton from "../../components/LikeButton";
import useLikedAlbums from "../../state/useLikedAlbums";

const AlbumPage = () => {
  const pageData = useLoaderData() as {
    album: AlbumType;
    user: UserType;
    photos: { url: string; id: number }[];
  };

  const { likedAlbums, setLikedAlbums } = useLikedAlbums();

  return (
    <div>
      {pageData.user.name}
      <Album album={pageData.album} />
      <Row className="p-4 row-gap-4">
        {pageData.photos.map((photo) => {
          const isLiked = !!likedAlbums.find((a) => a.photoId === photo.id);
          return (
            <Col sm={2}>
              <AlbumPhoto photo={photo} />
              <LikeButton
                onClick={() => {
                  if (isLiked) {
                    setLikedAlbums(
                      likedAlbums.filter((album) => album.photoId !== photo.id)
                    );
                  } else {
                    setLikedAlbums([
                      ...likedAlbums,
                      {
                        album: pageData.album,
                        photoId: photo.id,
                        userId: pageData.user.id,
                        photoUrl: photo.url,
                      },
                    ]);
                  }
                }}
                liked={isLiked}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default AlbumPage;
