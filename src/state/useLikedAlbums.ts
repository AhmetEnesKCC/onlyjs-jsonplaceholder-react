import { create } from "zustand";
import { LikedAlbumType } from "../types/album";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type StateType = {
  likedAlbums: LikedAlbumType[];
  setLikedAlbums: (likedAlbums: LikedAlbumType[]) => void;
};

const useLikedAlbums = create<StateType>()(
  devtools(
    persist(
      (set) => ({
        likedAlbums: [],
        setLikedAlbums: (likedAlbums) => set({ likedAlbums }),
      }),
      {
        name: "liked-album-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export const useLikedCount = () => {
  const { likedAlbums } = useLikedAlbums();
  return likedAlbums.length;
};

export default useLikedAlbums;
