import React from "react";
import useLikedAlbums from "../../state/useLikedAlbums";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const FavouritePage = () => {
  const { likedAlbums, setLikedAlbums } = useLikedAlbums();

  const navigate = useNavigate();

  return (
    <div>
      {likedAlbums.map((likedAlbum) => (
        <div>
          <FaTrash
            onClick={() => {
              setLikedAlbums(
                likedAlbums.filter((lA) => lA.photoId !== likedAlbum.photoId)
              );
            }}
          />
          <img
            onClick={() => {
              navigate(
                `/users/${likedAlbum.userId}/albums/${likedAlbum.album.id}`
              );
            }}
            src={likedAlbum.photoUrl}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default FavouritePage;
