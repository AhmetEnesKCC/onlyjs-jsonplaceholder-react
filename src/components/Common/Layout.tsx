import React from "react";
import { useLikedCount } from "../../state/useLikedAlbums";
import { IoChevronBack } from "react-icons/io5";
import Router from "../../Router";

const Layout = ({ children }: { children: React.ReactElement }) => {
  const likedCount = useLikedCount();

  return (
    <div>
      <a
        onClick={() => {
          Router.navigate("/favourites");
        }}
        className="text-primary "
      >
        Go to favourites
      </a>
      <IoChevronBack
        onClick={() => {
          Router.navigate(-1);
        }}
      />
      <p>Begenilen Albumler: {likedCount}</p>
      {children}
    </div>
  );
};

export default Layout;
