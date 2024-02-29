import { IoMdHeart } from "react-icons/io";

const LikeButton = ({
  liked = true,
  onClick,
}: {
  liked: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="border-none  text-white"
      style={{
        border: "none",
      }}
      onClick={onClick}
    >
      <IoMdHeart
        fill={liked ? "red" : "transparent"}
        stroke={liked ? "transparent" : "black"}
        strokeWidth={20}
      />
    </button>
  );
};

export default LikeButton;
